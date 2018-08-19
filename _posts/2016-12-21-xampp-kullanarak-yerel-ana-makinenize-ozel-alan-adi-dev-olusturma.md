---
title      : "XAMPP Kullanarak Yerel Ana Makinenize Özel Alan Adı (.dev) Oluşturma"
description: "XAMPP kullanarak localhost'ta .dev uzantılı özel domain oluşturma. Kodlar Windows'u temel alır, ancak 2. adımdan itibaren diğer işletim sistemlerine uygulanabilir."
date       : 2016-12-21 13:45:00
categories : [Web Tasarım, Teknoloji, Program, PHP]
tags       : [Windows 10, XAMPP, Sanal Server, Local Host]
image      : "/images/xampp-kullanarak-yerel-ana-makinenize-ozel-alan-adi-dev-olusturma.png"
comments   : true
---

Kodlar Windows'u temel alır, ancak 2. adımdan itibaren diğer işletim sistemlerine uygulanabilir.

#### 1. Adım:

![hosts dosyası](https://ahmetcadirci.com.tr/images/galeri/hosts-dosyasi.png "hosts dosyası")

Aşağıdaki dosya dizinine gidin.

```
C:\Windows\System32\Drivers\etc\hosts
```

Dosyayı herhangi bir yazı editör programıyla açın ve bu dosyanın altına ekleyin:

```
127.0.0.1     wordpress.dev
```

#### 2. Adım:

XAMPP dizini gidin

```
C:\xampp\apache\conf\extra\httpd-vhosts.conf
```

#### 3. Adım:

Dosyanın altına gidin ve bu kodu kopyalayıp yapıştırın:

```
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "C:/xampp/htdocs/wordpress/"
    
    ServerName wordpress.dev
    ServerAlias www.wordpress.dev
    ErrorLog "logs/wordpress.dev-error.log"
    CustomLog "logs/wordpress.dev-access.log" common
</VirtualHost>
```
* Daha sonra `worpdress.dev`alan adının yerine isteğiniz uzantıyı yazın.

* `C:/xampp/htdocs/wordpress/` dosyalarınızın bulunduğu klasöre değiştirin.

![httpd-vhosts.conf dosyası](https://ahmetcadirci.com.tr/images/galeri/httpd-vhosts-conf-dosyasi.png "httpd-vhosts.conf dosyası")

#### 4. Adım:

Apache'yi XAMPP'de durdurun, 5 saniye bekleyin, ardından "Başlat" a tıklayarak Apache'yi yeniden başlatın.

Her şey iyi giderse tarayıcınıza açın. `wordpress.dev` yazın veya oluşturduğunuz alan adı uzantısını girin.

![wordpress.dev domain uzantısı chrome ekran görüntüsü](https://ahmetcadirci.com.tr/images/xampp-kullanarak-yerel-ana-makinenize-ozel-alan-adi-dev-olusturma.png "wordpress.dev domain uzantısı chrome ekran görüntüsü")

#### XAMPP Nedir?

XAMPP (Extended Apache/MariaDB/PHP/Perl) bir web sunucusu yazılımıdır.

Xampp server ile bilgisayara PHP, MariaDB, Perl ve Apache yanında FileZilla ve MercuryMail gibi sistemler kurularak hazır bir web sunucusu oluşturulabilmektedir.

#### Localhost Nedir?

localhost , o anda kullanılan bilgisayarı, veya sahip olduğu ip adresini belirtir. Uzaktaki bir bilgisayar ile yapılan iletişimi, o an kullanılan bilgisayar ile yapılması gerektiği her durumda, bu adres kullanılır. Aynı sistem üzerinde hem sunucu hem de istemci programı varsa (mesela web sunucusunu test etmek), adres satırına `127.0.0.0/8`, örneğin `http://127.0.0.1/` veya `http://localhost/` biçiminde URL kullanılabilir.

* * * 

##### Dış bağlantılar

1. [XAMPP](https://tr.wikipedia.org/wiki/XAMPP){:target="_blank"}{:rel="noopener"}
2. [Localhost](https://tr.wikipedia.org/wiki/Localhost){:target="_blank"}{:rel="noopener"}
3. [XAMPP Resmi Sitesi](https://www.apachefriends.org/tr/download.html){:target="_blank"}{:rel="noopener"}
4. [RFC 3330](https://tools.ietf.org/html/rfc3330){:target="_blank"}{:rel="noopener"} "Special-Use IPv4 Addresses"
5. [RFC 3513](https://tools.ietf.org/html/rfc3513){:target="_blank"}{:rel="noopener"} "Internet Protocol Version 6 (IPv6) Addressing Architecture"