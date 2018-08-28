---
layout: landing
title: Remote Labs
tagline: Remote Learning Experience
description: We organize different remote labs to enable access to STEM education and educational tools to every child from anywhere in the world.
image: assets/images/remotelab.jpg
permalink: "/remotelabs/"
---
<!-- Two -->
<section id="two" class="spotlights">
	{% for remotelab in site.pages %}
  {% if remotelab.path contains "/remotelabs/" %}
	{% unless remotelab.path contains "index" %}
	<section>
		<a href="{{ remotelab.permalink | absolute_url }}" class="image">
			<img src="{{ remotelab.image | absolute_url }}" alt="thumbnail" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{ remotelab.title }}</h3>
				</header>
				<p>{{ remotelab.content | strip_html | truncatewords: 30 }}</p>
				<ul class="actions">
					<li><a href="{{ remotelab.permalink | absolute_url }}" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	{% endunless %}
	{% endif %}
	{% endfor %}
</section>
