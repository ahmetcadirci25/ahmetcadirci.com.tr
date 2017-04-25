---
layout: default
title: Ahmet Çadırcı İletişim Bilgileri
description: "Ahmet Çadırcı İletişim Bilgileri... Sosyal medya hesapları ve iletişim formu üzerinden ulaşabilirsiniz."
permalink: /blog/
postimg: "ahmetcadirci-wallpaper.jpg"
---
<div class="main-post-list">

<div class="searchform">
	<form class="sgroup" action="/search/" method="get">
		<div class="sleft"><input type="text" class="sleft" id="search-box" name="query"></div>
		<div class="sright"><input type="submit" class="submit" value="Ara"></div>
	</form>
</div>

<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
  <div class="content">
    {{ post.content }}
  </div>
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>