// Grid generation
var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard");

// Grid construct
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// Creation des divs
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);
		
		// assignation d'un id aux div
		square.id = 's' + j + i;			
		
		// Assignation des coordonnées
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

// Compteur pour déterminer le gagnant (17 pts)
var hitCount = 0;

// Gameboard Matrix
var gameBoard = [
	[0,0,0,1,1,1,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[1,0,0,0,0,0,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0]
]

gameBoardContainer.addEventListener("click", fireTorpedo, false);

function fireTorpedo(e) {
	if (e.target !== e.currentTarget) 
	{
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
		
		if (gameBoard[row][col] == 0) 
		{
			e.target.style.background = '#bbb';
			gameBoard[row][col] = 3;
			
		} 
		else if (gameBoard[row][col] == 1)
		{
			e.target.style.background = 'red';
			gameBoard[row][col] = 2;
			
			hitCount++;
			if (hitCount == 17) 
			{
				alert("Gagné");
			}
		} 
		else if (gameBoard[row][col] > 1)
		{
			alert("Oups");
		}		
	}
	e.stopPropagation();
}
