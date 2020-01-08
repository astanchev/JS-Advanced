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