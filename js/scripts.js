function toggleDescription(projectId, button) {
    var description = document.getElementById(projectId);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        button.textContent = "Collapse";
    } else {
        description.style.display = "none";
        button.textContent = "Expand";
    }
}
