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

<ol class="post-list">
{% for post in paginator.posts %}
<li>
<h3 class="post-list__post-title post-title"><a href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}" title="{{ post.title }}">{{ post.title }}</a></h3>

<p class="excerpt">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}&hellip;</p>

<div class="post-list__meta"><time datetime="{{ post.date | date: "%-d %b %Y" }}" class="post-list__meta--date date">{{ post.date | date: "%-d %b %Y" }}</time> &#8226; <span class="post-meta__tags">{% for tag in post.tags %}<a href="{{ site.baseurl }}etiketler/#{{ tag }}">{{ tag }}</a> {% endfor %}</span></div>

<hr class="post-list__divider">
</li>
{% endfor %}
</ol>
<hr class="post-list__divider ">
{% if paginator.previous_page or paginator.next_page %}
    {% include pagination.html %}
{% endif %}
</div>