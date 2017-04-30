---
title: "Windows npm - EPERM: operation not permitted on Hatası"
description: "Npm install kodunu çalıştırdığınızda Error: EPERM: operation not permitted şekilde hatanın çözümü.."
date: 2017-04-29 19:20:00
categories: [genel]
tags: [npm]
postimg: "npm-paketlerinin-bulundugu-dizin.png"
---

Npm install komutunu çalıştırdığınızda aşağıdaki gibi bir hata alıyorsanız. Çözüm kısmında yer alan kodu çalıştırmanı yeterlidir. 

![Windows npm - EPERM: operation not permitted on Hatası By Boris Vacher (derivative work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons](https://ahmetcadirci.com.tr/images/npm-paketlerinin-bulundugu-dizin.png "Windows npm - EPERM: operation not permitted on Hatası")

**Hata**

```
Error: EPERM: operation not permitted, mkdir 'C:\Program Files\Git\usr\local' at Error (native)
```

**Çözüm**

1. Başlat 
2. Arama kutucuğuna `cmd` yazın. 
3. `Yönetici olarak çalıştır`
4. Aşağıdaki komut yazın ve enter tuşuna basın.

```
npm config set prefix /usr/local
```

Daha farklı hatalar alıyorsanız aşağıdaki linkten yardım alabilirsiniz.

[Npm issues](https://github.com/npm/npm/issues){:target="_blank"}