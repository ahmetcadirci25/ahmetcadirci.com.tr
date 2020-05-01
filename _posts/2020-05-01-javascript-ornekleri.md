---
title      : "JavaScript Örnekleri"
description: "JavaScript dilinin çeşitli tekniklerini ve özelliklerini gösteren kapsamlı bir uygulamalı JavaScript örnekleri içerir."
date       : 2020-05-01 20:00:00
categories : [Kod, Program]
tags       : [JavaScript Örnekleri, JavaScript Örnekleri Basit, JavaScript Kod Örnekleri, JavaScript Uygulamaları]
image      : "/images/javascript-ornekleri.png"
comments   : true
---

JavaScript dilinin çeşitli tekniklerini ve özelliklerini gösteren kapsamlı bir uygulamalı JavaScript örnekleri içerir. 

**Örnekler devamlı güncellenecektir.**

#### JavaScript "Merhaba Dünya!" Uygulaması

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript "Merhaba Dünya!" Uygulaması</title>
</head>
<body>

    <script>
        let merhaba = "Merhaba Dünya!";
        console.log(merhaba);
    </script>

    <p>Not: Klavyedeki F12 tuşuna basarak tarayıcı konsoluna (console) bakın.</p>

</body>
</html>
```

#### JavaScript Kodunu Bir HTML Dosyasına Gömme

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Kodunu Bir HTML Dosyasına Gömme</title>
</head>
<body>

    <script>
        let merhaba = "Merhaba Dünya!";
        document.write(merhaba);
    </script>

</body>
</html>
```

#### HTML Belgesinde Harici Bir JavaScript Dosyası Çağırma

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>HTML Belgesinde Harici Bir JavaScript Dosyası Çağırma</title>
</head>
<body>

    <button type="button" id="Btn">Tıkla</button>

    <script src="/js/main.js"></script>

</body>
</html>
```

#### HTML Etiketine JavaScript Kodu Ekleme

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>HTML Etiketine JavaScript Kodu Ekleme</title>
</head>
<body>

    <button onclick="alert('Merhaba Dünya!')">Tıkla</button>

</body>
</html>
```

#### JavaScript'te Büyük / Küçük Harf Duyarlılığı

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript'te Büyük / Küçük Harf Duyarlılığı</title>
</head>
<body>

    <script>
        let merhabaDunya = "Merhaba Dünya!";

        console.log(merhabaDunya);
        console.log(MerhabaDunya);
        console.log(merhabadunya);
    </script>

    <p>Not: Klavyedeki F12 tuşuna basarak tarayıcı konsoluna (console) bakın, şöyle bir satır göreceksiniz: "Uncaught ReferenceError: merhabaDunya is not defined".</p>

</body>
</html>
```

#### JavaScript Tekli Yorum Satırı

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Tekli Yorum Satırı</title>
</head>
<body>

    <script>
        // Bu benim ilk JavaScript örneğim
        document.write("Merhaba Dünya!");
    </script>

</body>
</html>
```

#### JavaScript Çoklu Yorum Satırı

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Çoklu Yorum Satırı</title>
</head>
<body>

    <script>
        /* Bu benim ilk 
        JavaScript örneğim */
        document.write("Merhaba Dünya!");
    </script>

</body>
</html>
```

#### JavaScript'te Değişken Oluşturma

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript'te Değişken Oluşturma</title>
</head>
<body>

    <script>
        // Değişkenler Oluşturma
        let isim = "Mecnun";
        let yas = 21;
        let evliMi = false;
        
        // Değişken Değerlerini Yazdırma
        document.write(isim + "<br>");
        document.write(yas + "<br>");
        document.write(evliMi);
    </script>

</body>
</html>
```

#### JavaScript'te Değişken Bildirme

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript'te Değişken Bildirme</title>
</head>
<body>

    <script>
        // Değişken Bildirimi
        let kullaniciAdi;
        
        // Değer Atama
        kullaniciAdi = "Leyla Mecnun";
        
        // Değişken Değerini Yazdırma
        document.write(kullaniciAdi);
    </script>

</body>
</html>
```

#### Aynı Anda Birden Çok Değişkeni Bildirme

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Aynı Anda Birden Çok Değişkeni Bildirme</title>
</head>
<body>

    <script>
        // Birden Çok Değişken Bildirme
        var isim = "Mecnun", yas = 21, evliMi = false;
        
        // Değişken Değerlerini Yazdırma
        document.write(isim + "<br>");
        document.write(yas + "<br>");
        document.write(evliMi);
    </script>

</body>
</html>
```

#### Tarayıcı Konsoluna Yazma

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Tarayıcı Konsoluna Yazma</title>
</head>
<body>

    <script>
        // Basit bir metin mesajı yazdırma
        console.log("Merhaba Dünya!");
        
        // Değişken değer yazdırma
        let x = 10;
        let y = 20;
        let topla = x + y;
        console.log(topla); // Çıktı: 30
    </script>
    
    <p>Not: Klavyedeki F12 tuşuna basarak tarayıcı konsoluna (console) bakın.</p>

</body>
</html>
```

#### Bir Uyarıyı İletişim Kutusuna Yazma

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Bir Uyarıyı İletişim Kutusuna Yazma</title>
</head>
<body>

    <script>
        // Basit bir kısa mesaj görüntüleme
        alert("Merhaba Dünya!");
        
        // Değişken değer görüntüleme
        let x = 10;
        let y = 20;
        let topla = x + y;
        alert(topla); // Çıktı: 30
    </script>

</body>
</html>
```

#### Tarayıcı Penceresine Yazma

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Tarayıcı Penceresine Yazma</title>
</head>
<body>

    <script>
        // Basit bir kısa mesaj yazdırma
        document.write("Merhaba Dünya!");
        
        // Değişken değer yazdırma
        let x = 10;
        let y = 20;
        let topla = x + y;
        document.write(topla); // Çıktı: 30
    </script>

</body>
</html>
```

#### document.write() Yöntemle İlgili Sorun

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>document.write() Yöntemle İlgili Sorun</title>
</head>
<body>
    
    <h1>Bu bir başlık</h1>
    <p>Bu bir paragraf metindir.</p>
    
    <button type="button" onclick="document.write('Merhaba Dünya!')">Tıkla</button>

</body>
</html>
```

#### HTML Öğesine Yazdırma

```
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>HTML Öğesine Yazdırma</title>
</head>
<body>

    <p id="harika"></p>
    <p id="sonuc"></p>
    
    <script>
        // Bir öğenin içine metin dizesi yazma
        document.getElementById("harika").innerHTML = "Merhaba Dünya!";
        
        // Bir öğenin içine değişken bir değer yazma
        let x = 10;
        let y = 20;
        let sum = x + y;
        document.getElementById("sonuc").innerHTML = sum;
    </script>

</body>
</html>
```
