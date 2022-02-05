// const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.png",
// "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
// "10.jpg", "11.png", "12.jpeg",];
const images = ["0.jpeg", "1.jpeg", "2.jpeg",];

const selected = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${selected}`;

document.body.appendChild(bgImage);