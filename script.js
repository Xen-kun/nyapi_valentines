function showMemories() {
    // alert("Yay! Let's go to our flip book.");
    location.href = "flipbook.html";
}

function sayNo() {
    alert("Oops! You cannot say No, I'm clever right?");
}



// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 7;  // Updated to include all 7 pages
let maxLocation = numOfPapers + 1;  // Now it should be 8 (to account for 1-based index)

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                closeBook(false);  // Close book after the last page
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 7;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                break;
            case 8:
                openBook();
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     let book = document.querySelector(".book");
//     let pages = document.querySelectorAll(".page");
//     let totalPages = pages.length;
//     let flippedCount = 0;

//     function flipPage(element, index) {
//         element.classList.toggle("flipped");
//         flippedCount = document.querySelectorAll(".page.flipped").length;

//         if (element.classList.contains("flipped")) {
//             element.style.zIndex = totalPages + index; // Move flipped pages to left; right pages z-index is on top
    
//         } else {
//             element.style.zIndex = totalPages - index; // Move flipped pages to right; left pages z-index is on top
//         }

//         // Adjust book centering
//         if (flippedCount === 0) {
//             book.style.transform = "translateX(0)"; // First page (Front cover) centered
//         } else if (flippedCount === totalPages) {
//             book.style.transform = "translateX(100%)"; // Last page (Back cover) centered
//         } else {
//             book.style.transform = "translateX(50%)"; // Transitioned to Center when opened
//         }
//     }

//     pages.forEach((page, index) => {
//         page.addEventListener("click", function () {
//             flipPage(this, index);
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const fireworksContainer = document.querySelector(".fireworks-container");

    // Function to create a heart explosion
    function createHeart() {
        for (let i = 0; i < 5; i++) { // Increase the number of hearts per call
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
            }, 2000); // Hearts last longer
        }
    }

    // Function to create a firework explosion
    function createFirework() {
        const fireworkX = Math.random() * window.innerWidth;
        const fireworkY = Math.random() * (window.innerHeight / 2);

        for (let i = 0; i < 25; i++) {
            const spark = document.createElement("div");
            spark.classList.add("spark");

            // Random movement directions
            const angle = (Math.PI * 2 * i) / 25;
            const distance = Math.random() * 150 + 50;

            spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
            spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
            spark.style.left = `${fireworkX}px`;
            spark.style.top = `${fireworkY}px`;
            spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`; // Random colors

            fireworksContainer.appendChild(spark);

            setTimeout(() => {
                spark.style.transform = "scale(2)"; // Doubles in size
                spark.style.opacity = "0"; // Starts fading
            }, 1000); // Happens 2 seconds before full removal

            setTimeout(() => {
                spark.remove();
            }, 2000);
        }
    }

    // Generate hearts and fireworks continuously
    setInterval(createHeart, 120);
    setInterval(createFirework, 120);
});
