---
layout: landing
title: Training
tagline: Professional Learning Experience
description: We provide onsite or virtual learning environment for upgrading technical skills and implementing various tech tools in educational purposes.
image: assets/images/training.jpg
permalink: "/training/"
---

<!-- Two -->
<section id="two" class="spotlights">
	{% for training in site.pages %}
  {% if training.path contains "/training/" %}
	{% unless training.path contains "index" %}
	<section>
		<a href="{{ training.permalink | absolute_url }}" class="image">
			<img src="{{ training.image | absolute_url }}" alt="thumbnail" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{ training.title }}</h3>
				</header>
				<p>{{ training.content | strip_html | truncatewords: 30 }}</p>
				<ul class="actions">
					<li><a href="{{ training.permalink | absolute_url }}" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	{% endunless %}
	{% endif %}
	{% endfor %}
</section>
