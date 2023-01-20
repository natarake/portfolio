let height = prompt(
  "Please enter a number between 16 and 20 to make a xmasTree"
);
let stand = height / 4;
const star = " |*| ";
const baseStand = "||||||||||||";

for (let i = 0; i < height; i++) {
  document.write(`<p class="xmasTree"> ${star.repeat(i + 1)} </p>`);
}
for (let a = 0; a < stand; a++) {
  document.write(`<p class="xmasTree"> ${baseStand.repeat(a + 1)} </p>`);
}

const colorGenTree = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // console.log(`rgb(${red},${green},${blue})`);
  document.getElementById(
    "rgbValuesTree"
  ).innerHTML = `Xmas Tree = rgb(${red},${green},${blue})`;
  let xmasTree = document.querySelectorAll(".xmasTree");
  let index = 0;
  let length = xmasTree.length;

  for (index = 0; index < length; index++) {
    xmasTree[index].style.color = `rgb(${red},${green},${blue})`;
  }
};

const colorGenText = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  document.getElementById(
    "rgbValuesText"
  ).innerHTML = `Merry Xmas = rgb(${red},${green},${blue})`;

  let flashText = document.getElementById("flashText");
  flashText.style.color = `rgb(${red},${green},${blue})`;
};

const rgbValuesTextColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  let rgbValuesTextTextColor = document.getElementById("rgbValuesText");
  rgbValuesTextTextColor.style.color = `rgb(${red},${green},${blue})`;
};

const rgbValuesTreeColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  let rgbValuesTreeTextColor = document.getElementById("rgbValuesTree");
  rgbValuesTreeTextColor.style.color = `rgb(${red},${green},${blue})`;
};

let treeInterval = prompt("Input a number divisible by 100 for Tree Interval");
let textInterval = prompt("Input a number divisible by 100 for Text Interval");
const startInterval = () => {
  startColor = setInterval(colorGenTree, `${treeInterval}`);
  startColor2 = setInterval(colorGenText, `${textInterval}`);
  startColor3 = setInterval(rgbValuesTextColor, `${textInterval}`);
  startColor4 = setInterval(rgbValuesTreeColor, `${textInterval}`);
  document.body.style.backgroundColor = "#2b3036";
  const starPosition = () => {
    if (height >= 1) {
      let starPos = document.getElementById("star");
      starPos.style.top = "80px";
    }
  };
  starPosition();
};

const stopInterval = () => {
  clearInterval(startColor);
  clearInterval(startColor2);
  clearInterval(startColor3);
  clearInterval(startColor4);
};

// setTimeout(function stopInterval() {
//   clearInterval(startColor);
//   clearInterval(startColor2);
// }, 5000)

const resetFlash = () => {
  window.location.reload();
};

// how to put limit characters in prompt
