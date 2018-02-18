---
title: "yum 을 이용해서 mssql 연결하기"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2016-02-15 18:52:16 +0900"
tags: 
  - centos
  - linux
  - isql
---


리눅스에서 yum 으로 MSSQL 서버 연결하는 방법

#### yum 설치
{% highlight bash %}
# yum install freetds unixODBC
{% endhighlight %}

#### tsql 을 이용해 접속해본다.
{% highlight bash %}
# tsql -S [아이피나 호스트명] -U [사용자아이디] -P [비밀번호]
{% endhighlight %}

나오는방법은 `^D`

#### unixODBC 세팅
{% highlight bash %}
# vi /etc/odbcinst.ini
{% endhighlight %}

아래 추가
{% highlight ini %}
[FreeTDS]
Description = FreeTDS Driver
Driver = /usr/lib64/libtdsodbc.so.0
Setup = /usr/lib64/libtdsS.so.2
FileUsage = 1
{% endhighlight %}


#### odbc 이름 등록
{% highlight bash %}
# vi /etc/odbc.ini
{% endhighlight %}

아래 추가
{% highlight ini %}
[MYDSN]
Driver = FreeTDS
Server = [IP address]
Port = 1433
{% endhighlight %}

{% highlight bash %}
# isql MYDSN [사용자아이디] [비밀번호] -v
{% endhighlight %}

나오는방법은 ^D

끝!

-- 위처럼 하면 한글이 깨진다 !

{% highlight bash %}
# vi /etc/freetds
{% endhighlight %}

아래 추가
{% highlight ini %}
[서버네임]
host = IP address
port = 1433
tds version = 7.0
client charset = UTF-8
{% endhighlight %}

{% highlight bash %}
# vi /etc/odbc.ini
{% endhighlight %}

{% highlight bash %}
[MYDSN]
Driver = FreeTDS
Servername = 서버네임
Database = DB이름
{% endhighlight %}



이렇게 하면 한글이 깨지지 않는다 !!
