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