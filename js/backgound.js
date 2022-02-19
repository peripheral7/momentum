
const images = [];
for (i = 0; i < 7; i++) {
  let counted = i;
  images.push(` (${counted+1}).jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${chosenImage}`;
console.log(backgroundImage);

document.body.appendChild(backgroundImage);
