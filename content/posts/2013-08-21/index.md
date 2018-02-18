---
title: "change encoding on centos"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2013-08-21 15:01:20 +0900"
tags: encoding centos linux
---


관리자권한으로
euc-kr -> utf8 로 바꾸기.

{% highlight bash %}
 # echo $LANG
ko_KR.EUC-KR
 # vi /etc/sysconfig/i18n
{% endhighlight %}

{% highlight bash %}
 LANG="ko_KR.EUC-KR" 아래처럼변경
 LANG="ko_KR.utf8"
{% endhighlight %}

{% highlight bash %}
# source /etc/sysconfig/i18n
{% endhighlight %}



EUC-KR 로 생성되있던 파일 utf8로 바꾸기.

 {% highlight bash %}
 # iconv -f=EUC-KR -t=utf8 파일명
{% endhighlight %}
