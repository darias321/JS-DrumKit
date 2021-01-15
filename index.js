window.addEventListener("keydown", function (e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//this will stop function all together when a key that isn't available is hit. 
if(!audio) return; 
  });