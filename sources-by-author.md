---
layout: default
title: Sources By Author
---

<h1>{{ page.title }}</h1>

<div id="search-container">
  <input
    type="text"
    id="search-input"
    placeholder="Type your search here..."
    onkeyup="filterSources()"
  />
</div>

<div class="table" id="sources-container">
  {% assign sorted_sources = site.data.sources | sort: "Author" %}
  {% for source in sorted_sources %}
    <div class="table-row">
      <!-- Left Column: Title, Author, Year -->
      <div class="table-cell left-column">
<p><strong>Title:</strong>
{% for source in site.data.sources %}
<ul class="inline-list">
  {% for source in sorted_sources %}
    <li><a href="{{ site.baseurl }}/sources/{{ source.Key }}.html">{{ source.Key }}</a></li>
  {% endfor %}
</ul>
{% endfor %}</p>
<p><strong>Title:</strong>
{% for source in site.data.sources %}
<ul class="inline-list">
  {% for source in site.data.sources %}
    <li>{{ source.Title }}</li>
  {% endfor %}
</ul>
{% endfor %}</p>
      </div>

      <!-- Right Column: Notes or Keywords -->
      <div class="table-cell right-column">
        <p><strong>Keywords:</strong> {{ source.Keywords }}</p>
      </div>
    </div>
  {% endfor %}
</div>

