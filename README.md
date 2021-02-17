# Redis

## In Memory Key-Value Store

 - Redis is Key-Value Store NoSQL Database
 - Key is a string, value is pretty much anything
 - Redis is in memory first
 - Single threaded (except when durability is enabled)

## Optional Durability

 - Jouranling (append only log AOP)
 - Snapshotting
 - Both happen asynchronously in the background

## Transport Protocol

 - Uses TCP
 - Request / Response just like HTTP
 - Message format is RESP (REdis Serialization Protocol)

## Pub/Sub (Publish / Subscribe)

 - Redis support Publish subscribe model
 - Switches to PUSH model in that case
  
## Replication / Clustering

 - Replication - one leader (that you write everything to it) and many followers model (pull data)
 - Clustering - Shard data across multiple nodes
 - Hybrid

