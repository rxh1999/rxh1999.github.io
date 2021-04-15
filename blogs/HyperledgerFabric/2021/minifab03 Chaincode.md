---
title: minifab03 Chaincode
date: 2021-04-15
tags:
 - blockchain
categories: 
 - HyperledgerFabric
---
## process
- create your chaincode, place it in vars/chaincode/chaincode_name
- install chaincode
- pick an admin from each org to participate to approve the chaincode
- commit chaincode
- (initialize your chaincode with init params if your chaincode require Init method)
- discover chaincode
- invoke chaincode
- check the block
## code
```bash
./minifab install -n simple -v 2.0 
./minifab approve
./minifab commit 
./minifab initialize -p '<<init params>>'
./minifab discover
./minifab invoke -p '<<invoke params>>'
./minifab blockquery -b <<block number | newest>>
```
```bash
./minifab install -n simple -v 2.0
./minifab approve,commit,initialize,discover -p '<<init params>>'
```
## errors
- [踩坑记录](/blogs/HyperledgerFabric/2021/minifab0x%20踩坑记录/#error1)
