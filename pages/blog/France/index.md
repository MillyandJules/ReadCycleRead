---
layout: default
title: Home
---

## Update 26.03.2018  

Well we made it through France! Haven't managed to have a proper rest day to update this blog so keep an eye on Instagram for daily snippets for now!

All in all though France comprised of:  

  From: St Malo to Basel  
  No. days: 16  
  Distance: 1275 km  
  Ascent: 6500 m  
  No. baguettes eaten: 30  
  No. croissants eaten: 41  
  
  Accommodation:  
  Tent : 12 nights (1 open campsite!)  
  Warmshowers: 4 incredible hosts  
  

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
