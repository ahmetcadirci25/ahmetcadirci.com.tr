---
title      : "YouTube Kanalından ve Çalma Listelerinden RSS Adresi (URL) Nasıl Alabilirsiniz?"
description: "YouTube Kanalından ve çalma listelerinden RSS beslemesi adresi almak mümkündür, bu yazıdan gerekli bilgileri öğrenebilirsiniz."
date       : 2019-03-23 13:00:00
categories : [İnternet, Kod]
tags       : [RSS, YouTube]
image      : "/images/youtube-rss.png"
comments   : true
---

YouTube kanallarından ve çalma listelerinden RSS beslemesi adresi almak mümkündür, bu yazıdan gerekli bilgileri öğrenebilirsiniz. YouTube video RSS linkini otomatik oluşturmaktadır.

[Birinci kısım](https://ahmetcadirci.com.tr/2019/youtube-rss/#birinci-kısım) sabit url'miz yer almaktadır. [İkinci kısım](https://ahmetcadirci.com.tr/2019/youtube-rss/#i̇kinci-kısım)da ise YouTube kanalınız veya çalma listenizin kimliği yer almaktadır.

## Birinci Kısım

**RSS İçin Kanal Kimliği Önek URL'si:**

`https://www.youtube.com/feeds/videos.xml?channel_id=`

**RSS İçin Kullanıcı Adı Önek URL'si:**

`https://www.youtube.com/feeds/videos.xml?user=`

**RSS İçin Çalma Listesi Önek URL'si:**

`https://www.youtube.com/feeds/videos.xml?playlist_id=`

## İkinci Kısım

İlgili kanal kimliğinizi, çalma listesi kimliğinizi veya kullanıcı adınızı yukarıdaki doğru ön eke eklemeniz yeterlidir; YouTube kanalınız veya çalma listeniz için RSS URL’niz olmalıdır.

### Örnekler

**Kanal Kimliği:**

* **URL:** `https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ`
* **RSS URL:** `https://www.youtube.com/feeds/videos.xml?channel_id=UCBR8-60-B28hp2BmDPdntcQ`

**Kullanıcı Adı:**

* **URL:** `https://www.youtube.com/user/youtube`
* **RSS URL:** `https://www.youtube.com/feeds/videos.xml?user=youtube`

**Çalma Listesi:**

* **URL:** `https://www.youtube.com/playlist?list=PLbpi6ZahtOH7vgyGImZ4P-olTT11WLkLk`
* **RSS URL:** `https://www.youtube.com/feeds/videos.xml?playlist_id=PLbpi6ZahtOH7vgyGImZ4P-olTT11WLkLk`

## YouTube ile RSS kullanma

**Tek bir kanal için RSS güncellemelerini alma**

Tek bir kanalın RSS beslemesini almak için kanal URL'sini RSS okuyucunuza yapıştırın.

**Tüm abonelikler için RSS güncellemelerini alın**

Tüm YouTube aboneliklerinizi RSS okuyucunuza aktarmak için OPML dosya indirme özelliğini kullanabilirsiniz:

1. Abonelikleri Yönet sayfanızın altındaki [Abonelikleri dışa aktar](https://www.youtube.com/subscription_manager)'ı tıklayarak OPML dosyasını indirin. Bu `subscription_manager.xml` isimli bir dosya indirecektir.
2. OPML dosyasını RSS okuyucunuza içe aktarın.
	* Örneğin Feedly'de, [RSS İçe (Import) veya Dışa (Export)](https://ahmetcadirci.com.tr/2016/feedly-rss-ice-import-veya-disa-export-aktarma/) özelliğini kullanabilirsiniz.

## RSS Nedir?

RSS, genellikle haber sağlayıcıları, [bloglar]({{ site.url }}/r/rss){:target="_blank"}{:rel="noopener"} ve [podcastlar]({{ site.url }}/r/rss-podcast){:target="_blank"}{:rel="noopener"} tarafından kullanılan, yeni eklenen içeriğin kolaylıkla takip edilmesini sağlayan bir web sayfası bildirimcisidir. Kullandığı dosya biçimleri .rss ve .xml'dir.

RSS kısaltmasının açılımı ve zaman içinde gelişimi şöyledir:

* Rich Site Summary (RSS 0.91) (Zengin Site Özeti)
* RDF Site Summary (RSS 0.9 and 1.0) (RDF Site Özeti)
* Really Simple Syndication (RSS 2.0.0) (Çok Basit Besleme)

İnternet kullanıcısı RSS teknolojisi ile düzenli olarak içerik sunan sitelere abone olabilir ve çeşitli RSS istemcileri sayesinde içeriği takip edebilir. Site yöneticisi veya sahibi bu hizmeti sunmak için bir takım teknik düzenlemeler yapmalı ve uygun formatta XML'i RSS istemcisi talep ettiğinde göndermelidir.

RSS olarak sunulan içerik web sitesinde sunulan içeriğin tamamını, özetini veya sadece başlığını içerebilir.

#### Kaynakça:

1. How to get RSS URLs from YouTube channels and playlists. 23 Mart 2019. https://chriswere.neocities.org/rssyoutube.html
1. RSS - Vikipedi. 23 Mart 2019. https://tr.wikipedia.org/wiki/RSS
1. YouTube ile RSS kullanma. 24 Mart 2019. https://support.google.com/youtube/answer/6224202?hl=tr