### Keywords for this tutorial:

 - Cross-origin resource sharing 
 - HTTP access control (CORS) 
 - Same-origin policy

#### Steps:

#### 1)
```
$ npm install 
$ node cross-domain-server/server.js
$ cd origin-server 
$ node origin-server.js 
```

1. Open ***localhost:2000/index.html*** in chrome browser
2. Open console in developer tools (f12)
3. Click ***Send CORS Request***
4. See the result in the console:

> XMLHttpRequest cannot load http://localhost:3000/. The 'Access-Control-Allow-Origin' header contains the invalid value 'google.com'. Origin 'http://localhost:2000' is therefore not allowed access.

It is because only google.com is allowed to send CORS request. See ***cross-domain-server/server.js***

#### 2)

Open a terminal and and type:
```
$ curl -v -H "Origin: localhost:2000" localhost:3000
```
Check ***Host***, ***Origin*** and ***Access-Control-Allow-Origin*** in the output:

> ...
> 
> Host: localhost:3000
> 
> Origin: localhost:2000
> 
> ...
> 
>  Access-Control-Allow-Origin: google.com
>  ...