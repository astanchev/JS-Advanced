function validate() {
    const inputField = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gim;

    inputField.addEventListener('change', validateText);

    function validateText(e) {
        e.preventDefault();

            if (!inputField.value.match(pattern)) {
                inputField.classList.add('error');
            } else {
                inputField.classList.remove('error');
            }
    }
}