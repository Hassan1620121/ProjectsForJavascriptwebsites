const socket = io('https://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");;

const name = prompt("enter your name to join");
socket.emit('new-user-joined', name);