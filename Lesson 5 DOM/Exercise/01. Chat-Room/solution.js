function solve() {
   const chatMessages = document.getElementById('chat_messages');
   const div = document.createElement('div');
   const bttn = document.getElementById('send');

   bttn.addEventListener('click', addMessage);

   function addMessage() {
      const input = document.getElementById('chat_input');
      const newDiv = div.cloneNode();

      newDiv.setAttribute('class', 'message my-message');
      newDiv.textContent = input.value;
      chatMessages.appendChild(newDiv);
      input.value = '';
   }
}


