function dart() {
    const dartBoard = document.getElementById('playBoard');
    const scoreBoardPoints = [...document.querySelectorAll('tbody tr td:last-child')]
                                        .map(e => Number(e.textContent.split(' ')[0]));

    const pointsHome = document.querySelector('#Home p:first-child');
    const nameHome = document.querySelector('#Home p:last-child');
    const pointsAway = document.querySelector('#Away p:first-child');
    const nameAway = document.querySelector('#Away p:last-child');
    const turnOn = document.querySelector('#turns p:first-child');
    const nextIs = document.querySelector('#turns p:last-child');

    const pointsFields ={
        Home: pointsHome,
        Away: pointsAway
    };

    const nameFields ={
        Home: nameHome,
        Away: nameAway
    };

    const pointLayers = {
        firstLayer: 0,
        secondLayer: 1,
        thirdLayer: 2,
        fourthLayer: 3,
        fifthLayer: 4,
        sixthLayer: 5,
    };

    let currentPlayer = 'Home';
    let isGame = true;

    dartBoard.addEventListener('click', countPoints);

    function countPoints(e) {
        e.preventDefault();

        if (isGame === false) {
            return;
        }

        const pointsToAdd = scoreBoardPoints[pointLayers[e.target.id]];
        pointsFields[currentPlayer].textContent = Number(pointsFields[currentPlayer].textContent) + pointsToAdd;
        const otherPlayer = Array.from(Object.keys(nameFields)).find(k => k !== currentPlayer);

        if (Number(pointsFields[currentPlayer].textContent) >= 100) {
            nameFields[currentPlayer].style.background = 'green';            
            nameFields[otherPlayer].style.background = 'red';
            isGame = false;
            return;
        }

        switchPlayerTurns(currentPlayer, otherPlayer);

        currentPlayer = otherPlayer;
    }

    function switchPlayerTurns(currentPlayer, otherPlayer) {        
        const turnOnParts = turnOn.textContent.split(' ');
        turnOnParts.pop();
        turnOnParts.push(otherPlayer);
        turnOn.textContent = turnOnParts.join(' ');

        const nextIsParts = nextIs.textContent.split(' ');
        nextIsParts.pop();
        nextIsParts.push(currentPlayer);
        nextIs.textContent = nextIsParts.join(' ');

    }
}