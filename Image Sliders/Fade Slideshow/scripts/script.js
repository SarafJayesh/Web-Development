var slideInt=1;
var slideNext=2;
count=$('#slider>img').length;

$(document).ready(function() {
  $('#1').fadeIn('300');
  slideStart();
});

function slideStart(){
  loop = setInterval(function(){
    if(slideNext>count)
    {
      slideInt=1;
      slideNext=1;
    }
    $('#slider>img').fadeOut('300');
    $('#'+slideNext).fadeIn('300');
    slideInt = slideNext;
    slideNext++;
  },3000);
}

function prev() {
  newSlide = slideInt-1;
  showSlide(newSlide);
}

function next() {
    newSlide = slideInt + 1;
    showSlide(newSlide);
}

function stopLoop() {
  window.clearInterval(loop);
}

function showSlide(Id){
  stopLoop();
  if(Id>count)
  {Id=1;}
  else if(Id<1)
  {Id=count;}

  $('#slider>img').fadeOut('300');
  $('#'+Id).fadeIn('300');
  slideInt = Id;
  slideNext = Id + 1;

  slideStart();
}

$('#slider>img').hover(function() {
  stopLoop();
},
function(){
  slideStart();
});
