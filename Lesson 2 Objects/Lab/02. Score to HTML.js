function solve(input) {
    let obj = JSON.parse(input);
    let nameOut = Object.keys(obj[0])[0];
    let scoreOut = Object.keys(obj[0])[1];

    let result = [];

    result.push("<table>");
    result.push(`  <tr><th>${nameOut}</th><th>${scoreOut}</th></tr>`);

    for (let i = 0; i < obj.length; i++) {
        const element = obj[i];

        let name = element.name
                            .replace(/&/gim, '&amp;')
                            .replace(/</gim, '&lt;')
                            .replace(/>/gim, '&gt;')
                            .replace(/"/gim, '&quot;')
                            .replace(/'/gim, '&#39;');
        let score = Number(element.score);

        result.push(`  <tr><td>${name}</td><td>${score}</td></tr>`);
    }

    result.push("</table>");

    console.log(result.join("\n"));
}

solve(['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]']);
console.log();
solve(['[{"name":"Pesho & Kiro", "score":479}, {"name":"Gosho, Maria & Viki", "score":205}]']);