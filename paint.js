var showSettings = true;
var canvas;
var context;
var textWidth = 12;
var textHeight = 20;
var drawingFont = '20px monospace';
var usedPositions = [];

document.addEventListener("DOMContentLoaded", function(event) { 
  canvas = document.querySelector('#paintMe');
  context = canvas.getContext('2d');
  var painting = false;
  var words= ['Lorem', 'ipsum', 'dolor', 'sit', 'ame', ', consectetur', 'adipiscing', 'eli', ', sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et',
    'dolore', 'magna', 'aliqu', '. Ut', 'enim', 'ad', 'minim', 'venia', ', quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
    'commodo', 'consequa', '. Duis', 'aute', 'rure', 'olor', 'n', 'eprehenderit', 'n', 'oluptate', 'elit', 'sse', 'illum', 'olore', 'eu', 'fugiat', 'nulla', 'pariatu',
    '. Excepteur','sint', 'occaecat', 'cupidatat', 'non', 'proiden', ', sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum.'];

  setSize();
  context.lineWidth = 2;
  context.font = drawingFont;

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function canDraw(newX, newY, length) {
    var x2 = newX + (textWidth*length);

    return !usedPositions.some(function(pos) {
      var r = pos.x;
      var r2 = pos.x + (textWidth*pos.length);

      return (newY === pos.y && ((newX <= r2) && (r <= x2)));
    });
  }

  function paint(x, y, word) {
    var offset = textWidth + (word.length * textWidth);
    var newX = (Math.round((x - textWidth) / offset) * offset);
    var newY = (Math.round((y - textHeight) / textHeight) * textHeight) + textHeight;

    if(canDraw(newX, newY, word.length)) {
      draw(word, newX, newY);
    }
  };

  function setSize() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
  }

  function mouseDown(e) {
    e.preventDefault();
    painting = true;
    paint(e.pageX, e.pageY, getWord());
  }
  canvas.addEventListener('mousedown', mouseDown);
  canvas.addEventListener('touchstart', mouseDown);

  canvas.addEventListener('mousemove', function(e) {
    e.preventDefault();
    if (painting) paint(e.pageX, e.pageY, getWord());
  });

  canvas.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var t = e.changedTouches[0]
    if (painting) paint(t.clientX, t.clientY, getWord());
  });

  function mouseUp(e) {
    e.preventDefault();
    painting = false;
  }
  canvas.addEventListener('mouseup', mouseUp);
  document.addEventListener('mouseleave', mouseUp);
  canvas.addEventListener('touchend', mouseUp);
});

function draw(word, paintX, paintY) {
  context.fillText(word, paintX, paintY);
  usedPositions.push({ x: paintX, y: paintY, length: word.length, word });
}

