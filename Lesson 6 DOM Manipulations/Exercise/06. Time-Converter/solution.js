function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    document
        .getElementById('daysBtn')
        .addEventListener('click', () => {
            hours.value = days.value * 24;
            minutes.value = days.value * 60 * 24;
            seconds.value = days.value * 60 * 60 * 24;
        });

    document
        .getElementById('hoursBtn')
        .addEventListener('click', () => {
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = hours.value * 60 * 60;
        });

    document
        .getElementById('minutesBtn')
        .addEventListener('click', () => {
            days.value = minutes.value / 60 / 24;
            hours.value = minutes.value / 60;
            seconds.value = minutes.value * 60;
        });

    document
        .getElementById('secondsBtn')
        .addEventListener('click', () => {
            days.value = seconds.value / 60 / 60 / 24;
            hours.value = seconds.value / 60 / 60;
            minutes.value = seconds.value / 60;
        });
}

function attachEventsListeners2() {
    const convertBtns = [...document.querySelectorAll('input[value="Convert"]')];
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const conversions = {
        days: (x) => convertDays(x),
        hours: (x) => convertHours(x),
        minutes: (x) => convertMinutes(x),
        seconds: (x) => convertSeconds(x)
    };

    convertBtns.forEach(b => b.addEventListener('click', convert));

    function convert(e) {
        e.preventDefault();

        const valueToConvert = Number(e.target.previousElementSibling.value);

        if (isNaN(valueToConvert)) {
            e.target.previousElementSibling.value = '';
            return;
        }

        const typeOfInput = e.target.parentElement.firstElementChild.textContent.split(':')[0].toLowerCase();

        conversions[typeOfInput](valueToConvert);
    }

    function convertDays(x) {
        hours.value = x * 24;
        minutes.value = x * 60 * 24;
        seconds.value = x * 60 * 60 * 24;
    }

    function convertHours(x) {
        days.value = x / 24;
        minutes.value = x * 60;
        seconds.value = x * 60 * 60;
    }

    function convertMinutes(x) {
        days.value = x / 60 / 24;
        hours.value = x / 60;
        seconds.value = x * 60;
    }

    function convertSeconds(x) {
        days.value = x / 60 / 60 / 24;
        hours.value = x / 60 / 60;
        minutes.value = x / 60;
    }
}