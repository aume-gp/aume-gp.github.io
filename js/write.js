
  var _CONTENT = [ "01. Site en développement...", "02. Je suis Chef de Projet digital.", "03. Je recherche une alternance.", "04. Passionné de jeux et de technologie." ];

  var _PART = 0;

  var _PART_INDEX = 0;

  var _INTERVAL_VAL;

  var _ELEMENT = document.querySelector("#soustitre");

  function Type() { 
   var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
   _ELEMENT.innerHTML = text;
   _PART_INDEX++;

   if(text === _CONTENT[_PART]) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
     _INTERVAL_VAL = setInterval(Delete, 50);
   }, 1000);
  }
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '0') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

_INTERVAL_VAL = setInterval(Type, 100);