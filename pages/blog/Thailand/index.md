---
layout: default
title: Home
---

{% for post in site.posts %}
{% if post.tags contains "TH" %}
<article>
  <a href="{{ site.github.url }}{{ post.url }}">
    <div class="featured-posts" {% if post.image %}style="background-image:url({{ site.github.url }}/assets/img/{{ post.image }})"{% endif %}>
      <h2><span>{{ post.title }}</span></h2>
    </div>
  </a>
</article>
{% endif %}
{% endfor %}