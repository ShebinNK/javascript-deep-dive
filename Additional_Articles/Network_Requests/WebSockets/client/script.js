// Connect to WebSocket server
let socket = new WebSocket("ws://localhost:8080");

// Send message when form is submitted
document.forms.publish.onsubmit = function() {
  socket.send(this.message.value);
  this.message.value = ""; // clear input after sending
  return false; // prevent page reload
};

// Display incoming messages
socket.onmessage = function(event) {
  let div = document.createElement('div');
  div.textContent = event.data;
  document.getElementById('messages').prepend(div);
};
