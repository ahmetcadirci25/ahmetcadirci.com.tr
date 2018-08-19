---
title      : "WordPress wp-config.php'inizi Nasıl Güvenli Hale Getirebilirsiniz?"
description: "wp-config.php dosyası, WordPress siteniz için önemli yapılandırma bilgilerini tutar ve mümkün olduğu kadar davetsiz misafirlerden korumak önemlidir."
date       : 2016-12-08 11:00:00
categories : [Wordpress, Wordpress Optimizasyon]
tags       : [wp-config.php, Wordpress Güvenlik]
image      : "/images/wordpress-wp-config-php-inizi-nasil-guvenli-hale-getirebilirsiniz.png"
comments   : true
---

WordPress, genel olarak, kurulması ve kısa bir süre içinde üzerinde çalışmaya hazır olan kolay bir sistemdir. Yanlışlıkla sitenizi hackerlara açık hale getirebilir ve hacklenme sonra sıkıntılar yaşayabilirsiniz.

"wp-config.php" dosyası, WordPress siteniz için önemli yapılandırma bilgilerini tutar ve mümkün olduğu kadar davetsiz misafirlerden korumak önemlidir.

### wp-config.php'yi Nasıl Güvenli Hale Getirebilirim?

**wp-config.php'nin İçeriği**

Wp-config.php dosyasını açarsak ve içeriğe bakarsak, bazı hassas bilgiler içerdiğini görürsünüz.

Birincisi, kurulum sırasında girdiğiniz veritabanınıza erişim sağlayan tüm bilgileri içerir.

![wp-config.php'nin İçeriği](https://ahmetcadirci.com.tr/images/galeri/wordpress-wp-config-php.png "wp-config.php'nin İçeriği")

Veritabanı adını, kullanıcı adını, parolayı tutar; bu veritabanına erişebilmek için ihtiyacınız olan her şey. Tahayyül edebileceğiniz gibi, bu dosyayı korumak çok önemlidir, çünkü birisi bu dosyanın içeriğini okuyabiliyorsa, veritabanınıza girip istedikleri her şeyi yapabilir.

Aşağıda, bir dizi gizli anahtar var.

![WordPress Secret Key Salt](https://ahmetcadirci.com.tr/images/galeri/wordpress-secret-key-salt.png "WordPress Secret Key Salt")

Bu anahtar web sitenizi güvenli hale getirmeye yardımcı olmak için çeşitli şekillerde çalışır. 

Aşağıda, güvenlikle ilgili çok önemli bilgilerin bir başka parçası olan tablo öneki bulunmaktadır.

![WordPress Tablo Ön Eki](https://ahmetcadirci.com.tr/images/galeri/wordpress-tablo-on-eki.png "WordPress Tablo Ön Eki")

**wp-config.php'yi Güvenli Hale Getirme**

Dolayısıyla, bu dosyayı güvence altına almak için atacağımız birkaç adım var.

**1. Yeni Gizli Tuşlar Oluşturun**

Yapacağımız ilk şey yeni gizli anahtarlar dizisi üretmektir. WordPress'in sağladığı [gizli anahtar](https://api.wordpress.org/secret-key/1.1/salt/){:target="_blank"}{:rel="noopener"} üreticisi web sitesine giderek bunu yapabilirsiniz. Tek yapmanız gereken bu URL'ye gidip yenilemektir, sizin için üretilen yepyeni bir anahtar grubu olacaktır. Bunları kopyalayıp daha sonra eski anahtarları değiştirerek doğrudan wp-config.php dosyanıza yapıştırabilirsiniz.

**2. wp-config.php'yi Taşı**

Yapacağımız sonraki şey wp-config dosyasını taşımaktır. Varsayılan olarak, web sitenizin kök klasöründe bulunur. Böylece, genel HTML klasörünüzde, siteniz ana alanınızda bulunuyorsa veya hangi alt dizinde sitenizi oluşturuyorsa, WordPress aslında bu wp-config dosyasını alıp bir adım yukarı taşımanızı sağlar, Bu nedenle, ortak klasörünüzün dışında.

Çevrimdışı çalışıyorsanız, bu dosyayı sürükleyip bırakmanız yeterlidir; ancak çevrimiçi kurulumda, dosya yöneticinizde taşıma aracını kullanabilirsiniz. Yani wp-config dosyanızı seçin, move aracına basın ve daha sonra dosyanın yerleştirilmesini istediğiniz dizini değiştirin.

Bu ilk seferde işe yaramazsa, sunucunuzla konuşmanız ve sunucunuzun buna izin verecek bir şekilde kurulduğundan emin olmanız gerekebilir.

**3. wp-config.php'ye erişimi engelleyin**

Artık, wp-config.php dosyamızı korumak için yalnızca bir güvenlik önlemi ekleyebiliriz; bu, herkesin wp-config.php dosyasına erişmesini engellemek için aynı dizine bir .htaccess dosyası eklemenizdir.

Yani wp-config.php dosyanızla aynı dizinde bir htaccess dosyası oluşturun. Uzantısı olmayan bir dosya oluşturamazsınız, bu yüzden bir geçici çözüm.

htaccess.txt adlı bir düz metin dosyası oluşturarak başlayın. Ardından, adını .htaccess olacak şekilde sonuna kadar dosya uzantısını kesin bir nokta ekleyerek yeniden adlandırın.

Şimdi dosyayı düzenleyin ve şu kodu ekleyin:

```
<files wp-config.php>
order allow,deny
deny from all
</files>
```

Bu kod, wp-config.php dosyasına erişimi reddeder.

Windows'daysanız, muhtemelen en iyi ihtimal, halen .txt olarak adlandırıldığında dosyanızda değişiklik yapmak, yukarıdaki gibi aynı kodu ekleyerek ve ardından uzantıyı silmek suretiyle yeniden adlandırmaktır. Windows'da yapmanız gereken tek şey bu; .htaccess dosyanızı yükleyin.

Bir kere bunu yaptıktan sonra, dosyanızla aynı dizine yükleyin ve hepsi tamam!

