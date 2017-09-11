---
title      : "GitKraken GitFlow Kullanımı ve Özellikleri"
description: "GitKraken, GitFlow reponuzu organize etmek için kullanılan kuralların bir listesidir ve hata düzeltmeleri, özellik oluşturma işlemlerini kolaylaştırmak için kullanılır."
date       : 2017-09-10 10:32:00
categories : [genel]
tags       : [gitkraken, gitflow]
postimg    : "gitkraken-gitflow-kullanimi-ve-ozellikleri.webp"
comments   : true
---

> GitFlow, reponuzu organize etmek için kullanılan kuralların bir listesidir ve hata düzeltmeleri, özellik oluşturma işlemlerini kolaylaştırmak için kullanılır.

## Yapılandırma

GitFlow'un özelliklerini kullanmak için `Preferences > GitFlow` menü gitmeniz gerekir. Daha sonra `Update Git Flow Congif` düğmesine tıklayarak aktif edebilirsiniz.

## Kullanım

Repo'nuzda başlatılan GitFlow'unuz varsa, sol panelden diğer menülere kolaylıkla ulaşabilirsiniz. Git Flow panelinde yer alan `Feature`, `Release` ve `Hotfix` özelliklerini başlatabilir veya tamamlayabilirsiniz.

Soldaki GitFlow menüsündeki yeşil düğmeyi tıklayarak yeni GitFlow dalları oluşturabilirsiniz. 

Dalları, yeni sürümler için yeni özellikler geliştirmek için kullanılır ve hata düzeltmeleri için de kullanılabilir. Genellikle geliştiricilerin yerel repolarında bulunur ve paylaşılmazlar. Bir özellik dalını bitirmek için seçtiğinizde, GitKraken özellik bölümünü geliştirir ve onu kendiliğinden temizlemek için özellik deposunu yerel depodan siler.

### Feature

![GitKraken Feature](https://ahmetcadirci.com.tr/images/galeri/finish-feature.gif "GitKraken Feature")

<p>Özelliğini geliştirir ve onu temizler.</p>

### Release 

![GitKraken Release](https://ahmetcadirci.com.tr/images/galeri/finish-release.gif "GitKraken Release")

Release `master` ve `develop` geliştirir ve birleştirir.

### Hotfix

![GitKraken Hotfix](https://ahmetcadirci.com.tr/images/galeri/finish-hotfix.gif "GitKraken Hotfix")

Hotfix `master` ve `develop` hatalarını düzeltir.