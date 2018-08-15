---
title      : "Android Cihazlarda 'Ana Ekrana Ekle' Popup Kodu"
description: "Ana ekrana ekle (veya kısaca A2HS), akıllı telefon tarayıcılarında bulunan geliştiricilerin, favori web uygulamalarını (ya da siteyi) temsil eden ana ekranlarına bir kısayolu daha kolay ve rahat bir şekilde eklemelerine olanak tanıyan bir özelliktir."
date       : 2018-08-12 14:00:00
categories : [Web Tasarım, HTML5, JS]
tags       : [Chrome, Google, Mozilla, Firefox]
postimg    : "https://lh3.googleusercontent.com/yB1xGrDOacpE5ZmVdqB4qiYzemIX9ZMKCKseXOVI96jbR6HheknjYEiJHez-gXlWZW9y4NWiAXy4JKK1mDkMrSonhON50YQ08tt_ZKut05jkAyVBZLmGdbvdP3ebWDeZby-cjNJkuD5omabaaODQzi2-EjhYd8_CLdYoZbW6AXuqWxcf0922O4MGdDjb44QWNFh14h0JT3_5dhajhrN6PYW_-YI36dgNH3j-zpqoIkb00akdeP295Hbj6m0uOcuilg1sN-1JkS9aj0M6ON8m3e-xfxFs2Twp4nHumcFrD2Kme2iVwc2rmlKF7Q1TR5CR9CIYKtxVAKvWz-uJUPKh1sQJVe0DQLDodNX55hH-_ACmon-VRiiQnAVkUwRa5WutBEl9b93XUgKtMTPjNBHY2GwTi-X5z4k7bWaM8PpXr2v1tHSZ2DHvzI5usbk2L94I2ckF6HJ-ul66HlXRPWfCkEzj_xjUNjV-tlO6ZLbYOSFpXwxGPWKc4HSHos8yw8wT7eCufx6lJiK457gQO4jRPy-KBdutPHyioqn8zyGpllk4h3fRCCJpdXg_bGtNFk8w8QCFru6hrG1e9nWmx_nBnNnqsvstbR1susruOWYd4db9ApZsFzpEH80WeM5zOOBg-DmrjlPpSbiWNmAl0-vdGpip4o7cwJ71"
comments   : true
---

Ana ekrana ekle (veya kısaca A2HS), akıllı telefon tarayıcılarında bulunan geliştiricilerin, favori web uygulamalarını (ya da siteyi) temsil eden ana ekranlarına bir kısayolu daha kolay ve rahat bir şekilde eklemelerine olanak tanıyan bir özelliktir. Bu kılavuz, A2HS'nin nasıl kullanıldığını ve kullanıcılarınızın bundan faydalanmasını sağlamak için bir geliştirici olarak yapmanız gerekenleri açıklamaktadır.

**Bu kodun çalışabilmesi için sitenizin HTTPS'li olması gerekir.**

*[Linke](https://github.com/ahmetcadirci25/ana-ekrana-ekle/releases/tag/v2){:target="_blank"}{:rel="noopener"} tıklayın ve sizin için hazırlamış olduğum dosyaları indirin.*

## İçindekiler

- [Logo Düzenleme](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#1-adım-logo-düzenleme)
- [manifest.json Dosyasını Düzenleme](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#2-adım-manifestjson-dosyasını-düzenleme)
- [manifest.json ve sw.js Dosyasını Çağırma](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#3-adım-manifestjson-ve-swjs-dosyasını-çağırma)
- [server.js Adlı Dosya Oluşturun](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#4-adım-serverjs-adlı-dosya-oluşturun)
- [sw.js Adlı Dosya Oluşturun](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#5-adım-swjs-adlı-dosya-oluşturun)
- [Test ve Önizleme Videosu](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#6-adım-test)
- [Dosyalar](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#7-dosyalar)
- [Fikir](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#fikir)
- [Kaynakça](https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/#kaynakça)

### 1. Adım Logo Düzenleme

İndirmiş olduğunuz klasör içinde yer alan ve aşağıda listelemiş olduğum logoları kendi logonuzla değiştirin. 

1. launcher-icon-0-75x.png
2. launcher-icon-1x.png
3. launcher-icon-1-5x.png
4. launcher-icon-2x.png
5. launcher-icon-3x.png
6. launcher-icon-4x.png


### 2. Adım manifest.json Dosyasını Düzenleme

`name`, `short_name`, `start_url`, `theme_color` ve `background_color` içeriklerini düzenleyin. 

```
{
  "name": "Örnek Popup Uygulaması",
  "short_name": "Örnek Popup",
  "icons": [
    {
      "src": "launcher-icon-0-75x.png",
      "sizes": "36x36",
      "type": "image/png"
    },
    {
      "src": "launcher-icon-1x.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "launcher-icon-1-5x.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "launcher-icon-2x.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "launcher-icon-3x.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "launcher-icon-4x.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "start_url": "/?utm_source=webapp",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "orientation": "portrait"
}
```

### 3. Adım manifest.json ve sw.js Dosyasını Çağırma

Web sayfanızda yer alan `<head>` etiketleri arasına aşağıdaki kodu yapıştırın.  `<body>` etiketleri arasına `<script>` kodlarını kopyalayın.

```
<!DOCTYPE html>
<html>
<head>

  <!-- Web App Manifest -->
  <link rel="manifest" href="/manifest.json">

</head>
<body>

<script>
  if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js?v3', {
            scope: '.' // THIS IS REQUIRED FOR RUNNING A PROGRESSIVE WEB APP FROM A NON_ROOT PATH
        }).then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }
</script>
</body>
</html>
```

### 4. Adım **server.js** Adlı Dosya Oluşturun

**server.js** adında bir dosya oluşturun ve aşağıdaki kodları kopyalayın. Eğer `manifest.json` ve `sw.js` dosyalarını farklı dizinlerde oluştursanız, aşağıdaki kodlarda düzenleme yapmanız gerekir. 

```
APP.get('/manifest.json', function(req, res) {
    res.append('Content-Type', 'text/javascript');
    res.sendFile(path.join(root, "manifest.json"));
});

APP.get('/sw.js', function(req, res) {
    res.append('Content-Type', 'text/javascript');
    res.sendFile(path.join(root, "sw.js"));
});
```

### 5. Adım **sw.js** Adlı Dosya Oluşturun

**sw.js** adında bir dosya oluşturun ve aşağıdaki kodları kopyalayın. 

```
console.log("sw loaded")
self.addEventListener('fetch', function(event) {
  // Perform some task
});
```

### 6. Adım Test

Yukarıdaki adımları tamamladıkta sonra dosyaları sunucunuza yükleyin. Daha sonra mobil cihazınında Chrome uygulamasını açın, web sitenizi ziyaret ederek test işlemini yapabilirsiniz. Eğer hatalı bir işlem yaptığınızda tarayıcınızda **geçmişi temizleyerek** tekrar test edin. 

**Önizleme Videosu**

<iframe allowFullScreen frameborder="0" height="564" mozallowfullscreen src="https://player.vimeo.com/video/284581390" webkitAllowFullScreen width="100%"></iframe>

### 7. Dosyalar

2. Zip [https://github.com/ahmetcadirci25/ana-ekrana-ekle/releases/tag/v2](https://github.com/ahmetcadirci25/ana-ekrana-ekle/releases/tag/v2){:target="_blank"}{:rel="noopener"}
1. Repo [https://github.com/ahmetcadirci25/ana-ekrana-ekle](https://github.com/ahmetcadirci25/ana-ekrana-ekle){:target="_blank"}{:rel="noopener"}
2. Önizleme [http://ahmetcadirci.com.tr/](http://ahmetcadirci.com.tr/){:target="_blank"}{:rel="noopener"}

#### Fikir
- iOS şu anda A2HS ve servis çalışanını desteklememektedir, css kullanarak öğretici animasyonları sağlayabilir
- sw.js en az bir getirme işlevi gerektirir
- A2HS, sürüm 31'den bu yana Android cihazlarda Chrome versiyonu >= 39 , Firefox versiyonu >=32 desteklenmektedir.
- App Banners'ı aktif etmek için Chrome url satırına `chrome://flags/#enable-app-banners` linkini kopyalayın. Daha sonra `Enable` yapın ve Chrome yeniden başlatın.

#### Kaynakça
1. Add to Home screen https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Add_to_home_screen
2. Changes to Add to Home Screen Behavior https://developers.google.com/web/updates/2018/06/a2hs-updates
3. Add to Homescreen https://developer.chrome.com/multidevice/android/installtohomescreen
4. Add to home screen banner on Android https://gist.github.com/Luvgreed/f4b17e9f5ecfe23df952b86e2161ddf1
5. Add to Home Screen https://developers.google.com/web/fundamentals/app-install-banners/