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



```
set name "Jae"
get name

> "Jae"
```

```
set nametemp "Jae" EX 10
exists nametemp
> 1 or 0

TTL nametemp
> seconds left to be expired

SET greetting "Hello" EX 130
TTL greetting
> 128

PERSIST greetting 
TTL greetting
> -1
```

```
del name
```

```
append name2 "Jang"
append name2 "Jae"
get name

> "JangJae"
```

```
subscribe newvideos
# open the other client
publish newvideos "new video up"
```

```
SET foo 100
GET foo
> 100

INCR foo
GET foo
> 101

DECR foo
GET foo
> 100
```

```
SET server:name somename
GET server:name

> "someserver
```

```
MSET key1 "Hello" key2 "World
GET key1
> "Hello"
GET key2
> "World"
```

```
SET key1 "Hello"
RENAME key1 greeting

GET key1
> nil

GET greetting
> "Hello"
```

### List

```
LPUSH list1 "First"
LPUSH list1 "Second"
LPUSH list1 "Third"

# output everything
LRANGE list1 0 -1
> 1) "Third"
> 2) "Second"
> 3) "First"

LRANGE list1 1 2
> 1) "Second"
> 2) "First"


RPUSH list1 "Zero"
LRANGE list1 0 -1
> 1) "Thrid"
> 2) "Second"
> 3) "First"
> 4) "Zero"

#Length
LLEN list1
> 4

#Pop
LPOP list1
LRANGE list1 0 -1
> 1) "Second"
> 2) "First"
> 3) "Zero"
```


### For more commands, go to https://redis.io/commands