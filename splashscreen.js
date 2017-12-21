var myClick = document.querySelector('.loadingscreen')
var introAudio = document.getElementById("myAudio")

introAudio.play();

myClick.addEventListener('click', function(){

  myClick.parentNode.removeChild(myClick);
  waitStage();
})
