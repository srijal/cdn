window.foo = function(data){
	console.log('foo data ' + data);
	var element = document.getElementById(data);
	element.childNodes[1].contentWindow.postMessage('sw-close', '*');
}

window.onmessage = function(evt){
	console.log('in outer, from inner :' + evt.data);
}