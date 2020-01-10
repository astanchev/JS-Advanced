function solve() {
    let string = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let p = document.createElement('p');
    result.textContent = '';

    let locations = [];

    let locationPattern = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let validLocation = locationPattern.exec(text);

    while (validLocation !== null) {
        let direction = validLocation[1].charAt(0).toUpperCase();
        let wholePart = validLocation[2];
        let decimalPart = validLocation[3];

        locations.push(`${wholePart}.${decimalPart} ${direction}`);

        validLocation = locationPattern.exec(text);
    }

    let lastN = locations.reverse().find((x) => x.includes('N'));
    let north = p.cloneNode();
    north.textContent = lastN;
    result.appendChild(north);

    let lastE = locations.reverse().find((x) => x.includes('E'));
    let east = p.cloneNode();
    east.textContent = lastE;
    result.appendChild(east);

    let messagePatern = new RegExp(`(?:${string})(.+)(?:${string})`);
    let message = text.match(messagePatern)[1];
    let pMessage = p.cloneNode();
    pMessage.textContent = `Message: ${message}`;
    result.appendChild(pMessage);
}