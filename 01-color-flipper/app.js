const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  console.log(document.body);

  // get random bumber between 0 - 3
  const randomNumber = getRandomBumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomBumber() {
  return Math.floor(Math.random() * colors.length);
}
