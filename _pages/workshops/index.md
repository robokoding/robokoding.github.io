---
layout: landing
title: Workshops
tagline: Hands-on Learning Experience
description: We conduct workshops to enable children to learn the basics of programming and robotics in an interdisciplinary fashion.
image: assets/images/workshop.jpg
permalink: "/workshops/"
---

<!-- Two -->
<section id="two" class="spotlights">
	{% assign sorted_pages = site.pages | sort:"order" %}
	{% for workshop in sorted_pages %}
  {% if workshop.path contains "/workshops/" %}
	{% unless workshop.path contains "index" %}
	<section>
		<a href="{{ workshop.permalink | absolute_url }}" class="image">
			<img src="{{ workshop.image | absolute_url }}" alt="thumbnail" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{ workshop.title }}</h3>
				</header>
				<p>{{ workshop.content | strip_html | truncatewords: 30 }}</p>
				<ul class="actions">
					<li><a href="{{ workshop.permalink | absolute_url }}" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	{% endunless %}
	{% endif %}
	{% endfor %}
</section>
