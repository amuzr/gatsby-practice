---
title: "MySql 에서 암호화 복호화 참고"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2013-08-07 11:02:09 +0900"
tags:
  - mysql
---

{% highlight sql %}
-- 암호화
insert into table (pass) values ( (HEX(AES_ENCRYPT('암호','key')));
--  복호화
select AES_DECRYPT(UNHEX(pass), 'key')

{% endhighlight %}

자세한 설명은 생략한다.
