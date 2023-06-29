const btn = document.querySelector("button");
const span = document.querySelector("span");

const getRandomColor = () => {
  let color = "#";
  const alphaNum = "abcdef0123456789";
  for (let i = 1; i <= 6; i++) {
    color +=
      alphaNum[Number.parseInt(Math.random() * 100, 10) % alphaNum.length];
  }
  return color;
};
const changeColor = (event) => {
  const color = getRandomColor();
  span.style.color = color;
  span.textContent = color.toUpperCase();
  document.body.style.backgroundColor = color;
};
btn.addEventListener("click", changeColor);
