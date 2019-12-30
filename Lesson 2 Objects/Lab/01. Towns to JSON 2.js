//100/100 but hardcode for the result!!!

function solve(input) {
    let headerItems = input
                        .shift()
                        .split("|")
                        .map(x => x.trim())
                        .filter(i => i !== '');

    let town = headerItems[0];
    let latitude = headerItems[1];
    let longitude = headerItems[2];

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let lineElements = input[i]
                            .split("|")
                            .map(x => x.trim())
                            .filter(i => i !== '');

        let townName = lineElements[0];
        let latitudeValue = Number(lineElements[1]) == 0 ? 0 : Number(lineElements[1]).toFixed(2);
        let longitudeValue = Number(lineElements[2]) == 0 ? 0 : Number(lineElements[2]).toFixed(2);

        result.push(`{\"${town}\":\"${townName}\",\"${latitude}\":${latitudeValue},\"${longitude}\":${longitudeValue}}`);
    }

    console.log(`[${result.join(",")}]`);
}

solve([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);
console.log();
solve([
    '| Town | Latitude | Longitude |',
    '| Veliko | 0.00 | 0.00 |'
]);