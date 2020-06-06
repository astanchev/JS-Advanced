function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));

    for (const profile of profiles) {
        profile.addEventListener('click', process);
    }

    function process(event) {
        const lockedRadio = this.children[2];
        const hiddenData = this.children[9];
        const clickedElement = event.target;

        if (lockedRadio.checked) {
            return;
        }

        if (clickedElement.textContent === 'Hide it') {
            hiddenData.style.display = "none";
            clickedElement.textContent = "Show more";

        } else if (clickedElement.textContent === 'Show more') {
            hiddenData.style.display = "block";
            clickedElement.textContent = "Hide it";
        }
    }
}

function lockedProfile2() {
    [...document.querySelectorAll('button')].forEach(b => b.addEventListener('click', showInfo));

    function showInfo(e) {
        e.preventDefault();

        const hiddenText = e.target.parentElement.querySelector('[id$=HiddenFields]');
        const lock = e.target.parentElement.querySelector('input[value="lock"]');
        const unlock = e.target.parentElement.querySelector('input[value="unlock"]');

        if (lock.checked === true) {
            return;
        }

        if (e.target.textContent === 'Hide it') {
            hiddenText.style.display = 'none';
            e.target.textContent = 'Show more';
        } else {
            hiddenText.style.display = 'block';
            e.target.textContent = 'Hide it';
        }
    }
}