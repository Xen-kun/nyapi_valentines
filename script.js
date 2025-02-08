function showMemories() {
    // alert("Yay! Let's go to our flip book.");
    location.href = "flipbook.html";
}

function sayNo() {
    alert("Oops! You cannot say No, I'm clever right?");
}

document.addEventListener("DOMContentLoaded", function () {
    let book = document.querySelector(".book");
    let pages = document.querySelectorAll(".page");
    let totalPages = pages.length;
    let flippedCount = 0;

    function flipPage(element, index) {
        element.classList.toggle("flipped");
        flippedCount = document.querySelectorAll(".page.flipped").length;

        if (element.classList.contains("flipped")) {
            element.style.zIndex = 1; // Move flipped pages to the back
        } else {
            element.style.zIndex = totalPages - index; // Restore original order
        }

        // Adjust book centering
        if (flippedCount === 0) {
            book.style.transform = "translateX(0)"; // First page (Front cover) centered
        } else if (flippedCount === totalPages) {
            book.style.transform = "translateX(100%)"; // Last page (Back cover) centered
        } else {
            book.style.transform = "translateX(50%)"; // In transition state
        }
    }

    pages.forEach((page, index) => {
        page.addEventListener("click", function () {
            flipPage(this, index);
        });
    });
});
