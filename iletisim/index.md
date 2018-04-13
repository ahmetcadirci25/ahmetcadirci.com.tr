---
layout: page
current: iletisim
title: İletişim
navigation: true
logo: 'assets/images/ahmet-cadirci.png'
class: page-template
subclass: 'post page'
---

<div class="contact subscribe-form">
  <p class="contact__text">Düşüncelerinizi bizimle paylaşabilirsiniz.</p>
  <form action="https://formspree.io/ahmetcadirci25@gmail.com" method="POST">
    <div class="row">
      <div class="col-xs-6">
        <input class="subscribe-email" type="text" name="name" placeholder="Adınız *">
      </div>
      <div class="col-xs-6">
        <input class="subscribe-email" type="email" name="_replyto" placeholder="E-mail Adresiniz *">
      </div>
      <div class="col-xs-12">
        <textarea class="subscribe-email" rows="6" type="text" name="message" placeholder="Mesajınız *"></textarea>

        <button class="" type="submit" disabled=""><span>Subscribe</span></button>

        <p><span class="contact__obligatory">* Tüm alanları lütfen doldurun.</span> </p>
        <p><span class="contact__obligatory">** Adres ve telefon numaraları için iletişim formunu doldurarak talepte bulunabilirsiniz.  </span> </p>
      </div>

       <input class="subscribe-email" type="hidden" name="_next" value="//ahmetcadirci.com.tr/iletisim/" />

       <input class="subscribe-email" type="hidden" name="_format" value="plain" />

        <input class="subscribe-email" type="text" name="_gotcha" style="display:none" />
    </div>
  </form>
</div>