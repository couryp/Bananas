var myClick = document.querySelector('.loadingscreen')
var introAudio = document.getElementById("myAudio")
var htmlGif = document.querySelector('#gif')

introAudio.play();


var clickCount = 0

myClick.addEventListener('click', function(){
  clickCount++

  if(clickCount === 1) {
    htmlGif.setAttribute('src', 'assets/infogif.gif')
  }
  if(clickCount === 2) {
    myClick.parentNode.removeChild(myClick);
    waitStage();
  }
})
