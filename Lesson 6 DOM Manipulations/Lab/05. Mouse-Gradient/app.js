function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('click', displayGradient);

    function calculatePercentage(x, y) {
        return Math.floor(x / y * 100);
    }

    function resultDivTemplateString(o) {
        return `${o}%`;
    }

    function displayGradient(e) {
        const clickPoint = e.offsetX;
        const elWidth = gradient.offsetWidth;
        const percent = calculatePercentage(clickPoint, elWidth);

        result.textContent = resultDivTemplateString(percent);
    }
}

function solve() {
    function getPercentage(x) {
      return Math.floor((x / gradientWidth) * 100);
    }
  
    function getResult(evt) {
      output.textContent = `${getPercentage(evt.offsetX)}%`;
    }
  
    let output = document.getElementById("result");
    let gradient = document.getElementById("gradient-box");
    //let gradientWidth = Number(window.getComputedStyle(gradient).width.replace("px", ""));
    let gradientWidth = 300;
  
    gradient.addEventListener("mousemove", getResult);
  }