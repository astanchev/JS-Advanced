function toggle() {
    const hiddenText = document.getElementById('extra');
    const btn = document.getElementsByClassName('button')[0];

    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        hiddenText.style.display = 'block';
    } else {
        btn.textContent = 'More';
        hiddenText.style.display = 'none';
    }
}