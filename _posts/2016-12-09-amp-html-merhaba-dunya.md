---
title: "AMP HTML Merhaba Dünya!"
description: "AMP HTML tamamen mevcut web teknolojileri üzerine kurulmuştur. HTML, CSS ve JavaScript'in bazı bölümlerini kısıtlayarak güvenilir performans elde etmektedir."
date: 2016-12-19 15:45:00
categories: [genel]
tags: [amp html]
postimg: "amp-html-merhaba-dunya.png"
---

AMP HTML tamamen mevcut web teknolojileri üzerine kurulmuştur. HTML, CSS ve JavaScript'in bazı bölümlerini kısıtlayarak güvenilir performans elde etmektedir. Bu sınırlamaları telafi etmek için AMP HTML, zengin içerik için temel HTML'nin ötesinde bir dizi özel öğe tanımlar. Bu örnekler, geçerli bir AMP HTML dosyası oluşturmak için neyin gerekli olduğunu gösterir.


Bu herkese bunun bir AMP dosyası olduğunu söyler. `<html amp>` olarak çalışır.


### Head Kısmı

Head bölümünün başlangıcı

```
<!doctype html>
<html ⚡>
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

Tarayıcı Uzantısı

AMP Validator'a doğrudan bir tarayıcı uzantısı kullanarak tarayıcınızın araç çubuğundan erişilebilir. Göz attığınızda, otomatik olarak ziyaret edilen her AMP sayfasını doğrular ve sayfanın renkli bir simge olarak geçerliliğini görsel bir şekilde gösterir.

![Kırmızı İkon](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAETklEQVR4AX2UA2BrWRCGb91nlbHtWovy+b00a9u2bdu2bdu7tZ1snNS+mD1z06TrP22uZr7z3zMzof6sqZMOTcFje1vTysiRjUeGGkrfDm8pmwqVqJnwnhaODng9Yxef8X5ka8WZo59+vBFjJ/fbkjJx1UVJ1N8VdW3mYZFTj6oJ1hW1+h0y8OnzOK8hD7ziFTB2xbnAAECwtoi/F9zb7h497sADMWes0oS5ywq66mKwI1yn+Mp04NZmIYwJmoVMyJgPIQJnPSPA/j7ChQoVrE+Xw3h0OZy3UAnRfeuvx9xRikqOOat18LDQSYcd6ilWw4gmiwshyCSAoFUMAelqmLjkDEDNf/QOBNQbgTwn/yLWrc2h3TYZjB6w9RJk+DVZMWjorhvl7gpjZECdhcFsEGEkKWjMg5BdCnRHC6BmHr4L/KIVELRJAGPCZiE3pMlmR0q07PQZx5ZTcXmc1ff06PMgYBTQvLOEuzUwccGpENfERadBQLkegmQLcEGMw7fp1WSBd1vlmxTq5UsuXNdTZvAOarP5FZfd5UPQIga6rQl40TREagvBn5fKb0OQ7DPGhU0Czq3LhW6HYjxyxXkGauDko1ztFglg5f7iTkbcnXMCxMXNz8P0fbfC1M1X8sdoYy0ENARqEUHAkMd0WqXgOdx1DtWx//YLOq0y/mbC3RJ4seVX4MWyS1QudpibhaizGguEQGIkn+42CKC5UHMN9Utd2eWdZjEWAIGJyo6feiTwWlxEUOIcNfvsoxiDsUvFEdBd2hz43iK9hfrFWX9RO7GLDuN7F7KRyna2/ru72VmI7KhKuEMg6VW60ySEb0uN11BfHbqfs8kkYn24h6QoAV02kDGDmQfviP0/cDsw7iGIa+6VZyEgXxt3h/9ohm0ldfjtoF1nUltrqjf+XKj2DBLLsSoTl/pc8ItXgl+QAQHFOqC72mPuFuYhuntvCKiW3WEOVvlXq3z0k7NPVVGob2pKbm/Tkfkkm5soDGnoAGnsyOZSBMXcvfkycbcuDosDmQ7Scr/Wlb1IxfXUkQcrfi7S+rFBI/FJwXZQrIex4w8CXiwD0X3qiLsNcSDGcoNkVH8r1NBNpxxdRKHec6hT8PiBs/6g3+wK6CcBuGqYjBe+9tRNV8bcvfMqTslSm8ScDWmzmd8sUvjeWXc6Ml4zSXkW9UmlLYU/btvr+F8dysUuTTZ4TQImJF1Nz7/5MpaZG9u3gQupNrJhq5jBX6IeMvdNDgV8uaXqQsxdUG1ExrJetkhT8fjCzoaa7yvMPzeT3uwi8z3W1gxjH74Dw5LVMIgjps3hWkhFf6ow9XzUuLURcwZ3VCDsn3qhsoh/YD3k8DWvVpfu/3l18UNtP3z/VdOhrpGfzWLvr7XF/V9VWp57d8ueh591wvEbMPajcivJ+R8tOGuSn8hdnYznaWc9gcfVBpEop8xhzzU27rthxeu/8YAzVq9N8m6pxud/0R+zSSUBEg4VdAAAAABJRU5ErkJggg== "Kırmızı İkon")

Bir AMP sayfasında hata olduğunda, uzantının simgesi kırmızı renkte gösterilir ve karşılaşılan hataların sayısını görüntüler.

![Yeşil İkon](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAEJElEQVR4AW2UA4DrXBCFb7rsJmsW27VtG8+2bdu2i7X1bNu2bdvuNpn/3urp/+p2cnLOzKRIR8uD3ano7dkGCDP2yDSf8HVps/xWxV7zWhmlNCixB8XV4s97nhw851jjmzPs6PgIhPFdHWqQuaUhhX5n5NFJFBqFKAAwSN3caJyoJuATUyYBkxIBxyuyB/sqb/j04zPMOLuQQ3k0iGsCf8ZurCPf/Xg/H2E67+/HQ3oYLPQDDKPWZa62KHUB4yJHll8mUllWurKo0AImnJkFhOZ7uuDPlip+iYhlip3Bf1XcoZLrNTYI0/3gIOxwHFKrxq+vW8AUOYNJsUBJVzhzdDl+XyoAp6W+8PjLU2A5FvxWx4FBiQOYV0o401LhT36BEAJXJW5Fv9Noe4e6NkUe2JGTCguBWbkYLCpcgLgaeXIKEG5/vAfWlR6AHQM5EakzLRYqLQtdIH1zk95Ih1917B7jXEegK51VREjtqkwI9tXecPPDHSBsergdDEsdyImIIHkl9awRPs6tIvQaC5wJar6sU4BtnscX02IBmOF4v7sacnw86FhwKUf9nVWlm/p3GteRWhwXrHJcuTbbezZBDVe3HWqZ4wqmZUJW5wq/B9sqT7jx4TboeIT7dvzlabj76T5MPDMbULENmFdIgF8uUlnkukB4depsFF6SPNMSfzDFX/5yZQ79jowEQi2nAgIHv8jY2hSL2QJTIcFpxLWmOQKwXuQqRSEFCbMscjVn0Luq9oLr728BgUyRUMvWAmHNvU2AiqyJEIlJxFT8HCHYLXBfgtJLG46wlLuoY5oTV0VW0GJPV3j74x08/PwIXnx7BdxvvlK2NNZHVPeMxMxxgbCC5DkoeVqdEKslLngAQiD7RSZlXeUODjU+eKICaLevF+jYiCdKldjpXekGYCmVsE2r2zdEEA6GHvLQvSY5TvrVIFFJZJTPh/GnZ+rjZm5rrnelX408R3DJCbq6Y8suPiJES9ObYHdggpcWF6iFSGQKN7ny1nLtnu0AcsEz2qVWL22JoNZCKoHEwjrape2ouZwCFbHFtFRECpR0pYTEVR9w7s1FINTZ3pI0nrgijjjsXsmXCcE/N2YzIKCQN6JQ15k9KFQPUWMzhpn5yaLXMVIxmBQIWMMyR5VoRaCKA47b/+wwhz9zTKVERVbBuNCJpWUi8JKH7+81v58twjQsbkUhQvLQTB7qiagx2cPMQhbGT3OS+XyhFltD2trGHKfkoP7WtoByGDDNF3K0QgQOUs+fwfKEnCEjhzAIkyZrQKHfSVLUoWI21FFHbjGxbaDNdJeZQ9aM3rXh1ObbtlL397jJrzwUoWe9FoTNbzSvZRTCWBxw4aXWNKLQ/9HzymgqcmMST//vi+qY0W60k08jf5f0dlnimW2nWiAtcYWZvPp72v4h9B91Yo8L/hGHlgAAAABJRU5ErkJggg== "Yeşil İkon")

AMP sayfasında herhangi bir hata olmadığında, simge yeşil renkte gösterilir ve varsa uyarı sayısını görüntüler.

![Mavi İkon](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAEa0lEQVR4AX2UA3QkSxSGb/Bs27btmbVt27ZiJ+uN1rZt27Y39jQG3V3/u1XP/M/52nVdTVIJS8uC6ektQcCh4J7T9cZNU43tjcYZvh+jdWw+ZZVN3+E/UiNZC9t41HyEoYglVjBD/wYNnlsSzFDGJs+TLdL0dZUSDPwUo4uvwnS0SDOh+4DOU7zi2wgNDccZ1wfP87gYajLODGHo76jDoh35jzVLNY6zIfwUrVvl43T7ixEaVh2x4LeByomG80OUZv0QpaP2KMM3ZK5WnqFOk41ghv6MOrTO0KewIbiidX+5WB3fRepoNN6EZQNnshzpBPK5O0a3v4/UUG+McXX+9sJHGQpbiiCGfoMSlhR9VTXR4/0hsgzuWF1wdJDRzd4dgNTC/QF8OkxTTlwqA4/lji5Dt6n6IIYqhl0KZeg3qMnYkhhXZCF+iuIPYw18zwsbjDFQ4BGQmr4jgJopqp6QzlwyyvBC1Ewq3sUQ1S8JZuh36iTmrv52WDZHZzpywefDNUzb7oeUIwDTLzh1gRM3HJW2K9YU34UVoEpMVt7kVRdfZmjCZgQzJKGGSdeOfjM0C+XjTSHrU3e0gcJfoxNCGVVKXu1XpajA3307ohDVoq6YKYsuf8TQ2G0IZkhC1cJOrfp6yA026HW+5AXjNwQgpXkB24HS1QIHFeN1/CibE2c6340oQIXhZ7PT5u54iaF5xxHEkIRqDj8Y9/3QK3L2LNnNehxh/TEmuk7zSqNKo9f5VSlUp+NM+7thWagy/MQeIgq6t+rSEIZ+gzrHrPjaPeSsLr3yx+LHaI27qqPjZBNSWcUC1ZIM2QzOwoA7WrN/HHoJreP3DWZo5qasO2zLCmFIog71Io9mfjvoIn6M8gS4RvgqTEPKah+k0jf78clQDZ9zOT4bpjkf9L6K7/sdORQ/Yfp9DDWN3BLEEIAgCbFCazXp+HjV4cf2fDv4Mn6KLLI+HW7Ya4/bdsCGw1FxhDpSN/kxb5cm5m3Px4XrhQsAY4gQCAcwiM8Vz2TZoQzRq5/WDCGi2z5xt3im+rADi34acg6fD7iGU9c8SF9fisZjS9RM7r1oYxrPZNpmC2dzBFYesVRt+Zk4l+2ANb/EEPcQH+jZN78JpXveu+PLdx++19VhSt3G0QcWLdt0bG/j2JPXL+eYInVTAA3GGjwBfqRu9ONijuOsO25ZaZv8Vuxyn1U92bD2X3LUdBEfFK9+0SjkybfK3ymjdX//1d18vuPUsYOtLuYKNJlgijJTqLm8nOfg5E1H7fEbhQ6kNpy0RTeeClaeMvYbb3/8Q9C7VYbe1rxnyj0MAVqjg1dsdJniVStl6mM5TTnk8Sv8mLNHzaxy0jrTFELAT3z4BwCCGT47b/osBJqnmpi0NSCkwUJNbkXA4xXKwbUCgQ6TvFbmZmV8p1z8XyijTPy1Age9Z3mdhuNMVOWObzplIXKpD1X4WpZjAtfVG4AGwCUX/C/7z6j5GsDc4MgEj5La35YD9fO1BWRoB2wHboZ+BjdgUgdSbgEhAAAAAElFTkSuQmCC "Mavi İkon")

Sayfa AMP olmadığı halde sayfa bir AMP sürümü bulunduğunu gösterdiğinde, simge bağlantı simgesiyle birlikte mavi bir renkte gösterilir ve uzantıyı tıklamak tarayıcıyı AMP sürümüne yeniden yönlendirecektir.

Body kısmının bitişi

```
</body>
</html>
```

## AMP HTML - Merhaba Dünya! ÖNİZLEME

<p data-height="254" data-theme-id="dark" data-slug-hash="ZBjYqP" data-default-tab="html,result" data-user="ahmetcadirci25" data-embed-version="2" data-pen-title="AMP HTML - Merhaba Dünya!" class="codepen">See the Pen <a href="http://codepen.io/ahmetcadirci25/pen/ZBjYqP/">AMP HTML - Merhaba Dünya!</a> by Ahmet Cadirci (<a href="http://codepen.io/ahmetcadirci25">@ahmetcadirci25</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>