---
title: "AMP HTML Merhaba Dünya!"
description: ""
date: 2016-12-19 15:45:00
categories: [genel]
tags: [amp html]
postimg: ""
---

AMP HTML tamamen mevcut web teknolojileri üzerine kurulmuştur. HTML, CSS ve JavaScript'in bazı bölümlerini kısıtlayarak güvenilir performans elde etmektedir. Bu sınırlamaları telafi etmek için AMP HTML, zengin içerik için temel HTML'nin ötesinde bir dizi özel öğe tanımlar. Bu örnekler, geçerli bir AMP HTML dosyası oluşturmak için neyin gerekli olduğunu gösterir.


Bu herkese bunun bir AMP dosyası olduğunu söyler. `<html amp>` olarak çalışır.


### Head Kısmı

Head bölümünün başlangıcı

```
<!doctype html>
<head>
```

Karakter seti tanımı, etiketinin ilk kısmı olmalıdır.

```
<meta charset="utf-8">
```

AMP HTML çalışma zamanı etiketinin ikinci kısmı olarak yüklenmelidir.

```
<script async src="https://cdn.ampproject.org/v0.js"></script>
```

AMP HTML dosyaları normal HTML'ye işaret eden kanonik bir bağlantı gerektirir. 

```
<link rel="canonical" href="http://ahmetcadirci.com.tr/">
```

```
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
```

CSS kodlarının gömülü olması gerekir.

```
<style amp-custom>
    h1 {
      color: red;
    }
  </style>
```

AMP HTML demirbaşı.

```
<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
```

Head bölümünün bitişi

```
</head>
```

### Body Kısmı

Body bölümünün başlangıcı

```
<body>
```

Çoğu HTML etiketi doğrudan AMP HTML'de kullanılabilir.

```
<h1>Merhaba Dünya!</h1>
```

`<img>` etiketi gibi belirli etiketler, eşdeğer veya biraz geliştirilmiş özel AMP HTML etiketleri ile değiştirilmiştir.

```
<amp-img src="/img/amp.jpg"
      width="1080"
      height="610"
      layout="responsive"></amp-img>
```

AMP HTML dosyanızın geçerli AMP HTML olup olmadığını kontrol etmek için [AMP Validator](https://validator.ampproject.org/){:target="_blank"}'ı kullanabilirsiniz. AMP HTML URL'sinin sonunu `#development=1` eklemeniz yeterlidir. Doğrulama hataları Javascript konsolunda yazdırılacaktır. AMP ile oluşturulan bu web sitesini kullanarak deneyebilirsiniz.

Body kısmının bitişi

```
</body>
</html>
```

## AMP HTML - Merhaba Dünya! ÖNİZLEME

<p data-height="254" data-theme-id="dark" data-slug-hash="ZBjYqP" data-default-tab="html,result" data-user="ahmetcadirci25" data-embed-version="2" data-pen-title="AMP HTML - Merhaba Dünya!" class="codepen">See the Pen <a href="http://codepen.io/ahmetcadirci25/pen/ZBjYqP/">AMP HTML - Merhaba Dünya!</a> by Ahmet Cadirci (<a href="http://codepen.io/ahmetcadirci25">@ahmetcadirci25</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>