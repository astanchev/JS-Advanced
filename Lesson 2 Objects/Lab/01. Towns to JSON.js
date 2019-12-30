//Don't work for test 2 80/100, couldn't make 34.5 to 34.50

function solve(input) {
    let keys = takeValues(input.shift());

    let resultObj = input
        .map(takeValues)
        .map(x => x.reduce(
            (result, values, i) => {
                result[keys[i]] = values;
                return result;
            }, {}));

    function takeValues(str) {
        return str
            .split('|')
            .map(x => x.trim())
            .filter(x => x !== '')
            .map(fixNumbers);
    }

    function fixNumbers(x){
        return !isNaN(x) ? 
                parseFloat((+x).toFixed(2)) : 
                x;
    }

    const outputJson = JSON.stringify(resultObj);
    console.log(outputJson);
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