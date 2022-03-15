import { randomColor } from "./utils";

document.addEventListener('DOMContentLoaded', function() {
  const totalBoxes = document.querySelectorAll('div.color').length;
  let totalColored = 0;

  function bgChange(e) {

    if (!e.target.dataset.colored && e.target.classList.contains('color')) {
      const color = document.getElementById('color-picker').value;
      
      if(color === "") {
        e.target.style.backgroundColor = randomColor();
        e.target.dataset.colored = true;
      } else {
        e.target.style.backgroundColor = color;
        e.target.dataset.colored = true;
        document.getElementById('color-picker').value = "";       
      }
      totalColored++;
      e.target.textContent = e.target.style.backgroundColor;

      if (document.querySelectorAll('[data-colored]').length
        === document.querySelectorAll('.color').length) {
          setTimeout(() => {
            alert("all boxes colored!");  
          }, 0);
        }
      }
  }

  document.getElementById('boxes').addEventListener('click', bgChange);
});