function showMemories() {
    alert("Yay! Let's go to our flip book.");
    window.location.href = "flipbook.html";
}

function sayNo() {
    alert("Aww! Maybe next time? 💔");
}

document.addEventListener("DOMContentLoaded", function () {
    let book = document.querySelector(".book");
    let pages = document.querySelectorAll(".page");
    let flippedCount = 0;

    function flipPage(element) {
        element.classList.toggle("flipped");
        flippedCount = document.querySelectorAll(".page.flipped").length;
        
        // Adjust book position when fully opened
        if (flippedCount === pages.length) {
            book.style.transform = "translateX(0%)"; // Center the last page
        } else {
            book.style.transform = "translateX(-50%)"; // Keep book centered
        }
    }

    pages.forEach(page => {
        page.addEventListener("click", function () {
            flipPage(this);
        });
    });
});
