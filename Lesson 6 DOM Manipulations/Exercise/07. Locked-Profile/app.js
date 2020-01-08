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