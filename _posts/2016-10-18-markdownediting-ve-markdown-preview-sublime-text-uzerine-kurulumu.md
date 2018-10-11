---
title      : "MarkdownEditing ve Markdown Preview Eklentilerinin Sublime Text Üzerine Kurulumu"
description: "Zengin metinler üretmek için MarkdownEditing ve Markdown Preview Eklentilerinin Sublime Text Üzerine Kurulumu..."
date       : 2016-10-18 16:41:00
categories : [Web Tasarım]
tags       : [Sublime Text 3, Markdown, MarkdownEditing, Markdown Preview]
image      : "/images/markdownediting-kurulum.png"
comments   : true
---

## Birinci Adım Paket Kontrol (Package Control) Kurulumu

Sublime Text içerisine bir eklenti kurabilmemiz için öncelikler Paket Kontrol'un kurulu olduğundan emin olmamız gerekmektedir.

Bunun için Sublime Text editörünün menü kısında yer alan `View > Show Console` menüsüne tıklıyoruz.

Alt kısmında açılan yere [packagecontrol.io](https://packagecontrol.io/installation){:target="_blank"}{:rel="noopener"} sayfasında yer alan kodları kopyalıyoruz.

**Sublime Text 3 veya Sublime Text 2 editör kullandığınıza dikkat edin!**

Kopyaladığımız kodu açılan kısma yapıştırıp `Enter` tuşuna basıyoruz.

Paket Kontrol kurulumu tamamlandı. Şimdi eklentiyi kurabiliriz.

### 1. MarkdownEditing Kurulumu

{% include picture.html i_image="/images/markdownediting-kurulum.png" imagealt="MarkdownEditing Kurulum Ekranı" %}

**Windows** ve **Lunix** için `CTRL+SHIFT+P` tuşuna, 
**MAC** için `CMD+SHIFT+P` tuşana basın daha sonra açılan pencereye **MarkdownEditing** yazın ve üzerine tıklayın.

Sublime Text'i tekrar kapatın ve açın.

### 2. Markdown Preview Kurulumu

{% include picture.html i_image="/images/galeri/markdown-preview-kurulum.png" imagealt="Markdown Preview Kurulum Ekranı" %}

**Windows** ve **Lunix** için `CTRL+SHIFT+P` tuşuna, 
**MAC** için `CMD+SHIFT+P` tuşana basın daha sonra açılan pencereye **Markdown Preview** yazın ve üzerine tıklayın.

Sublime Text'i tekrar kapatın ve açın.

Markdown metin düzenledikten sonra önizleme yapmak için `CTRL+SHIFT+P` tuşana basın ve `Markdown Preview` yazın ve `Enter` tuşana basın. Bu sayede önizlemeyi görebilirsiniz. 

{% include picture.html i_image="/images/galeri/markdown-preview-onizleme-ekrani.png" imagealt="Markdown Preview Önizleme Ekranı" %}
