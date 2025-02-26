---
title: HEAL610 All References
layout: default
---
<h2 class="center-text">All References With Abstracts</h2>

<div id="search-container">
    <input type="text" id="searchField" placeholder="Search references...">
</div>

<div class="bibliography-list">
    {% bibliography %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    let searchField = document.getElementById("searchField");
    if (!searchField) {
        console.error("Search field not found!");
        return;
    }

    searchField.addEventListener("keyup", filterBibliography);
});

function filterBibliography() {
    let input = document.getElementById("searchField").value.toLowerCase();
    let entries = document.querySelectorAll(".bibliography-entry");

    entries.forEach(entry => {
        let abstract = entry.nextElementSibling; // Get associated abstract div
        let text = entry.textContent.toLowerCase() + (abstract ? abstract.textContent.toLowerCase() : "");

        if (text.includes(input)) {
            entry.style.display = "";
            if (abstract) abstract.style.display = "";
        } else {
            entry.style.display = "none";
            if (abstract) abstract.style.display = "none";
        }
    });
}
</script>