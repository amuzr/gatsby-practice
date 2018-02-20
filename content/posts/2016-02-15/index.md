---
title: "yum 을 이용해서 mssql 연결하기"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2016-02-15 18:52:16 +0900"
slug: "connect-mssql-in-linux-using-yum"
tags: 
  - centos
  - linux
  - isql
---


리눅스에서 yum 으로 MSSQL 서버 연결하는 방법

#### yum 설치
```shell
# yum install freetds unixODBC
```

#### tsql 을 이용해 접속해본다.
```shell
# tsql -S [아이피나 호스트명] -U [사용자아이디] -P [비밀번호]
```

나오는방법은 `^D`

#### unixODBC 세팅
```shell
# vi /etc/odbcinst.ini
```

아래 추가
```ini
[FreeTDS]
Description = FreeTDS Driver
Driver = /usr/lib64/libtdsodbc.so.0
Setup = /usr/lib64/libtdsS.so.2
FileUsage = 1
```


#### odbc 이름 등록
```shell
# vi /etc/odbc.ini
```

아래 추가
```ini
[MYDSN]
Driver = FreeTDS
Server = [IP address]
Port = 1433
```

```shell
# isql MYDSN [사용자아이디] [비밀번호] -v
```

나오는방법은 ^D

끝!

-- 위처럼 하면 한글이 깨진다 !

```shell
# vi /etc/freetds
```

아래 추가
```ini
[서버네임]
host = IP address
port = 1433
tds version = 7.0
client charset = UTF-8
```

```shell
# vi /etc/odbc.ini
```

```shell
[MYDSN]
Driver = FreeTDS
Servername = 서버네임
Database = DB이름
```



이렇게 하면 한글이 깨지지 않는다 !!
