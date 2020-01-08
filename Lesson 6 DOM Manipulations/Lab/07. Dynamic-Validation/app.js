function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', checkEmail);

    function checkEmail(e) {
        if (
            e.target.value.match(/^[a-z]+@[a-z]+\.[a-z]+$/) === null) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    }
}