---
layout: landing
title: Consulting
tagline: Custom-Made Experience
description: We provide onsite or remote consulting to find the best platform for your needs or develop a custom solution, hardware and software.
image: assets/images/consulting.jpg
permalink: "/consulting/"
---

<!-- Two -->
<section id="two" class="spotlights">
	{% for consulting in site.pages %}
  {% if consulting.path contains "/consulting/" %}
	{% unless consulting.path contains "index" %}
	<section>
		<a href="{{ consulting.permalink | absolute_url }}" class="image">
			<img src="{{ consulting.image | absolute_url }}" alt="thumbnail" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{ consulting.title }}</h3>
				</header>
				<p>{{ consulting.content | strip_html | truncatewords: 30 }}</p>
				<ul class="actions">
					<li><a href="{{ consulting.permalink | absolute_url }}" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	{% endunless %}
	{% endif %}
	{% endfor %}
</section>
