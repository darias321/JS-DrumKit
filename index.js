function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    //this will stop function all together when a key that isn't available is hit. 
    if(!audio) return; 
    
    // allows key to be pressed over and over
    audio.currentTime = 0; 
    audio.play();  
    
    // starts animation when key is hit 
    key.classList.add("playing"); 
      };

// function for creating transition of keys anitmation when hit 
  function removeTransition(e){

// skip if it's not a transform
if(e.propertyName !== 'transform') return; 

//removes event so anitmation transitions 
this.classList.remove('playing');  
  }

  const keys = document.querySelectorAll(".key"); 
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener("keydown", playSound); 