var nouns = [ 'timer',
    'calander',
    'music player',
    'thing',
    'system',
    'visualiser',
    'feed',
    'website',
    'todo list',
    'game',
    'old people',
    'data manipulation',
    'eating habits',
    'big data',
    'new technologies',
    'cool stuff',
    'businesses',
    'big issues',
    'safe places',
    'new ideas' ];
var adjectives = [ 'open-source',
    'simple',
    '100%',
    'musical',
    'portable',
    'speedy',
    'broken down',
    'virtual',
    'unusual',
    'miniature' ];
var verbs = [ 'finds',
    'grows',
    'demonstrates',
    'chooses',
    'gets',
    'understands',
    'takes',
    'hurts',
    'drives',
    'builds' ];

var getRandom = function(array) {
  return array[Math.floor(Math.random()*array.length)];
}
var n = function() { return getRandom(nouns); };
var a = function() { return getRandom(adjectives); };
var v = function() { return getRandom(verbs); };

var sentenceStructures = ['a','b','c','d','e'];

var getSentence = function() {
  var sentence = '';
  switch(getRandom(sentenceStructures)) {
    case 'a':
      sentence = 'A ' + a() + ' ' + n() + ' that ' + v() + ' ' + n() + '.';
      break;
    case 'b':
      sentence = v() + ' ' + n() + ' for ' + n() + '.';
      break;
    case 'c':
      sentence = v() + ' ' + a() + ' ' + n() + ' for ' + a() + ' ' + n() + '.';
      break;
    case 'd':
      sentence = n() + ' for ' + n() + ' to ' + v() + ' ' + n() + '.';
      break;
    case 'e':
      sentence = a() + ' ' + n() + ' for ' + a() + ' ' + n() + ' to ' + v() + ' ' + a() + ' ' + n() + '.';
      break;
  }
  return sentence;
}

var setSentence = function(divId) {
  setTimeout(function() {
    document.getElementById(divId).innerHTML = getSentence();
  }, 1000);
}

setSentence('sentence');

