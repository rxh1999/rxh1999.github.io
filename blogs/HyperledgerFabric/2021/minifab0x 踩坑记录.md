---
title: minifab0x 踩坑记录
date: 2021-04-15
tags:
 - blockchain
categories: 
 - HyperledgerFabric
---
## error1
### 命令: ./minifab install -n simple -v 2.0
### 错误信息
  ```text
  # Run the chaincode install script on cli container ***********
  non-zero return code
  Error: chaincode install failed with status: 500 - failed to invoke backing implementation of 'InstallChaincode': could not build chaincode: docker build failed: docker image build failed: docker build failed: Error returned from build: 1 "google.golang.org/protobuf/internal/detrand
  google.golang.org/protobuf/internal/errors
  google.golang.org/protobuf/encoding/protowire
  google.golang.org/protobuf/internal/pragma
  ...
  github.com/hyperledger/fabric/protos/utils
  github.com/hyperledger/fabric/core/chaincode/shim
  simple
  /usr/local/go/pkg/tool/linux_amd64/link: signal: killed
  "
```

### 原因
注意最后一句：/usr/local/go/pkg/tool/linux_amd64/link: signal: killed，原因是build的时候内存不足，导致程序被kill
### 解决方案
1. 创建要作为swap分区的文件:增加1GB大小的交换分区，则命令写法如下，其中的count等于想要的块的数量（bs*count=文件大小）。
```bash
dd if=/dev/zero of=/root/swapfile bs=1M count=1024

```
2. 格式化为交换分区文件:
```bash
mkswap /root/swapfile #建立swap的文件系统
```

3. 启用交换分区文件:
```bash
swapon /root/swapfile #启用swap文件
```
4. 使系统开机时自启用，在文件/etc/fstab中添加一行：
```text
/root/swapfile swap swap defaults 0 0
```
### 参考链接
<https://blog.csdn.net/weixin_33805557/article/details/88924468>