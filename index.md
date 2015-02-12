---
layout: page
title: Recent posts
---
{% include JB/setup %}


<ul class="posts">
  {% for post in site.posts %}
  	{% if forloop.index0 < 10 %}
	    <li class="rencent_post">
	    	<p class="post"><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></p>
	    	<div class="post_content">{{ post.content }}</div>
	    	<div class="expand">&lt;expand&gt;</div>
	    </li>
	   {% endif %}
  {% endfor %}
</ul>