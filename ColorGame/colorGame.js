var numSquares = 6;
//Give each square an initial color:
var colors = generateRandomColors(numSquares);
//Set the correct answer color
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var goalDisplay = document.querySelector("#goalDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

//add click listeners to both hard and easy buttons
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		//both buttons get "selected" class removed
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		//button that is clicked gets the "selected class" added
		this.classList.add("selected");
		//if easy mode selected, only 3 colors needed, if hard, then 6
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

//determine starting colors of squares
for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			//change color of header and all other squares
			changeColors(pickedColor);
			h1.style.backgroundColor = clickedColor;
			//display "Correct" in a hidden/unhidden span at top of page
			messageDisplay.textContent = "Correct!";
			//update reset button to say "Play Again?"
			resetButton.textContent = "Play Again?";
		}
		else {
			//change background of clicked color and display "Try
			//Again" in hidden/unhidden span at top of page
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
};

//RGB random choice (the "answer color") is displayed in the header
goalDisplay.textContent = pickedColor;

//clicking the reset button resets the game screen
resetButton.addEventListener("click", function(){
	reset();
});

//changes all squares to the same color
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

//chooses a random color from the color array to be the "answer"
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//function that puts random colors into an array
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//function that gets a random color
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//function that resets the screen
function reset(){
	//generate new random colors numSquares times
	colors = generateRandomColors(numSquares);
	//a new "winner" color is chosen from the random colors
	pickedColor = pickColor();
	//the "winner" color is displayed in the heading
	goalDisplay.textContent = pickedColor;
	//the new random colors are applied to each square
	for(var i = 0; i < squares.length; i++){
		//decide if any squares should be hidden
		if(colors[i]){
			//first, un-hide all 6 squares
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			//if only 3 random colors are generated, hide bottom three squares
		} else {
			squares[i].style.display = "none";
		}
	}
	//the text on the button changes to default "New Colors"
	resetButton.textContent = "New Colors";
	//the header background color changes back to default
	h1.style.backgroundColor = "steelblue";
	//hide the message span
	messageDisplay.textContent = "";
}