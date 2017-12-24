---
layout: landing
title: Kits
tagline: Do-it-Yourself Learning Experience
description: We offer different self-assembly kits for enabling fun and interactive learning at home and encouraging the children to channel their creative potential into building their own inventions, toys and gadgets.
image: assets/images/kit.jpg
permalink: "/kits/"
---

<!-- Two -->
<section id="two" class="spotlights">
	{% for kit in site.pages %}
  {% if kit.layout == "page" and kit.path contains "/kits/" %}
	{% unless kit.path contains "index" %}
	<section>
		<a href="{{ kit.permalink | absolute_url }}" class="image">
			<img src="{{ kit.image | absolute_url }}" alt="thumbnail" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{ kit.title }}</h3>
				</header>
				<p>{{ kit.content | strip_html | truncatewords: 30 }}</p>
				<ul class="actions">
					<li><a href="{{ kit.permalink | absolute_url }}" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	{% endunless %}
	{% endif %}
	{% endfor %}
</section>
