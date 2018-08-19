---
title      : "Google Chrome'da 'Ana Ekrana Ekle' Popup Kodu"
description: "Android cihazda Chrome kullanarak ziyaret ettiğiniz web sitelerinde önünüze çıkan 'Ana Ekrana Ekle' popup kodunu sizlerle paylaşıyorum."
date       : 2017-05-06 20:00:00
categories : [Web Tasarım, HTML5, JS]
tags       : [Chrome, Google]
image      : "/images/google-chrome-da-ana-ekrana-ekle-popup-kodu.png"
comments   : true
---

Android cihazda Chrome kullanarak ziyaret ettiğiniz web sitelerinde önünüze çıkan "Ana Ekrana Ekle" popup kodunu sizlerle paylaşıyorum. Bunun çalışması için sitenizin https olması gerekir.

<p style="background: #51ab6d;padding: 2rem; border-radius: .5rem;"><a href="https://ahmetcadirci.com.tr/2018/android-cihazlarda-ana-ekrana-ekle-popup-kodu/" style="color: white;">BURADA YAPACAĞIN İŞLEMLER ÇALIŞMAYACAKTIR! <br> YENİ YAZIYA GÖZ ATMAK İÇİ TIKLAYIN.</a></p>

**[Linke](https://github.com/ahmetcadirci25/ana-ekrana-ekle/releases/tag/v1){:target="_blank"}{:rel="noopener"} tıklayın ve sizin için hazırlamış olduğum dosyaları indirin.**

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
  "start_url": "https://ahmetcadirci.com.tr/?utm_source=webapp",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "orientation": "portrait"
}
```

### 3. Adım manifest.json ve serviceWorker.js Dosyasını Çağırma

Web sayfanızda yer alan `<head>` etiketleri arasına aşağıdaki kodu yapıştırın. 

```
<link rel="manifest" href="manifest.json">
<script>
    window.addEventListener('load', function() {
      var outputElement = document.getElementById('output');
      navigator.serviceWorker.register('sw.js', { scope: '/' })
        .then(function(r) {
          console.log('registered service worker');
        })
        .catch(function(whut) {
          console.error('uh oh... ');
          console.error(whut);
        });
      window.addEventListener('beforeinstallprompt', function(e) {
        outputElement.textContent = 'beforeinstallprompt Event fired';
      });
    });
</script>
```

**[Index](https://github.com/ahmetcadirci25/ana-ekrana-ekle/blob/gh-pages/index.html){:target="_blank"}{:rel="noopener"} dosyasının son hali bu şekilde olmalıdır.**

### 4. Adım Test

Şu anda Chrome, yalnızca bir kullanıcı sitenizi en az iki kez ziyaret ederse ve en az 5 dakika ayrılmışsa, afişi otomatik olarak gösterecek şekilde ayarlanmıştır. Birisi, Popupu yok sayarsa, Chrome'daki tarama verilerini silmedikçe tekrar gösterilmez. 

Web siteyi ziyaret ettiğinizde çıkan popup

![Google Chrome'da Ana Ekrana Ekle Popup Kodu](https://ahmetcadirci.com.tr/images/galeri/google-chrome-da-ana-ekrana-ekle-popup-kodu-4.png "Google Chrome'da Ana Ekrana Ekle Popup Kodu")

Ana ekrana eklendikten sonra açılış ekranı

![Google Chrome'da Ana Ekrana Ekle Popup Kodu](https://ahmetcadirci.com.tr/images/galeri/google-chrome-da-ana-ekrana-ekle-popup-kodu-5.png "Google Chrome'da Ana Ekrana Ekle Popup Kodu")

**Popupu test etmek için kullanışlı araçlar:**

1. Adım Android cihazından Google Chrome'mu açın ve web sitenizi ziyaret edin. Eğer yukarıdaki gibi ekran görüntüsü ile karşılaşıyorsanız doğru bir işlem gerçekleştirmişsinizdir.
2. Popup çalışmıyorsa URL'nizi manifest.json doğrulayıcıda test edin: [https://manifest-validator.appspot.com/](https://manifest-validator.appspot.com/){:target="_blank"}{:rel="noopener"}
3. Popup çalışmıyorsa Chrome'daki kullanıcı Geliştirici araçlarını inceleyin ve Uygulamalar sekmesine bakın. Hizmetler ve Manifest'i kontrol edin, aşağıdaki gibi görünmelidir.

![Google Chrome'da Ana Ekrana Ekle Popup Kodu](https://ahmetcadirci.com.tr/images/galeri/google-chrome-da-ana-ekrana-ekle-popup-kodu-1.png "Google Chrome'da Ana Ekrana Ekle Popup Kodu")

![Google Chrome'da Ana Ekrana Ekle Popup Kodu](https://ahmetcadirci.com.tr/images/galeri/google-chrome-da-ana-ekrana-ekle-popup-kodu-2.png "Google Chrome'da Ana Ekrana Ekle Popup Kodu")

![Google Chrome'da Ana Ekrana Ekle Popup Kodu](https://ahmetcadirci.com.tr/images/galeri/google-chrome-da-ana-ekrana-ekle-popup-kodu-3.png "Google Chrome'da Ana Ekrana Ekle Popup Kodu")

### 5. Dosyalar

1. Repo [https://github.com/ahmetcadirci25/ana-ekrana-ekle](https://github.com/ahmetcadirci25/ana-ekrana-ekle){:target="_blank"}{:rel="noopener"}
2. Zip [https://github.com/ahmetcadirci25/ana-ekrana-ekle/releases](https://github.com/ahmetcadirci25/ana-ekrana-ekle/releases){:target="_blank"}{:rel="noopener"}
2. Önizleme [http://ahmetcadirci.com.tr/ana-ekrana-ekle/](http://ahmetcadirci.com.tr/ana-ekrana-ekle/){:target="_blank"}{:rel="noopener"}

#### Kaynakça:

1. Increasing Engagement with Web App Install Banners. 06 ‎Mayıs ‎2017. https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android
2. samples/service-worker.js at gh-pages · GoogleChrome/samples. 06 ‎Mayıs ‎2017. https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js
3. samples/index.html at gh-pages · GoogleChrome/samples. 06 Mayıs ‎2017. https://github.com/GoogleChrome/samples/blob/gh-pages/app-install-banner/basic-banner/index.html
4. Installable Web Apps with the Web App Manifest in Chrome for Android. 06 Mayıs ‎2017. https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android