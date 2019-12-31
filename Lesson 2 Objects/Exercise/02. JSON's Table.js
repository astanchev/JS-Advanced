function solve(input) {
    function escapeWord(word) { 
        return word
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
    }

    let result = "";

    result += "<table>\n";

    for (const line of input) {
        let json = JSON.parse(line);

        result += "\t<tr>\n";
        result += `\t\t<td>${escapeWord(json.name)}</td>\n`;
        result += `\t\t<td>${escapeWord(json.position)}</td>\n`;
        result += `\t\t<td>${json.salary}</td>\n`;
        result += "\t</tr>\n";
    }

    result += "</table>";

    console.log(result);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]);