---
title      : "Mikrobilgisayar Sistemleri Örnek Sorular"
description: "2016 Mikrobilgisayar Sistemleri ve Arduino Soru Örnekleri..."
date       : 2016-11-19 19:40:00
categories : [genel]
tags       : [arduino]
postimg    : "mikrobilgisayar-sistemleri-ornek-sorular.webp"
comments   : true
---

Aşağıdaki döngü bittiği zaman hangi pinler lojik 1 yapılmış olur?

```
for (int i = 3; i < 8; i=i+2){
digitalWrite(i, HIGH);
}
```

**Cevap:** 3,5,7 nolu pinler

* * * 

Aşağıdaki program çalıştığında seri porttan hangi veriyi gönderir?

```
String kelime = “Merhaba test”;

Serial.print(kelime.length());
```

**Cevap:** 12

* * * 

Aşağıdaki dizi `a[1][4]` olarak çağrıldığında hangi sayı gelir?

```
int a[3][5] = { { 1, 2, 3, 4, 5 }, { 6, 7, 8, 9, 10 }, { 11, 12, 13, 14, 15 } };
```

**Cevap:** 10

* * * 

Aşağıdaki program çalıştırıldığında seri porttan hangi veri gönderilir?

```
float x = 1.05;
float y = 1.55;
Serial.print(min(x,y));
```

**Cevap:** 1.05

* * * 

Arduino programlama dilinde bulunan setup fonksiyonu ne zaman çalışır?

**Cevap:** Arduino'ya enerji verildiği anda

* * * 

Arduino programla dilinde kullanılan `“~”` operatörü ne işe yarar?

**Cevap:** Operandın bütün bitlerini değiller.

* * * 

Aşağıdaki tanımlanan değişkenler ile program çalıştırıldığı zaman `“c”` değişkeninin değeri ne olur?

```
int a = 489;
int b = 76;
int c = a^b
```

**Cevap:** 421

* * * 

`pinMode(13, INPUT)` komutu ne işe yarar?

**Cevap:** 13 nolu pini giriş olarak ayarlar

* * * 

Atmega ve bir çok denetleyicide bulunan Interrupt (kesme) nedir?

**Cevap:** Denetleyicinin o anki işi bırakıp başka bir işe yönelmesi

* * * 

`if (x > 75 || y > 30)` koşulunun açıklaması nedir?

**Cevap:** x büyüktür 75 ve y büyüktür 30

* * * 

I- Her işlemcinin kendine ait makine kodları vardır.

II- Yazdığımız bir program mutlaka makine koduna çevrilip bellekte öyle saklanmalıdır.

III- *.asm uzantılı dosyalar makine kodlarını içerirler.

Yukarıda makine kodu ile ilgili verilmiş olan açıklamalardan hangisi veya hangileri doğrudur?

**Cevap:** I-II

* * * 

Arduino Uno'da Char veri türünün bellekteki kapladığı alandır?

**Cevap:** 1 byte

* * * 

I- Bilgisayar üzerindeki özel donanım parçaları üzerinde çalışırken, iyi bir denetim imkanı verir.

II- Program geliştirme ortamı yüksek seviyeli programlara göre daha kolaydır.

III- Küçük ve oturaklı, çalışabilir programlar yazılabilir.

Yukarıda verilen açıklamalardan hangisi veya hangileri assembly programlama dilinin yüksek seviyeli programlama dillerine göre üstünlükleri arasında yer alır?

**Cevap:** I-III

* * * 

Birleşik operatör olan `“- - x”` işleminin görevi nedir?

**Cevap:** x'in değerini 2 azaltır, sonra yeni değeri döndürür

* * * 

Aşağıdaki program çalıştırıldığında seri porttan hangi veri gönderilir?

```
int x = -16;
Serial.print(abs(x));
```

**Cevap:** 16

* * * 

I- Programın derlenmesi

II- Test ve kontroller

III- Program yazma işlemi

IV- Program algoritmasının oluşturulması

Yukarıda gömülü sistemler için program geliştirme aşamaları sırasız olarak verilmiştir. Aşağıdaki seçeneklerden hanigsinde sıralama doğru olarak verilmiştir?

**Cevap:** IV-III-I-II

* * * 

Aşağıdaki program çalıştırıldığında seri porttan hangi veriyi gönderir?

```
String test = “abcdefg”;
Serial.print(test.charAt(4));
```

**Cevap:** e

* * * 

Arduino programlama dilinde Setup ve Loop fonksiyonlarının dışında tanımlanan değişkene ne ad verilir?

**Cevap:** Global değişken

* * * 

Arduino Uno’nun 8 numaralı pinine bağlı hoparlörden nota çıkışı almak için hangi kütüphane kullanılabilir?

**Cevap:** Tone.h

* * * 

`Serial.available()` komutu ne işe yarar?

**Cevap:** Seri porttan gelen verinin karakter sayısı kadar değer dönderir.

* * * 

Mikrodenetleyicide olup mikroişlemci içerisinde bulunmayan bir yapıdır?

**Cevap:** Çevresel birimler

* * * 

I- Yığın (Stack) hafızasındaki değer PC (Program Counter) içerisine aktarılır.

II- Program kesme vektörünün olduğu adrese gider.

III- PC (Program Counter) değerinin bir fazlası yığın (Stack) hafıza içerisine atılır.

IV- Kesme alt programı işletilir.

V- Kesme bayrağı kalkar.

Yukarıda kesme (interrupt) olayının meydana gelmesindeki olaylar sırasız olarak verilmiştir. Aşağıdaki seçeneklerin hangisinde bu olaylar doğru bir sırada verilmiştir?

**Cevap:** V-III-II-IV-I

* * * 

SPI protokolünün pinlerinden değildir?

**Cevap:** SDA

* * * 

I- Genel amaçlı uygulamalardan daha çok özel amaçlı uygulamalar için üretilmişlerdir.

II- Sistemin üretim maliyetlerini düşürürler.

III- Genellikle çevresel birimleri, RAM, EEPROM ve program hafızası tümleşik üretilirler.

Yukarıda verilmiş olan açıklamalardan hangisi veya hangileri mikrodenetleyiciler için söylenebilir?

**Cevap:** I-II-III

* * * 

Arduino Uno’daki A0-A5 nolu pinlerden analog çıkış alınabilir mi?

**Cevap:** Alınamaz

* * * 

On tabanındaki 125 sayısının iki tabanındaki karşılığı aşağıdaki seçeneklerin hangisinde verilmiştir?

**Cevap:** 1111101

* * * 

İki tabanındaki (10100111) sayısının onaltı tabanındaki karşılığı aşağıdakilerden hangisidir?

**Cevap:** 0xA7

* * * 

I- İşlet

II-Kod Çöz

III- Getir

IV- Yaz

Yukarıda bir işlemci içerisinde gerçekleştirilen işlemler sırasız olarak verilmiştir. Aşağıdaki seçeneklerin hangisinde bu işlemlerin gerçekleştirilme sırası doğru olarak verilmiştir?

**Cevap:** III-II-I-IV

* * * 

Bilgisayarın temel bileşenlerinden değildir?

**Cevap:** Kasa

* * * 

I- VE Kapısı

II- VEYA Kapısı

III- XOR Kapısı

IV- VEYA-DEĞİL Kapısı

Yukarıda sıralanmış olan mantık kapılarının her birinin A ve B olmak üzere iki girişi vardır. A girişine dijital sıfır, B girişine dijital bir uygularsak kaç tane kapının çıkışı dijital bir olur?

**Cevap:** 2
