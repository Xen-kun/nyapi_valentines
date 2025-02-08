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



document.addEventListener("DOMContentLoaded", function () {
    const fireworksContainer = document.querySelector(".fireworks-container");

    // Function to create a heart explosion
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.fontSize = `${Math.random() * 30 + 10}px`;

        fireworksContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }

    // Function to create a firework explosion
    function createFirework() {
        const fireworkX = Math.random() * window.innerWidth;
        const fireworkY = Math.random() * (window.innerHeight / 2);

        for (let i = 0; i < 20; i++) {
            const spark = document.createElement("div");
            spark.classList.add("spark");

            // Random movement directions
            const angle = (Math.PI * 2 * i) / 20;
            const distance = Math.random() * 100 + 50;

            spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
            spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
            spark.style.left = `${fireworkX}px`;
            spark.style.top = `${fireworkY}px`;
            spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`; // Random colors

            fireworksContainer.appendChild(spark);

            setTimeout(() => {
                spark.remove();
            }, 1000);
        }
    }

    // Generate hearts and fireworks continuously
    setInterval(createHeart, 300);
    setInterval(createFirework, 1000);
});
