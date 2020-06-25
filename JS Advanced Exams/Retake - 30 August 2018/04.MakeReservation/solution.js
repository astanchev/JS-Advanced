// 75/100

function makeReservation(containerId) {

    const inputFullName = document.getElementById('fullName');
    const inputEmail = document.getElementById('email');
    const inputPhoneNumber = document.getElementById('phoneNumber');
    const inputAddress = document.getElementById('address');
    const inputPostalCode = document.getElementById('postalCode');

    const infoPreview = document.getElementById('infoPreview');
    const container = document.querySelector(`div${containerId}`);
    const wrapper = document.getElementById('wrapper');


    const btnSubmit = document.getElementById('submit');
    const btnEdit = document.getElementById('edit');
    const btnContinue = document.getElementById('continue');

    const paymentMethods = {
        creditCard: showCreditCardInfo(),
        bankTransfer: showBankTransferInfo()
    };

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        if (inputFullName.value === '' || inputEmail.value === '') {
            return;
        }

        e.target.disabled = true;
        btnEdit.disabled = false;
        btnContinue.disabled = false;

        infoPreview.appendChild(createElement('li', 'Name: ' + inputFullName.value));
        infoPreview.appendChild(createElement('li', 'E-mail: ' + inputEmail.value));
        infoPreview.appendChild(createElement('li', 'Phone: ' + inputPhoneNumber.value));
        infoPreview.appendChild(createElement('li', 'Address: ' + inputAddress.value));
        infoPreview.appendChild(createElement('li', 'Postal Code: ' + inputPostalCode.value));

        inputFullName.value = '';
        inputEmail.value = '';
        inputPhoneNumber.value = '';
        inputAddress.value = '';
        inputPostalCode.value = '';
    });

    btnEdit.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.disabled === true) {
            return;
        }

        e.target.disabled = true;
        btnContinue.disabled = true;
        btnSubmit.disabled = false;

        const ulParts = infoPreview.children;

        inputFullName.value = ulParts[0].textContent.split(': ')[1];
        inputEmail.value = ulParts[1].textContent.split(': ')[1];
        inputPhoneNumber.value = ulParts[2].textContent.split(': ')[1];
        inputAddress.value = ulParts[3].textContent.split(': ')[1];
        inputPostalCode.value = ulParts[4].textContent.split(': ')[1];

        infoPreview.innerHTML = '';
    });

    btnContinue.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.disabled === true) {
            return;
        }

        e.target.disabled = true;
        btnEdit.disabled = true;
        btnSubmit.disabled = true;

        container.appendChild(createElement('h2', 'Payment details'));
        const defaultOption = createElement('option', 'Choose');
        defaultOption.setAttribute('selected', "");
        defaultOption.setAttribute('disabled', "");
        defaultOption.setAttribute('hidden', "");

        container.appendChild(createElement('select', [
            defaultOption,
            createElement('option', 'Credit Card', {value: 'creditCard'}),
            createElement('option', 'Bank Transfer', {value: 'bankTransfer'})
        ], {id: 'paymentOptions', className: 'custom-select'}));        
        container.appendChild(createElement('div', '', {id: 'extraDetails'}));

        const select = document.getElementById('paymentOptions');
        select.addEventListener('change', (e) => {

            const selectedOption = e.target.options[e.target.selectedIndex].value;

            const extraDetails = document.getElementById('extraDetails');
            extraDetails.innerHTML = '';

            const btnCheckOut = createElement('button', 'Check Out', {id: 'checkOut'});
            btnCheckOut.addEventListener('click', (e) => {
                e.preventDefault();
                wrapper.innerHTML = '';
                wrapper.appendChild(createElement('h4', 'Thank you for your reservation!'));
            });

            const elementsToAdd = paymentMethods[selectedOption];
            elementsToAdd.forEach(e => { 
                if (e !== '') {
                    extraDetails.appendChild(e);                    
                }
            });
            extraDetails.appendChild(btnCheckOut);
        });
    });

    function showCreditCardInfo() {
        return [
            createElement('div', ['Card Number', createElement('input', '')], {className: 'inputLabel'}),
            document.createElement('br'),
            createElement('div', ['Expiration Date', createElement('input', '')], {className: 'inputLabel'}),
            document.createElement('br'),
            createElement('div', ['Security Numbers', createElement('input', '')], {className: 'inputLabel'}),
            document.createElement('br')
        ];
    }

    function showBankTransferInfo() {
        return [createElement('p', [
            'You have 48 hours to transfer the amount to:',
            document.createElement('br'),
            'IBAN: GR96 0810 0010 0000 0123 4567 890'
        ])];
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