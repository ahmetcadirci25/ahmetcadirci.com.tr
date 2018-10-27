--- 
title      : ".ONION Uzantılı Tor Sitesi Nasıl Kurulur?" 
description: "Tor tarayıcısı, anonim olarak internette gezinmek için güçlü ücretsiz araçtır. .ONION uzantılı derin ağa (deep web) girmenize olanak sağlar. " 
date       : 2018-10-23 20:00:00 
categories : [İnternet] 
tags       : [Tor, Onion, Onion uzantılı sitelere nasıl girilir, Deep web sitesi açma, Onion linkleri nasıl açılır, Tor browser kurulumu] 
image      : "/images/onion-uzantili-tor-sitesi-nasil-kurulur.png" 
comments   : true 
--- 

Tor tarayıcısı, anonim olarak internette gezinmek için güçlü ücretsiz araçtır. .onion uzantılı derin ağa (deep web) girmenize olanak sağlar. Bir web sitesi oluşturmak istiyorsanız veya derin ağda (deep web) gezinmek istiyorsanız yazının tamamını okumanızı tavsiye ederim. .onion sitesi oluşturmak istiyorsanız detayları iyi takip etmeniz gerekir. 

## İçindekiler 

- [.ONION Alan Adı Nedir ve Nasıl Çalışır?]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#onion-alan-adı-nedir-ve-nasıl-çalışır) 
- [Sıradan Bir Alan Adından Farkları Nelerdir?]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#sıradan-bir-alan-adından-farkları-nelerdir) 
- [Neden Bir Adres İsteyeyim?]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#neden-bir-adres-i̇steyeyim) 
- [Tor Tarayıcısı Nasıl Kurulur?]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#tor-tarayıcısı-nasıl-kurulur) 
	- [Tor Tarayıcısı Kurulum Aşamaları]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#tor-tarayıcısı-kurulum-aşamaları) 
	- [Tor Tarayıcısını Güncelleme]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#tor-tarayıcısını-güncelleme) 
	- [Tor Ağını Yapılandırma]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#tor-ağını-yapılandırma) 
	- [Tor Tarayıcının Çalışıp Çalışmadığını Kontrol Etme]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#tor-tarayıcının-çalışıp-çalışmadığını-kontrol-etme) 
- [.ONION Alan Adı Nasıl Oluşturabilirim?]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#onion-alan-adı-nasıl-oluşturabilirim) 
	- [HTML (Demo) Site Kurulumu ve Yapılandırma]({{site.url}}/2018/onion-uzantili-tor-sitesi-nasil-kurulur/#html-demo-site-kurulumu-ve-yapılandırma) 


## .ONION Alan Adı Nedir ve Nasıl Çalışır? 

Bir .onion alan adı, yalnızca Tor tarayıcısı aracılığıyla erişilebilen web site adresidir. Chrome, Firefox ve Opera gibi tarayıcılar, kullanıcıları tor web sitelerine girişini engeller. 

## Sıradan Bir Alan Adından Farkları Nelerdir? 

.com, .org, .biz ve diğerleri gibi sıradan web alanları, İnternet Tahsisli Sayılar ve İsimler Kurumu (ICANN) tarafından kayıt edilir. Genellikle seçtiğiniz alanın tescili ve bakımı ile ilgili maliyetler vardır. 

## Neden Bir Adres İsteyeyim? 

.onion alan adı, diğer alan adlarından farklı bulunmaktadır. Temel özelliği sadece bir Tor tarayıcısı kullanılarak erişilebildiğinden hem dezavantajı hem de avantajı. Tor, en popüler tarayıcıdan uzaktır ve birçok kişi varlığını bile bilmez. Bu nedenle, .onion sitenizde büyük trafik beklememeniz gerekir. Ancak, Tor tarayıcısı daha popüler tarayıcılarda bulunmayan çok sayıda anonimlik katmanı sunar. Hem siz hem de ziyaretçileriniz için toplam anonimlik sağlamak istiyorsanız, bir Tor adresinden çok daha iyisini bulamazsınız.  

Bir .onion sitesi oluşturduğunuzda, sizin için otomatik olarak bir alan adı oluşturulur. Tor tarayıcınızın sunucunuza gitmek için kullanabileceği 16 adet rastgele küçük harf ve sayı (2'den 7'ye kadar) dizgesi olacaktır. Ne yazık ki, bu rastgele dizeler 16 karakterden daha uzun veya daha kısa olamaz ve çoğu kez hatırlanması zordur, bu da kullanıcıların web sitenizi ezberlemesini ve kötü niyetli kullanıcıların ziyaretçilere potansiyel olarak kafa karıştırması için benzer ama farklı bir alan adı yaratmasını kolaylaştırır. 

Ancak, bu aynı zamanda kendi alanınızı oluşturmak için ICANN'e kaydolmanız gerekmediği anlamına da gelir. Bilgilerinizi "whois" aramalarından gizlemeniz gerekmeyecek ve ICANN hesabınız kötü amaçlı kullanıcılara karşı savunmasız olmayacak. Gizliliğinizi ve alan adınızı tamamen kontrol altında tutacaksınız. 

Bir alan adı oluşturmak - seçtiğiniz bir tanıma sahip bir sözcüğe sahip olmak - mümkün fakat hesaplama açısından pahalıdır. Facebook .onion domainini - facebookcorewwwi.onion - elde etmek için önemli kaynaklar ayırdı ve sadece 8 karaktere ihtiyaç duydu. Tam olarak istediğiniz 16 karakteri almak, elde etmek için tek bir bilgisayar milyarlarca yıl hesaplama yapması gerekir. 

## Tor Tarayıcısı Nasıl Kurulur? 

İşletim sisteminize uygun olan dosyayı aşağıdaki linklere tıklayarak indirebilirsiniz.  

- [Windows](https://github.com/TheTorProject/gettorbrowser/releases/download/v8.0.2/torbrowser-install-8.0.2_tr.exe){:target="_blank"}{:rel="noopener"} 
- [OS X](https://github.com/TheTorProject/gettorbrowser/releases/download/v8.0.2/TorBrowser-8.0.2-osx64_tr.dmg){:target="_blank"}{:rel="noopener"} 
- [Linux 32-bit](https://github.com/TheTorProject/gettorbrowser/releases/download/v8.0.2/tor-browser-linux32-8.0.2_tr.tar.xz){:target="_blank"}{:rel="noopener"} 
- [Linux 64-bit](https://github.com/TheTorProject/gettorbrowser/releases/download/v8.0.2/tor-browser-linux64-8.0.2_tr.tar.xz){:target="_blank"}{:rel="noopener"} 
- [Android Orbot](https://play.google.com/store/apps/details?id=org.torproject.android&hl=tr){:target="_blank"}{:rel="noopener"} 
- [iOS Onion Browser](https://itunes.apple.com/us/app/onion-browser/id519296448?mt=8){:target="_blank"}{:rel="noopener"} 

### Tor Tarayıcısı Kurulum Aşamaları 

1. **Adım** Tor Tarayıcı dosyasına sağ tıklayın ve ardından **[Aç]**'a tıklayın. 
2. **Adım** Tor Tarayıcı'yı kullanmak istediğiniz dili seçin ve **[Tamam]**'a tıklayın. 
3. **Adım** Tor Tarayıcı'yı kurmak istediğiniz klasörü seçin. 
4. **Adım** Tor Tarayıcı'yı kuracağınız yeri seçtikten sonra **[Kur]**'a tıklayın.  
5. **Adım** Tor Tarayıcı'nın kurulumunu tamamlamak **[Bitir]**'e tıklayın. 

{% include picture.html image_id="/images/galeri/tor-tarayicisi-kurulum-asamalari.png" imagealt="Tor Tarayıcısı Kurulum Aşamaları" link="/images/galeri/tor-tarayicisi-kurulum-asamalari.png" %} 
*Resmi büyütmek için üzerine tıklayın.* 

### Tor Tarayıcısını Güncelleme 

"Tor Tarayıcı için güncellemeler mevcut olduğunda size tarayıcınızın güncel olmadığına dair bir uyarı yapılacak. Tor Tarayıcı için güncellemeleri denetlemek için aşağıdakileri uygulayın:" 

1. **Adım** Tor Tarayıcı menüsünü etkinleştirmek için ![Soğan Düğmesi](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAIAAADB+WItAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4AYdAy8BkP59YgAAAvJJREFUSMftlUlME1EYx6cdlkKnhZataYEqxgTZDCEeCLIYjeBS5AAScCEmePBgDDFREoLigcSTCTHxoDRq0riQkhZSYwJEZQ+bmqLsWGhroQstM53pTNuZeR5MBFmMbJ78X1/y/d73vv//exwcx6E9Fhfae/0LRsAfzh5UKaUZ0UaD41btlR31ATYXExGEBVrb27sZPwN2oE3fqk03zEVoi8kcLuCrX3Ts8jwInKqrrX+qasw8d5ALg1xF+iPVw5rquwRO7Q5jYsxYcELBFQbUNd4gCYJykWJBeNm9InOwMTs7V/95dKeMsS8z5WUXbzdUlV4rnOk3GOaMNpddnhKtf2tKKz6cdyevuLRkqG94qwzOrwzibirn6Ol6ZXX8PkmHegCOpSMTw7t1XXJvoptkgQLzAdo55+yq7R4ZHBAIQlZXKSoqWl9aq9Wu9dWzxpf557Pi4mPu1zSIsnhRSSLHtBXXL9MyBlt2f5+wojTByOCok9HPla/WOEej0awBaDSaDXzV0tp8tuSU6vHrY1czg/mBX9umpxbmPWE0nw+bZr/ZzCjKkBhDiY7LdDrt+luvxqxBrjCWbKRYEuYkHXwxonvyBpVivDQEQjiz00Y3i7qsbjfjIxg/FQYZF20bvvvP0ut7Wsk5C5jRwTFZmqy3pZeXLgyW8iw9JvvIoueQD/U4ISAkWT8NAQYAGN40VesBv/UhiUXkCXFT/ZNWs12UIGZIZmhi3M7z8KV8xslyQmASMF6W8bq9cZLIbXr3TIGiWdUqgMO4JOTFqcVJC5soxMSsuc9oWbR6Yrx+wPoB69AZzuQXbnNfVVRe6tT1HMnKJAhSr/7EQ3iQ0wcBsGRyuImFoP1CGgDSgIV00RWV5VvaVyvzQBCeUqksv3A5IkpotMzFp8q54ziM+iiUEqZL/KEc8MHhaTK1NqlDkeDt5zwp+UDn+7aM1ByvK6j5ZhOptzv65pcXnGKhGL3+MdueMvCuKzU1ecs5xzDs/1/7d/oBvm4YVfXnaIgAAAAASUVORK5CYII=) tuşuna tıklayın. 
2. **Adım** **[Tor Browser Güncelleme Denetimi...]**’ne tıklayın 
3. **Adım** Yeni bir sürüm olup olmadığı dair sizi bilgilendirecek. Eğer yeni sürüm varsa güncellemeyi kesinlikle yapmalısınız. 

{% include picture.html image_id="/images/galeri/tor-tarayicisini-guncelleme.png" imagealt="Tor Tarayıcısını Güncelleme" link="/images/galeri/tor-tarayicisini-guncelleme.png" %} 
*Resmi büyütmek için üzerine tıklayın.* 

### Tor Ağını Yapılandırma 

"Tor Tarayıcı’nın kurulumunu tamamladığınızda, Tor Tarayıcı Kurulum Sihirbazına yönlendirecek:" 

1. **Adım** Tor Ağı’na bağlantınız engellenmiş ya da sansürlenmiş ise **[Yapılandır]**’a tıklayın. 
2. **Adım** **Evet**’i seçin 
3. **Adım** Köprü yapılandırma ekranını görüntülemek için **[İleri]**'ye tıklayın. 
4. **Adım** Sağlanan köprüler ile bağlan’ı seçin. 
5. **Adım** Yerel vekil sunucu yapılandırma ekranını görüntülemek için **[İleri]**’ye tıklayın. 
6. **Adım** **[Hayır]**’ı seçin. 
7. **Adım** Tor Tarayıcı’yı başlatmak için **[Bağlan]**’a tıklayın. 

{% include picture.html image_id="/images/galeri/tor-agini-yapilandirma.png" imagealt="Tor Ağını Yapılandırma" link="/images/galeri/tor-agini-yapilandirma.png" %} 
*Resmi büyütmek için üzerine tıklayın.* 

### Tor Tarayıcının Çalışıp Çalışmadığını Kontrol Etme 

Tor Check’in adresini ziyaret ederek kontrol edebilirsiniz. 

[https://check.torproject.org/](https://check.torproject.org/?lang=tr){:target="_blank"}{:rel="noopener"} 

{% include picture.html image_id="/images/galeri/tor-denetimi.png" imagealt="Tor Ağını Yapılandırma" link="/images/galeri/tor-denetimi.png" %} 
*Resmi büyütmek için üzerine tıklayın.* 


## .ONION Alan Adı Nasıl Oluşturabilirim? 

1. **Adım** Tor tarayıcısını açıktan sonra url satırına [http://dhosting4okcs22v.onion](http://dhosting4okcs22v.onion/register.php){:target="_blank"}{:rel="noopener"} adresini kopyalayın.  
2. **Adım** Açılan sayfada **Username** (Kullanıcı adı), **Password** (Şifre), **Confirm password** (Şifre Tekrarı), **Copy** (Bot Kontrolü) ve **Kullanım sözleşmesini** kabul edin. 
3. **Adım** Üye olduktan sonra uyarı mesajı alacaksınız. **fzrcdjvzulfpczfd.onion** gibi rastgele alan adı üretilecektir. 
4. **Adım** [http://dhosting4okcs22v.onion/login.php](http://dhosting4okcs22v.onion/login.php){:target="_blank"}{:rel="noopener"} adresinden kullanıcı adı ve şifrenizi yazarak giriş yapabilirsiniz.  
5. **Adım** Giriş işlemini yaptıktan sonra kontrol paneli açıklacaktır. 

{% include picture.html image_id="/images/galeri/onion-hosting-bilgileri.png" link="/images/galeri/onion-hosting-bilgileri.png" imagealt="Giriş Sayfası" %} 
*Resmi büyütmek için üzerine tıklayın.* 


### HTML (Demo) Site Kurulumu ve Yapılandırma 

1. **Adım** Kontrol panelinde yer alan **FileManager** linkine tıklayın. Yeni sekme açıkcaktır. 
2. **Adım** Açılan sayfaya şifrenizi girin. 
3. **Adım** **wwww** klasörüne tıklayın.  
4. **Adım** **index.hosting.html** dosyasını seçin ve **Delete** tuşuna basın. 
5. **Adım** Daha önceden hazırladığımız **[tor.zip](https://github.com/ahmetcadirci25/tor/archive/tor.zip)** dosyasını indirip **Gözat** kısmından seçip **Upload** tuşuna basın. 
6. **Adım** **[tor.zip](https://github.com/ahmetcadirci25/tor/archive/tor.zip)** dosyasını seçip **Unzip** tuşuna basarak yaptığımız html dosyasını dışa aktarın. 
7. **Adım** **[fzrcdjvzulfpczfd.onion](http://fzrcdjvzulfpczfd.onion)** adresine ziyaret ederek yüklediğimiz html dosyasını görüntüleyebiliriz.  

{% include picture.html image_id="/images/galeri/html-site-kurulumu.png" link="/images/galeri/html-site-kurulumu.png" imagealt="HTML Site Kurulumu" %} 
*Resmi büyütmek için üzerine tıklayın.* 

#### Kaynakça: 

1. Daniel's Hosting. ‎23 Ekim ‎2018. http://dhosting4okcs22v.onion/ 
2. Windows için Tor Tarayıcı - çevrimiçi anonimlik ve internet sansürünü atlatma. ‎23 Ekim ‎2018. https://securityinabox.org/tr/guide/torbrowser/windows/ 
3. How to make a .onion site. ‎23 Ekim ‎2018. https://nordvpn.com/ru/blog/how-to-register-onion-domain/ 
