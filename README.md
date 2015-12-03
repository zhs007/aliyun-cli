# aliyun-cli
一个跨平台的阿里云命令行工具。

特点
---
* 跨平台，易于部署，非常方便的在服务器、客户端各种不同环境下统一运行
* 支持通配符，支持子目录遍历，自动在OSS下建目录结构，而且在各种平台下表现一致
* 在同步OSS的同时，支持文件级别的实时CDN刷新
* 支持服务器使用内网方式运行，最大传输效率利用
* 支持不同OSS之间的文件传输
* 支持同OSS之间的文件复制

更新说明
---
* **0.2.0**
 * **oss-cli** 增加对同步CDN刷新功能
 * **oss-cli** 里，调整 **osspath** 为非必填参数，不带该参数，将默认传到根目录下
 * **oss-cli** 里，增加对 **osspath** 参数容错处理，会自动去除不必要的 **/** 字符

* **0.1.0**
 * **oss-cli** 的支持

安装
---
全局安装aliyun-cli即可。

```
npm install aliyun-cli -g
```

使用 oss-cli
---
我们可以将本地文件直接传到OSS上

```
oss-cli *.md --id=<accessKeyId> --key=<secretAccessKey> --bucket=<bucket> --osspath=test --endpoint=hz --islocal=true --cdn=http://cdn.simyouxi.com
```

这样就可以将*.md文件传到oss的test目录下。

参数定义如下：

* **id** - 用户自己阿里云配置的 accessKeyId
* **key** - 用户自己阿里云配置的 secretAccessKey
* **bucket** - 用户自己阿里云的目标 bucket
* **osspath** - 可选参数，默认传到根目录，如果需要调整，就是oss上的目录
* **endpoint** - oss开通的区域，杭州就是hz，北京就是bj等等
* **islocal** - 可选参数，表示是否内网传输，如果从ecs上传文件，可以给true，这样速度会很快，否则给false
* **cdn** - 可选参数，如果填了这个参数，表示会同时刷新CDN文件

