// Scroll functions

window.addEventListener("scroll", ()=> {

    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
});

// Click functions

window.addEventListener('click', function(event) {
  console.log("clicked")

  const hamburger = document.getElementById('hamburger');
  const sideMenu = document.querySelector(".side-menu__list");


  if (event.target != hamburger && event.target != sideMenu) {
    console.log("side menu off")
    sideMenu.style.display = "none";
  } else {
    console.log("side menu off")
    sideMenu.style.display = "block";
  }

  console.log(event.target)
});

// effects

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  let text = "";
  var dataText = [ "Riihimäki.", "Full Service.", "Student & Graphic Designer", "Looking for Internship"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".code-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

