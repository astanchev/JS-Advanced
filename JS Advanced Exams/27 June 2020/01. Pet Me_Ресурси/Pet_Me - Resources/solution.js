function solve() {
    const inputName = document.querySelector('input[placeholder="Name"]');
    const inputAge = document.querySelector('input[placeholder="Age"]');
    const inputKind = document.querySelector('input[placeholder="Kind"]');
    const inputOwner = document.querySelector('input[placeholder="Current Owner"]');

    const ulAdoption = document.querySelector('#adoption > ul');
    const ulAdopted = document.querySelector('#adopted > ul');

    const btnAdd = document.querySelector('div#container > button');

    btnAdd.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();

        const name = inputName.value;
        const age = Number(inputAge.value);
        const kind = inputKind.value;
        const owner = inputOwner.value;

        if (name === '' || isNaN(age) || kind === '' || owner === '') {
            return;
        }

        const btnContact = createElement('button', 'Contact with owner');
        const btnLike = createElement('button', 'Yes! I take it!');
        const btnChecked = createElement('button', 'Checked');


        const divContact = createElement('div', [
            createElement('input', '', {placeholder: 'Enter your names'}),
            btnLike
        ]);

        
        btnContact.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.appendChild(divContact);
            e.target.remove();
        });       

        const liToAdd = createElement('li', [
            createElement('p', [
                createElement('strong', `${name}`),
                ' is a ',
                createElement('strong', `${age}`),
                ' year old ',
                createElement('strong', `${kind}`)
            ]),
            createElement('span', `Owner: ${owner}`),
            btnContact
        ]);

        btnLike.addEventListener('click', (e) => {
            e.preventDefault();
            const inputNewOwner = document.querySelector('input[placeholder="Enter your names"]');

            if (inputNewOwner.value === '') {
                return;
            }

            const detailsPart = e.target.parentElement.parentElement.getElementsByTagName('p')[0];

            const newLiToAdd = createElement('li', [
                detailsPart,
                createElement('span', `New Owner: ${inputNewOwner.value}`),
                btnChecked
            ]);

            ulAdopted.appendChild(newLiToAdd);
            e.target.parentElement.parentElement.remove();
        });

        btnChecked.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
        });

        clearInputs();
        ulAdoption.appendChild(liToAdd);
    }


    function clearInputs() {
        inputName.value = '';
        inputAge.value = '';
        inputKind.value = '';
        inputOwner.value = '';
    }

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