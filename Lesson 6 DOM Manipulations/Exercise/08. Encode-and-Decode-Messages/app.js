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