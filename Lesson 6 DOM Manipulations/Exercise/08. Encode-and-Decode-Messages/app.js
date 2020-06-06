function encodeAndDecodeMessages() {
    const [btnEncode, btnDecode] = document.getElementsByTagName('button');
    const [textareaEncode, textareaDecode] = document.getElementsByTagName('textarea');

    btnEncode.addEventListener('click', encode);
    btnDecode.addEventListener('click', decode);

    function encode() {
        const decodedMessage = textareaEncode.value
            .split('')
            .map((char) => char.charCodeAt(0) + 1)
            .map((char) => String.fromCharCode(char))
            .join('');

        textareaDecode.value = decodedMessage;
        textareaEncode.value = '';
    }

    function decode() {
        const decodedMessage = textareaDecode.value
            .split('')
            .map((char) => char.charCodeAt(0) - 1)
            .map((char) => String.fromCharCode(char))
            .join('');

        textareaDecode.value = decodedMessage;
    }
}

function encodeAndDecodeMessages2() {
    const [messageToEncode, messageToDecode] = [...document.querySelectorAll('textarea')];
    const [btnToEncode, btnToDecode] = [...document.querySelectorAll('button')];
    let message = '';

    btnToEncode.addEventListener('click', encode);
    btnToDecode.addEventListener('click', decode);

    function encode(e) {
        e.preventDefault();

        if (messageToEncode.value === '') {
            return;
        }

        const text = messageToEncode.value;

        for (let i = 0; i < text.length; i++) {
            message += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        messageToDecode.value = message;
        messageToEncode.value = '';
        message = '';
    }

    function decode(e) {
        e.preventDefault();

        if (messageToDecode.value === '') {
            return;
        }

        const text = messageToDecode.value;

        for (let i = 0; i < text.length; i++) {
            message += String.fromCharCode(text.charCodeAt(i) - 1);
        }

        messageToDecode.value = message;
        message = '';
    }
}