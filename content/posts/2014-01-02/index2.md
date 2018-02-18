---
title: "Nginx http 에서 https로 리다이렉트 시키기"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2014-01-02 13:42:30 +0900"
tags: 
      - nginx
---

간단하게 아래처럼 써준다.

{% highlight text %}
server {
      listen      1.2.3.4:80 default;
      server_name example.com www.example.com;
      ## redirect http to https ##
      rewrite        ^ https://$server_name$request_uri? permanent;
}
{% endhighlight %}
