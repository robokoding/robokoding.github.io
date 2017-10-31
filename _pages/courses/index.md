---
layout: landing
title: Courses
tagline: Applied learning experience
description: We carry out pre-designed or custom-made courses to teach children STEM education, maker culture and creative problem solving, through an interdisciplinary and applied approach.
image: assets/images/workshop.jpg
permalink: "/courses/"
---


<!-- Two -->
<section id="two" class="spotlights">
	{% for course in site.pages %}
  	{% if course.path contains "/courses/" %}
	{% unless course.path contains "index" %}
	<section>
		<a href="{{ course.permalink | absolute_url }}" class="image">
			<img src="{{ course.image | absolute_url }}" alt="thumbnail" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>{{ course.title }}</h3>
				</header>
				<p>{{ course.content | truncatewords: 30 }}</p>
				<ul class="actions">
					<li><a href="{{ course.permalink | absolute_url }}" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	{% endunless %}
	{% endif %}
	{% endfor %}
</section>
