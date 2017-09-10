---
title: "MainWP Dashboard ile Tüm Wordpress Sitelerinizi Tek Panelden Yönetme İmkanı"
description: "MainWP Dashboard ile tüm wordpress sitelerinizi tek panelden yönetme imkanı sunmaktadır. Güncellemeleri, eklentileri tek seferde kurabilirsiniz."
date: 2017-03-09 22:50:00
categories: [wordpress]
tags: [mainwp dashboard, mainwp child]
postimg: "mainwp-dashboard-ile-tum-sitelerinizi-tek-panelden-yonetme-imkani.webp"
---

Wordpress uzun süredir internet dünyasında zirveyi korumaktadır. Birden fazla Wordpress'e sahip olan insanlar bunların yönetimde bazen sıkıntılar yaşamaktadırlar. Güncellemeler, eklentiler vb. işlemleri tüm sitelerde tekrarlamak oldukça zor hale gelebilir. 

Sizlere bir eklentiyi tanıtmak istiyorum. MainWP Dashboard adlı eklenti birden fazla Wordpress sitenizi tek siteden yönetme imkanı sunmaktadır. 

Örneğin;

Ana sitemiz

`http://mainwptest.com`

Diğer 3 sitenizde bu şekilde,

`http://test-1.com`

`http://test-2.com`

`http://test-3.com`

*4 adet site nasıl bir adet site üzerinden işlemler gerçekleşir. Bunları örnekler ile sizlere anlataçağım.*

### 1. MainWP Dashboard (Kontrol Paneli) Kurulumu

1. Adım ana sitemizi belirlemek. Bizim ana sitemiz `mainwptest.com`.
2. MainWP Dashboard (Kontrol Paneli) kurulumu için,
3. **Eklentiler** > **Yeni Ekle** > **MainWP Dashboard** > **Hemen Yükle** > **Etkinleştir**
4. **Welcome to MainWP Dashboard** ekranına **Not right now** butonuna tıklayın.

*Şimdi diğer sitelere kurulum yapalım.*

### 2. MainWP Child Kurulumu

1. MainWP Child kurulumu için,
2. **Eklentiler** > **Yeni Ekle** > **MainWP Child** > **Hemen Yükle** > **Etkinleştir**

`test-1.com`, `test-2.com` ve `test-3.com` sitelerine aynı kurulumları yapacağız. 

*3 siteye MainWP Child kurulumu yaptıktan sonra artık hepsinin ana siteye bağlayabiliriz.*

### 3. MainWP Dashboard (Kontrol Paneli) Yeni Site Ekleme

MainWP Dashboard (Kontrol Paneli) yeni site eklemek için,

1. Adım **MainWP** > **Sites** > **Add New**
2. Adım **Site URL** > test-1.com
3. Adım **Administrator username** > admin (Eğer kullanıcı adınız farklı ise onu yazmalısınız)
4. Adım **Child Unique Security ID** kısmına `test-1.com` sitesiniz kontrol paneli giriş yapın ve **Ayarlar** > **MainWP Child** kısmına tıklayın. 
5. Adım **Require unique security ID** yanında yer alan kutuya tıklayın. ***Your unique security ID is:** kısmında çıkan kodu kopyalayın. 
6. Adım `mainwptest.com` sayfasında eksik kalan **Child Unique Security ID** kısmına kopyaladığımız kodu yapıştırıyoruz. 
7. Adım **HTTP username** ve **HTTP password** `test-1.com` domain adresinin kontrol paneline giriş yaparken kullandığımız **kullanıcı adı** ve **şifresini** yazın.
8. Adım **Add New Site** diyerek tamamlıyoruz. 

*`test-2.com` ve `test-3.com` sitelerini aynı şekilde ekliyoruz.*

Sorunları ve düşünlerinizi yorumlar kısmına yazabilirsiniz. 