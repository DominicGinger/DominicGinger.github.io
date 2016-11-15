$(document).ready(function() {
  var id = 'paintMe';
  var canvas = document.getElementById(id);
  var context = canvas.getContext('2d');
  var painting = false;
  var words= ['Lorem', 'ipsum', 'dolor', 'sit', 'ame', ', consectetur', 'adipiscing', 'eli', ', sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et',
  'dolore', 'magna', 'aliqu', '. Ut', 'enim', 'ad', 'minim', 'venia', ', quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
  'commodo', 'consequa', '. Duis', 'aute', 'rure', 'olor', 'n', 'eprehenderit', 'n', 'oluptate', 'elit', 'sse', 'illum', 'olore', 'eu', 'fugiat', 'nulla', 'pariatu',
  '. Excepteur','sint', 'occaecat', 'cupidatat', 'non', 'proiden', ', sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum.'];
  function getWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }
  function paint(x, y) {
    var params = { x: x, y: y, ctx: context, word: getWord(words) }
    PaintCore.paint(params);
  }
  function setSize() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
  }

  setSize();
  context.lineWidth = 2;
  context.font='20px monospace';

  $(window).resize(function(e) {
    setSize();
  });

  $('#' + id).on('mousedown touchstart', function(e) {
    painting = true;
    paint(e.pageX, e.pageY);
  });

  $('#' + id).on('mousemove', function(e) {
    if (painting) paint(e.pageX, e.pageY);
  });

  $('#' + id).on('touchmove', function(e) {
    var t = e.changedTouches[0]
    if (painting) paint(t.clientX, t.clientY);
  });

  $('#' + id).on('mouseup mouseleave touchend', function(e) {
    painting = false;
  });
});
