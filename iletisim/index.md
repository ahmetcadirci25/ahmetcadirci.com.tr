---
layout     : page
title      : İletişim Bilgileri
description: "Ahmet Çadırcı İletişim Bilgileri... Sosyal medya hesapları ve iletişim formu üzerinden ulaşabilirsiniz."
permalink  : /iletisim/
image      : "/images/ahmetcadirci-wallpaper.jpg"
---

<div class="contact">
  <h1 style="font-size: 30px">İletişim Formu</h1>
  <p class="contact__text">Düşüncelerinizi bizimle paylaşabilirsiniz. <a href="{{ site.url }}/sponsor/">Sponsorluk</a> hakkında bilgi almak için tıklayın.</p> 
  <form id="my-form" action="https://formspree.io/moqkqvvp" method="POST">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <input type="text" name="name" placeholder="Adınız *" required>
      </div>
      <div class="col-md-6 col-xs-12">
        <input type="email" name="_replyto" placeholder="E-mail Adresiniz *" required>
      </div>
      <div class="col-md-12">
        <textarea rows="6" type="text" name="message" placeholder="Mesajınız *"></textarea>
        <input type="submit" id="my-form-button" value="Gönder">
        <p id="my-form-status"></p>
        <p><span class="contact__obligatory">* Tüm alanları lütfen doldurun.</span> </p>
        <p><span class="contact__obligatory">** Adres ve telefon numaraları için iletişim formunu doldurarak talepte bulunabilirsiniz.</span> </p>
        <p><span class="contact__obligatory">*** <a href="/gizlilik-politikasi/">Gizlilik Politikası</a> hakkında bilgi alabilirsiniz. </span> </p>
      </div>
      <input type="hidden" name="_next" value="//ahmetcadirci.com.tr/iletisim/" />
    </div>
  </form>
</div>

<script>function ajax(e,t,n,o,s){var a=new XMLHttpRequest;a.open(e,t),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?o(a.response,a.responseType):s(a.status,a.response,a.responseType))},a.send(n)}window.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("my-form"),e=document.getElementById("my-form-button"),t=document.getElementById("my-form-status");function o(){n.reset(),e.style="display: none ",t.innerHTML="✔ Teşekkürler! Mesajınız tarafıma ulaştı. En kısa sürede geri dönüş yapılacaktır."}function s(){t.innerHTML="❌ Oops! Bir hata oluştu. Lütfen tekrar deneyin."}n.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(n);ajax(n.method,n.action,t,o,s)})});</script>