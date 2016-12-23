---
permalink: /about/
---

<div class="grid__wrapper">
  {% assign posts = site.about | sort: "bookmark" %}
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>