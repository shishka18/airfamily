score = 0;
canvas = document.getElementById("game");
context = canvas.getContext("2d");

function createGame(){
	context.beginPath();
    context.rect(30, 20, 100, 90);
	context.closePath();
	context.strokeStyle = "red";
	context.stroke();
}
createGame()