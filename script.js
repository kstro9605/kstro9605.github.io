// script.js

// Add any interactivity or functionality here
document.addEventListener("DOMContentLoaded", function() {
    const navPanes = document.querySelectorAll(".nav-pane");
    const views = document.querySelectorAll(".view");

    navPanes.forEach((pane, index) => {
        pane.addEventListener("click", () => {
            // Hide all views
            views.forEach(view => (view.style.display = "none"));

            // Show the selected view
            views[index].style.display = "block";
        });
    });

    // Show the first view by default
    views[0].style.display = "block";
});