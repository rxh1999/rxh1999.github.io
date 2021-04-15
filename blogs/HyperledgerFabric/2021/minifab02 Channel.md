---
title: minifab02 Channel
date: 2021-04-15
tags:
 - blockchain
categories: 
 - HyperledgerFabric
---
## process
- create a channel
- join all peers to the channel
- get channel configuration file
- modify
- sign off & submit
## code
```bash
./minifab create -c coolchannel
  ```
```bash
./minifab join
```
```bash
./minifab channelquery
```
modify the file produced by previous command
```bash
./minifab channelsign
./minifab channelupdate
```