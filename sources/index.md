---
layout: default
title: Sources
---
<h1>All Sources</h1>
<div id="search-container">
  <input
    type="text"
    id="search-input"
    placeholder="Type your search here..."
    onkeyup="filterSources()"
  />
</div>
<ul>
  {% assign sorted_pages = site.pages | sort: "Year" %}
  {% for page in sorted_pages %}
    {% if page.path contains 'sources/' and page.path != '/sources/index.html' %}
      <li><a href="{{ page.url }}">{{page.Key}}</a>, {{ page["Publication Year"] }}, {{ page.Title | truncate: 100 }}</li>
    {% endif %}
  {% endfor %}
</ul>

