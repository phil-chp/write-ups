---
layout: Post
permalink: /tags
title: Tags
---
# Write Ups tagged with "{{ page.tag }}"

<!-- <ul>
  {% for post in page.posts %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<h1>All Tags</h1>
<ul>
  {% for tag in site.tags %}
    <li><a href="{{ '/tags/' | append: tag[0] | slugify }}">{{ tag[0] }}</a> ({{ tag[1].size }})</li>
  {% endfor %}
</ul> -->

{% for tag in site.tags %}
  {{ tag[0] }}: {{ tag[1].size }} Posts<br>
{% endfor %}
