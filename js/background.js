const images = ["1.jpg", "2.jpg", "3.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${randomImg}`;

document.body.appendChild(bgImage);