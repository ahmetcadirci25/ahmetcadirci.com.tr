---
title      : "Npm Paketlerinin Bulunduğu Dizin"
description: "Npm paketlerinin nereye yüklendiğini görmek için npm list -g kodunu teriminalde çalıştırabilirsiniz."
date       : 2017-04-29 18:40:00
categories : [Kod, Program]
tags       : [Npm, Windows 10, Unix]
image      : "/images/npm-paketlerinin-bulundugu-dizin.png"
comments   : true
---

Npm paketlerinin nereye yüklendiğini görmek için `npm list -g` kodunu teriminalde çalıştırabilirsiniz.

**Dosya Dizinleri**

Windows 7 - 8 - 10

```
%AppData%\npm\node_modules
```

Windows XP

```
%USERPROFILE%\Application Data\npm\node_modules
```

Unix

```
/usr/local/lib/node
```

veya 

```
/usr/local/lib/node_modules
```

### Npm Nedir?

npm javascript betik dili için geliştirilmiş olan ve Node.js'in standart olarak kabul ettiği bir paket yönetim sistemidir. npm komut satırından çalıştırılır ve uygulamalar için bağımlılık yönetimi (dependency management) sağlar. Ayrıca geliştiricilerin merkezi bir npm kaynağından var olan paketleri kurmasına imkan verir. npm tamamen javascript dili kullanılarak Isaac Z. Schuleter tarafından, PHP'nin PEAR ve Perl'in CPAN sistemlerinden esinlenilerek geliştirilmiştir. <sup>1</sup>


#### Bibliyografya:

1. Npm. ‎29 ‎Nisan ‎2017. https://tr.wikipedia.org/wiki/Npm