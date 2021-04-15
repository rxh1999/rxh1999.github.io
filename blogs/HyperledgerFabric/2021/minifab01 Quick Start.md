---
title: minifab01 Quick Start
date: 2021-04-15
tags:
 - blockchain
categories: 
 - HyperledgerFabric
---

## 安装

```bash
mkdir -p ~/mywork && cd ~/mywork && curl -o minifab -sL https://tinyurl.com/yxa2q6yr && chmod +x minifab
```
<https://github.com/hyperledger-labs/minifabric>

## 配置spec.yaml

默认spec文件: <https://github.com/hyperledger-labs/minifabric/blob/main/spec.yaml>

- 必须配置log-opt，否则不会自动清理log

## 启动minifab

- 开启7000-7500端口，both tcp & udp（[minifab端口规则](https://github.com/hyperledger-labs/minifabric/blob/main/docs/README.md#setup-a-network-using-a-different-spec))
- 添加[ spec.yaml文件 ](https://github.com/hyperledger-labs/minifabric/blob/main/spec.yaml)
  - 配置log-opt
- 启动命令
  ```bash
  ./minifab -i 2.2.2 -e true -s couchdb -o yourorg.example.com
  ```

## 参考文献

<https://github.com/hyperledger-labs/minifabric>

<https://github.com/hyperledger-labs/minifabric/blob/main/docs/README.md#Setup-a-network-using-a-different-spec>



