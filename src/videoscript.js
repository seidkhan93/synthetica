var handler = function () {
		this.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2ZzgftDTJRc?rel=0&amp;vq=hd720&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>'
}; 

document.querySelector('.video').addEventListener('click', function (e) { 
	this.removeEventListener('click', handler, false); 
	handler.apply(this, arguments); 
	} , false);