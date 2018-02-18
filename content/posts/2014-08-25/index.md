---
title: "PHP 에서 mkdir 같은 커맨드를 사용할 때 권한 문제"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2014-08-25 11:32:57 +0900"
tags: 
  - php
---

php 에서 mkdir 이나 chmod 등 권한을 필요로 하는 명령어를 입력하려고 하면 안될때가 종종 있다.

그럴때 현재 php 가 어떤사용자로 돌아가고 있는지 확인 후 소유자를 바꿔주면 된다.

아니면 그냥 777권한을 주자 .


현재 프로세스 사용자 확인 :
{% highlight php %}
$processUser = posix_getpwuid(posix_geteuid());
 echo($processUser['name']);
{% endhighlight %}
