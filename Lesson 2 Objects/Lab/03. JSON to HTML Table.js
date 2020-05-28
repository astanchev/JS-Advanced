function fromJSONToHTMLTable(input) {

    let sanitizeInput = str => str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    function filterWord(w) {
        return !isNaN(w) ?
            w :
            sanitizeInput(w);
    }

    let ident = '   ';
    let table = `<table>\n${ident}<tr>`;
    let parsedObjects = JSON.parse(input);
    let keys =Array.from(new Set(parsedObjects.map(i => Object.keys(i)).flat()));

    // Set Headers
    for (const key of keys) {
        let thContent = filterWord(key);

        table += `<th>${thContent}</th>`;
    }

    // Set Table Data
    for (let i = 0; i < parsedObjects.length; i++) {
        table += `</tr>\n${ident}<tr>`;

        for (const key of keys) {
            let tdContent = filterWord(parsedObjects[i][key]);
            table += `<td>${tdContent}</td>`;
        }
    }

    table += '</tr>\n</table>';
    return table;
}

console.log(fromJSONToHTMLTable(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`));