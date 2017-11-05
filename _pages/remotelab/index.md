---
layout: landing
title: Remote Labs
tagline: Remote learning experience
description: We offer different remote labs to enable access to STEM education and educational tools to every child from anywhere in the world.
image: assets/images/remotelab.jpg
permalink: "/remotelab/"
---
<!-- Two -->
<section id="two" class="spotlights">
	{% for remotelab in site.pages %}
  {% if remotelab.path contains "/remotelab/" %}
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
				<p>{{ remotelab.content | truncatewords: 30 }}</p>
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
