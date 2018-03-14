---
layout: default
title: Home
---

## Latest stats
From St Malo to Orléans:  
  Distance: 450 km  
  Ascent: 3000m  
  No. baguettes eaten: 13  
  No. croissants eaten: 13  
  No. chateaus seen: Too many to count!  

{% for post in site.posts %}
{% if post.tags contains "France" %}
<article>
  <a href="{{ site.github.url }}{{ post.url }}">
    <div class="featured-posts" {% if post.image %}style="background-image:url({{ site.github.url }}/assets/img/{{ post.image }})"{% endif %}>
      <h2><span>{{ post.title }}</span></h2>
    </div>
  </a>
</article>
{% endif %}
{% endfor %}