---
title: HEAL610 All References
layout: default
---
<h2 class="center-text">All References With Abstracts</h2>

<div id="search-container">
    <input class="search-input" type="text" id="searchBox" placeholder="Search references..." onkeyup="filterBibliography()">
</div>

<script>
function filterBibliography() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let entries = document.querySelectorAll(".bibliography-entry");

    entries.forEach(entry => {
        let text = entry.querySelector(".entry-content").textContent.toLowerCase();
        let abstract = entry.querySelector(".abstract") ? entry.querySelector(".abstract").textContent.toLowerCase() : "";

        if (text.includes(input) || abstract.includes(input)) {
            entry.style.display = "block";
        } else {
            entry.style.display = "none";
        }
    });
}
</script>

<div class="bibliography-list">
    {% bibliography %}
</div>
