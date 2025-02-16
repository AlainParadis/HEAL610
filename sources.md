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
        <p><strong>Key:</strong> <a href="{{ site.baseurl }}/sources/{{ source.Key }}.html">{{ source.Key }}</a></p>
        <p><strong>Title:</strong> {{ source.Title }}</p>
        <p><strong>Author:</strong> {{ source.Author }}</p>
        <p><strong>Year:</strong> {{ source["Publication Year"] }}</p>
        <p><strong>Tags:</strong> {{ source["Manual Tags"] }}</p>
      </div>
      
      <!-- Right Column: Notes or Keywords -->
      <div class="table-cell right-column">
        <p><strong>Notes:</strong> {{ source.Notes }}</p>
      </div>
    </div>
  {% endfor %}
</div>
