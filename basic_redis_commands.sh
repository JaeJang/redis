docker run --name rdb -p 6379:6379 redis

docker exec -it rdb redis-cli

set name "Jae"
get name

set nametemp "Jae" EX 10

exists nametemp
exists name

del name

append name "jae"
get name



subscribe newvideos
# open the other client
publish newvideos "new video up"