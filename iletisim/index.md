---
layout     : page
title      : İletişim Bilgileri
description: "Ahmet Çadırcı İletişim Bilgileri... Sosyal medya hesapları ve iletişim formu üzerinden ulaşabilirsiniz."
permalink  : /iletisim/
image      : "/images/ahmetcadirci-wallpaper.jpg"
---

<div class="contact">
  <h1 style="font-size: 30px">İletişim Formu</h1>
  <p class="contact__text">Düşüncelerinizi bizimle paylaşabilirsiniz.</p>
  <form action="https://formspree.io/{{site.author.email}}" method="POST">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <input type="text" name="name" placeholder="Adınız *">
      </div>
      <div class="col-md-6 col-xs-12">
        <input type="email" name="_replyto" placeholder="E-mail Adresiniz *">
      </div>
      <div class="col-md-12">
        <textarea rows="6" type="text" name="message" placeholder="Mesajınız *"></textarea>

        <input type="submit" value="Gönder">

        <p><span class="contact__obligatory">* Tüm alanları lütfen doldurun.</span> </p>
        <p><span class="contact__obligatory">** Adres ve telefon numaraları için iletişim formunu doldurarak talepte bulunabilirsiniz.</span> </p>
        <p><span class="contact__obligatory">*** <a href="/gizlilik-politikasi/">Gizlilik Politikası</a> hakkında bilgi alabilirsiniz. </span> </p>
      </div>

       <input type="hidden" name="_next" value="//ahmetcadirci.com.tr/iletisim/" />

       <input type="hidden" name="_format" value="plain" />

       <input type="text" name="_gotcha" style="display:none" />
        
    </div>
  </form>
</div>