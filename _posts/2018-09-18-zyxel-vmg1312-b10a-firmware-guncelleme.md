---
title      : "ZyXEL VMG1312-B10A Firmware Güncelleme"
description: "ZyXEL VMG1312-B10A firmware güncellemesi için aşağıda belirtilen yazılım güncelleme prosedürünü uygulayabilirsiniz."
date       : 2018-09-15 20:00:00
categories : [Teknoloji, Program]
tags       : [Modem, ZyXEL, Firmware]
image      : "/images/zyxel-vmg1312-b10a-firmware-guncelleme.png"
comments   : true
---

ZyXEL VMG1312-B10A firmware güncellemesi için aşağıda belirtilen yazılım güncelleme prosedürünü uygulayabilirsiniz. 

## İçindekiler

- [Yazılım Güncelleme]({{site.url}}/2018/zyxel-vmg1312-b10a-firmware-guncelleme/#1-yazılım-güncelleme)
- [Modem Resetleme]({{site.url}}/2018/zyxel-vmg1312-b10a-firmware-guncelleme/#2-modem-resetleme)
- [Modemin Kablosuz Ağ Ayarları]({{site.url}}/2018/zyxel-vmg1312-b10a-firmware-guncelleme/#3-modemin-kablosuz-ağ-ayarları)
- [Manuel Kurulum İçin]({{site.url}}/2018/zyxel-vmg1312-b10a-firmware-guncelleme/#4-manuel-kurulum-i̇çin)

### 1. Yazılım Güncelleme

1. İnternet sayfası açılır. Adres çubuğuna **192.168.1.1** yazılarak modemin arayüzüne erişilir.
2. Karşımıza gelen şifre ekranındaki kullanıcı adı kısmına **"admin"**, şifre kısmına ise **"1234"** yazıp modeme erişim sağlanır. Sonra ki sayfa da **"Atla"** düğmesine tıklanılır.

Cihazınızın **Yazılım Güncelleme ve Kurulumunu** gerçekleştirmek için modem ile işlem yapılacak bilgisayar arasına ethernet kablosunu direk takmanız gerekmektedir. Ethernet kablosunun bir ucunu bilgisayara diğer ucunu modemin herhangi ethernet (LAN) sarı portlarından herhangi birisine takmanız yeterli olacaktır.

Aşağıdaki linkte cihazının güncel yazılımı bulunmaktadır. Aşağıdaki linke tıklayarak **V100AASU3C0.bin** isimli yazılım dosyasını modemin bağlı olduğu bilgisayarın masaüstüne kaydedilir.

[👉 YAZILIM LİNKİ](ftp://ftp.zyxel.com.tr/ZyXEL_URUNLERI/MODEMLER/VDSL_MODEMLER/VMG1312-B10A/Firmware/V100AASU3C0.bin){:target="_blank"}{:rel="noopener"}{:class="tags__link"}

Modem arayüzüne giriş yapılır.

**Bakım** - **Yazılım Güncelleme** - **Göz At** düğmesine tıklanır ve masaüstünden daha önceden indirmiş olduğunuz .bin uzantılı yazılım dosyası seçilir ve **Yükle** düğmesine basılarak yazılım güncelleme başlatılır. Yükleme işlemi başarılı bir şekilde gerçekleştikten sonra resetleme işlemine geçilir.


### 2. Modem Resetleme

**Resetleme işlemi sırasıyla şöyledir:**

1. İnternet sayfası açılır.Adres çubuğuna **192.168.1.1** yazılarak modemin arayüzüne erişilir.
2. Karşımıza gelen şifre ekranındaki kullanıcı adı kısmına **"admin"**, şifre kısmına ise **"1234"** yazıp modeme erişim sağlanır. Sonra ki sayfa da "**Atla**" düğmesine tıklanılır.
3. **Bakım** - **Yapılandırma** - **Fabrika Ayarlarına Geri** **Dönme** - Fabrika ayarlarına yükle düğmesine tıklanılır ve önümüze gelen uyarıya Onayla düğmesine tıklanılır.
4.  Yaklaşık 2 dakika sonra modem arayüz ekranı gelir. Kullanıcı adı kısmına **"admin"**, şifre kısmına ise **"1234"** yazıp modeme erişim sağlanır. Sonra ki sayfa da **"Atla"** düğmesine tıklanılır.

Modeminizin fabrika ayarlarındaki kablosuz ağ adı ve ağ şifresi modeminizin arkasında veya altındaki etikette **SSID** ve **Wireless key** şeklinde yer almaktadır.

### 3. Modemin Kablosuz Ağ Ayarları

**Ağ Ayarları** - **Kablosuz** kısmından; Kanal otomatik;den 1 veya 6 yapılır, yan tarafta daha fazla yazısına tıklanılır.Bant genişliği otomatikten 40 MHZ yapılır.

Ağ isminize daha önce kullanmadığınız Türkçe karakter olmayan kablosuz ağ ismi yazılır. Onun altındaki 4 kutucuk boş bırakılır.En aşağıda Otomatik şifre oluştur kutusunun işareti kaldırılır ve oraya en az 8 karakterli Türkçe karakter olmayan kablosuz şifre yazılır (bu şifreyi unutmamak adına bir yere kaydetmenizi öneririz) ve uygula düğmesine basılır önümüze yükleniyor yazısı gelecektir.


### 4. Manuel Kurulum İçin;

Modem arayüzüne giriş yapılır.

1. İnternet sayfası açılır. Adres çubuğuna **192.168.1.1** yazılarak modemin arayüzüne erişilir.
2. Karşımıza gelen şifre ekranındaki kullanıcı adı kısmına **"admin"**, şifre kısmına ise **"1234"** yazıp modeme erişim sağlanır. Sonra ki sayfa da **"Atla"** düğmesine tıklanılır.
3. **Ağ Ayarları** - **Genişbant**; önümüze 4 tane satır gelecektir.

Modeminizin üzerinde DSL ışığı sabit yanıyor ise MYISP-ADSL, MYISP-VDSL veya MYISP-XDSL yazan satırın sonundaki kalem - kağıt simgesi olan düzenle butonuna tıklanılır ve açılan sayfa da PPP Bilgisi altında Kullanıcı adı ve şifre kısmına servis sağlayıcınızın size vermiş olduğu DSL kullanıcı adı ve şifre gerekli yerlere yazılıp aşağıdan **Uygula** düğmesine tıklanılır.

**Modeminizle ilgili video anlatımlı kurulum dökümana aşağıdaki linkten ulaşabilirsiniz.**

[Zyxel Modem Kurulum Videosu](https://www.youtube.com/watch?v=PRmJx_5QsmA){:target="_blank"}{:rel="noopener"}