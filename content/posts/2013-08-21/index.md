---
title: "CentOS에서 인코딩 형식 바꾸기"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2013-08-21 15:01:20 +0900"
slug: "change-encoding-on-centos"
tags:
  - centos
  - linux
---


관리자권한으로
euc-kr -> utf8 로 바꾸기.

```shell
 # echo $LANG
ko_KR.EUC-KR
 # vi /etc/sysconfig/i18n
```

```shell
 LANG="ko_KR.EUC-KR" 아래처럼변경
 LANG="ko_KR.utf8"
```

```shell
# source /etc/sysconfig/i18n
```



EUC-KR 로 생성되있던 파일 utf8로 바꾸기.

 ```shell
 # iconv -f=EUC-KR -t=utf8 파일명
```
