/* Author:
	Marian Steinbach
*/

(function(){
	updateFields = function(){
		$('#windowwidth').text(window.innerWidth);
		$('#windowheight').text(window.innerHeight);
		$('#screenwidth').text(screen.width);
		$('#screenheight').text(screen.height);
	};
})();

$(document).ready(function(){
		updateFields();
});

