// Get filter controls
const categoryFilter = document.getElementById("category");
const durationFilter = document.getElementById("duration");
const difficultyFilter = document.getElementById("difficulty");
const resetButton = document.getElementById("reset-filters");

// Get all activity cards
const cards = document.querySelectorAll(".card");

// Filter function
function filterActivities() {

    const selectedCategory = categoryFilter.value;
    const selectedDuration = durationFilter.value;
    const selectedDifficulty = difficultyFilter.value;

    cards.forEach(card => {

        // Always show cards that don't have filter data
        if (
            !card.dataset.category ||
            !card.dataset.duration ||
            !card.dataset.difficulty
        ) {
            card.style.display = "flex";
            return;
        }

        const cardCategory = card.dataset.category;
        const cardDuration = card.dataset.duration;
        const cardDifficulty = card.dataset.difficulty;

        const categoryMatch =
            selectedCategory === "all" ||
            selectedCategory === cardCategory;

        const durationMatch =
            selectedDuration === "all" ||
            selectedDuration === cardDuration;

        const difficultyMatch =
            selectedDifficulty === "all" ||
            selectedDifficulty === cardDifficulty;

        if (
            categoryMatch &&
            durationMatch &&
            difficultyMatch
        ) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

}

// Event listeners for filters
categoryFilter.addEventListener("change", filterActivities);
durationFilter.addEventListener("change", filterActivities);
difficultyFilter.addEventListener("change", filterActivities);

// Reset button
resetButton.addEventListener("click", () => {

    // Reset all dropdowns
    categoryFilter.value = "all";
    durationFilter.value = "all";
    difficultyFilter.value = "all";

    // Reapply filters (shows everything)
    filterActivities();

});

// Run on page load
filterActivities();