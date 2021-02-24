const http = require("http");
const ws = require("websocket");
const redis = require("redis");

const APPID = process.env.APPID;
let connections = [];
const WebSocketServer = ws.server;

const subscriber = redis.createClient({
  port: 6379,
  host: "rds",
});

const publisher = redis.createClient({
  port: 6379,
  host: "rds",
});

subscriber.on("subscribe", function (channel, count) {
  console.log(`Server ${APPID} subscribed successfully to livechat`);
  publisher.publish("livechat", "a message");
});

subscriber.on("message", function (channel, message) {
  try {
    console.log(`Server ${APPID} received message in channel ${channel}`);
    connections.forEach((c) => c.send(APPID + ":" + message));
  } catch (err) {
    console.log("ERR::" + err);
  }
});

subscriber.subscribe("livechat");

const httpserver = http.createServer();

const websocet = new WebSocketServer({
  httpServer: httpserver,
});

httpserver.listen(8080, () => console.log("connected"));

websocet.on("request", (request) => {
  const con = request.accept(null, request.origin);
  con.on("open", () => console.log("opened"));
  con.on("close", () => console.log("closed"));
  con.on("message", (message) => {
    console.log(`${APPID} Received message ${message.utf8Data}`);
    publisher.publish("livechat", message.utf8Data);
  });

  setTimeout(() => con.send(`Connected successfully to server ${APPID}`), 5000);
  connections.push(con);
});

// client code
/* 
let ws = new WebSocket("ws://localhost:8080");
ws.onmessage = message => console.log(`Received: ${message.data}`);
ws.send("Hello World. I'm a client");
 */

 // code clean up after closing connection
/* 
 subscriber.unsubscribe();
 subscribe.quit();
 publisher.quit();
  */