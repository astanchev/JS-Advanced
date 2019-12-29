function solve(steps, footStep, speed) {
    let distance = steps * footStep;
    let breakTime = parseInt(distance / 500) * 60;
    let speedInM = speed * 1000 / 3600;
    let time = Math.ceil(distance / speedInM + breakTime);
    
    let seconds = time % 60;
    let minutes = (time - seconds) / 60;
    let hours = (time - seconds) % 60;

    console.log(`${hours.toString().padStart(2, '0')}` +
        `:${minutes.toString().padStart(2, '0')}` +
        `:${seconds.toString().padStart(2, '0')}`);
}

solve(4000, 0.60, 5);