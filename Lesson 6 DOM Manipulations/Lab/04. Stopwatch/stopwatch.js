function stopwatch() {
    const time = document.getElementById('time');
    let counter = 0;
    let intervalId;
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);

    function startTimer(e) {
        e.preventDefault();
        time.textContent = '00:00';
        intervalId = setInterval(setIntervalFunction, 1000);

        //startBtn.setAttribute('disabled', 'true');
        //stopBtn.removeAttribute('disabled');
        //[startBtn.disabled, stopBtn.disabled] = [!startBtn.disabled, !stopBtn.disabled];
        stopBtn.disabled = !stopBtn.disabled;
        startBtn.disabled = !startBtn.disabled;
    }

    function stopTimer(e) {
        e.preventDefault();
        
        clearInterval(intervalId);       

        //stopBtn.setAttribute('disabled', 'true');
        //startBtn.removeAttribute('disabled');
        //[startBtn.disabled, stopBtn.disabled] = [!startBtn.disabled, !stopBtn.disabled];
        stopBtn.disabled = !stopBtn.disabled;
        startBtn.disabled = !startBtn.disabled;
    }

    function setIntervalFunction() {
        counter++;
        let seconds = Math.trunc(counter % 60).toString().padStart(2, '0');
        let minutes = Math.trunc(counter / 60).toString().padStart(2, '0');

        time.textContent = minutes + ':' + seconds;
    }
}