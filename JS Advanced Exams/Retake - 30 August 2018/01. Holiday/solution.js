function addDestination() {
    const summaryBox = {
        summer: document.getElementById('summer'),
        autumn: document.getElementById('autumn'),
        winter: document.getElementById('winter'),
        spring: document.getElementById('spring')
    };

    const destinationBody = document.getElementById('destinationsList');

    const inputCity = document.querySelectorAll('input.inputData')[0];
    const inputCountry = document.querySelectorAll('input.inputData')[1];
    const seasonSelect = document.getElementById('seasons');

    if (inputCity.value === '' || inputCountry.value === '') {
        return;
    }

    const city = inputCity.value;
    const country = inputCountry.value;
    const season = seasonSelect.options[seasonSelect.selectedIndex].value;
    const seasonName = seasonSelect.options[seasonSelect.selectedIndex].text;

    const trToAdd = createElement('tr', [
        createElement('td', `${city}, ${country}`),
        createElement('td', seasonName)
    ]);

    destinationBody.appendChild(trToAdd);
    inputCity.value = '';
    inputCountry.value = '';

    summaryBox[season].value++;
    
    function createElement(type, content, attributes) {
        const result = document.createElement(type);
    
        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }
    
        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }
    
        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
    
            result.appendChild(node);
        }
    
        return result;
    }
}