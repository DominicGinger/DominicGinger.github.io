var PaintCore = (function() {
  var usedPositions = new Array();
  var spacing = 12;

  function canDraw(x, y, length) {
    var x2 = x + (spacing*length);

    for(var i = 0; i < usedPositions.length; i++) {
      var pos = usedPositions[i];
      var r = pos.x;
      var r2 = pos.x + (spacing*pos.length);

      if (y === pos.y && ((x <= r2) && (r <= x2))) {
        return false;
      }
    }
    return true;
  }

  function draw(ctx, x, y, word) {
    x -= 12;
    y -= 12;
    var offset = spacing + (word.length * spacing);
    x = Math.round(x /offset) * offset;
    y = Math.round(y /20) * 20;

    if(canDraw(x, y, word.length)) {
      ctx.fillText(word, x, y);
      usedPositions.push({x: x, y: y, length: word.length});
    }
  }

  return {
    paint: function(params) {
      draw(params.ctx, params.x, params.y, params.word);
    }
  }
})();
