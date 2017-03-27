var smiley = new Image();
smiley.src = "http://www.capetown-dietician.co.za/wp-content/uploads/2013/09/10440718-seamless-grass-texture-for-3d-or-2d-texturing.jpg";

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	
	ctx.fillStyle = 'blue';
	ctx.fillRect(100, 100, 100, 50);
	
	ctx.strokeStyle = 'red';
	ctx.strokeRect(75, 75, 50, 50);
	
ctx.drawImage(smiley, 200, 30, 100, 50); 

}
