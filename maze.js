/*

Task 1

window.onload = function (){
	document.getElementById('boundary1').onmouseover = function(){
		document.getElementById('boundary1').classList.add("youlose");
	}
}
*/

//Declaration of Variables
startMaze = false; //Set to false because the Maze has not been entered.
endMaze = false; //Set to false because the Maze has not been completed.
touchedNoBound = true; //Intitial State of the Boundary

window.onload = function(){


	start = document.getElementById("start"); //Start of Maze
	end   = document.getElementById("end"); //End of Maze
	boundaries = document.querySelectorAll(".boundary"); //Boundaries of Maze
	maze = document.getElementById("maze");	//Body of the Maze

	//Boundarys changes to red if the mouse cursor hovers over it.
	for (i=0;i<boundaries.length;i++){
		boundaries[i].addEventListener("mouseover", function(element){
			
		document.getElementById("status").innerHTML = "YOU LOSE";

			for (i=0;i<boundaries.length;i++){
				boundaries[i].classList.add("youlose")
			}
			touchedNoBound = false;
		});
	};

	//Indicates to the code that the maze has been entered.
	start.addEventListener("mouseover", function(){
		startMaze = true; //Changed from "false" to "true".
	});

	//Reloads the Maze
	start.addEventListener("click", function(){
		location.reload();
	})

	//Displays Message if the maze is completed.
	end.addEventListener("mouseover", function(){
		endMaze = true; //Changed from "false" to "true"

		if (startMaze && touchedNoBound){
			document.getElementById("status").innerHTML = "YOU WIN";
		} 
	});

	//Displays Message if the maze is exited without completion
	maze.onmouseleave = function(){
		if (startMaze === true && endMaze === false){
			document.getElementById("status").innerHTML = "YOU LOSE: YOU LEFT THE MAZE";
		}
	}
}
