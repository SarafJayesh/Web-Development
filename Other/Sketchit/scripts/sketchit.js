height = $(window).height();
$container = $('<div id="container"></div>');

$(document).ready(function() {
  size = prompt("What size of the grid would you like?");
  makeGrid(size);
  $('.grid').hover(function () { $(this).addClass('white');});
});

function makeGrid(size) {
  $('body').append(function() {
    for(i=1; i<=size*size; i++)
    {
      $container.append($('<div class="grid"></div>'));
    }
    return $container;
  });
  setSize(size);
}

function setSize(size) {
  $container.height(height).width(height);
  $('.grid').height(height/size).width(height/size);
}
