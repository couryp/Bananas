var myClick = document.querySelector('.loadingscreen')
var introAudio = 

myClick.addEventListener('click', function(){

  myClick.parentNode.removeChild(myClick);
  waitStage();
})
