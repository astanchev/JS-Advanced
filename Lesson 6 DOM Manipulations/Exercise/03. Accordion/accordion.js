function toggle() {
    const button = document.querySelector('.button');
    const extra = document.querySelector('#extra');
    
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
    extra.style.display = button.textContent === 'More' ? 'none' : 'block';
}