function focus() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    const sections = Array.from(document.querySelectorAll('body > div div'));
    inputs.forEach(s => s.addEventListener('focus', setFocus));

    function setFocus() {
        this.parentElement.setAttribute('class', 'focused');
        //console.log('setFocus focus ' + this.parentElement.textContent)
        this.addEventListener('blur', removeClass);
        //console.log('setFocus blur ' + this.parentElement.textContent)
    }

    function removeClass() {
        //console.log('removeClass in ' + this.parentElement.textContent)
        this.parentElement.removeAttribute('class');
        //console.log('removeClass out ' + this.parentElement.textContent)
    }
}