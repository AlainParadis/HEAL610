function filterSources() {
  // Get the search input value
  const query = document.getElementById("search-input").value.toLowerCase();

  // Get all rows in the table
  const rows = document.querySelectorAll(".table-row");

  // Loop through each row and check if it matches the query
  rows.forEach((row) => {
    const leftColumnText = row.querySelector(".left-column").innerText.toLowerCase();
    const rightColumnText = row.querySelector(".right-column").innerText.toLowerCase();

    // Show or hide the row based on whether it contains the query
    if (leftColumnText.includes(query) || rightColumnText.includes(query)) {
      row.style.display = "flex"; // Show matching rows
    } else {
      row.style.display = "none"; // Hide non-matching rows
    }
  });
}
