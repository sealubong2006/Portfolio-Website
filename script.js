/*
 typing text animation for hero section
 This script will type out the text in the hero section h1 element
 with a typing effect when the page loads.
 It will also ensure the text is cleared before typing starts. 
 */

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".hero h1");
    const text = "Hello, I'm Seal Udokang.";
    var index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }

    typeText();
});

//  Contact form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
});

// Scoll based amination
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
