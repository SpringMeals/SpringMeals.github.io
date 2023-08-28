const slides = document.querySelectorAll(".slide-item");

function startRotation(element) {
    const image = element.querySelector(".slide-item");
    image.style.transition = "transform 0.3s ease";
    image.style.transform = "rotateY(180deg)";
}

function stopRotation(element) {
    const image = element.querySelector(".slide-item");
    image.style.transition = "transform 0.3s ease"; 
    image.style.transform = "rotateY(0deg)";
}

function redirectToInstagram(username) {
    const instagramURL = `https://www.instagram.com/${username}/`;
    window.open(instagramURL, "_blank");
}

