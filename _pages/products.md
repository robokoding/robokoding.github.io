---
permalink: /products/
---

<div class="grid__wrapper">
  {% assign posts = site.products type="grid" %}
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
