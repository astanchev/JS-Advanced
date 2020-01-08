function stopwatch() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const timer = document.getElementById('time');
    let currentTime = 0;

    startBtn.addEventListener('click', startTimer);

    stopBtn.addEventListener('click', stopTimer);

    function stopTimer() {
        clearInterval(currentTime);
        [startBtn.disabled, stopBtn.disabled] = [!startBtn.disabled, !stopBtn.disabled];
    }

    function startTimer() {
        timer.textContent = '00:00';
        let elapsedTime = 0;
        currentTime = setInterval(function () {
            elapsedTime++;
            const minutes = Math.trunc(elapsedTime / 60).toString().padStart(2, '0');
            const seconds = Math.trunc(elapsedTime % 60).toString().padStart(2, '0');
            timer.textContent = minutes + ':' + seconds;
        }, 1000);
        [startBtn.disabled, stopBtn.disabled] = [!startBtn.disabled, !stopBtn.disabled];
    }
}