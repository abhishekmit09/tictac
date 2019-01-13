/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    let newValue = 1;
    grid[colIdx][rowIdx] = newValue;
    //renderMainGrid();
    //addClickHandlers();
	computerMove(colIdx,rowIdx);
	renderMainGrid();
    addClickHandlers();
	checkForWin();
	
	//$('[colIdx='+i+'][rowIdx='+i+']').addClass('winnerBackground');
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

function checkForWin()
{
	

// just 8 possible ways to win. No need to loop through grid :) 
if(grid[0][0]!="")
{
	if(grid[0][0]==grid[0][1] && grid[0][0]==grid[0][2]) //1,2,3
	{
		$('[colIdx='+0+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+0+'][rowIdx='+1+']').addClass('winnerBackground');
		$('[colIdx='+0+'][rowIdx='+2+']').addClass('winnerBackground');
		
		gameOver(grid[0][0]);

	}
	else if(grid[0][0]==grid[1][0] && grid[0][0]==grid[2][0])//1,4,7
	{
		$('[colIdx='+0+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+2+'][rowIdx='+0+']').addClass('winnerBackground');
		gameOver(grid[0][0]);
	}	
	else if(grid[0][0]==grid[1][1] && grid[0][0]==grid[2][2])//1,5,9
	{
		$('[colIdx='+0+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+1+']').addClass('winnerBackground');
		$('[colIdx='+2+'][rowIdx='+2+']').addClass('winnerBackground');
		gameOver(grid[0][0]);
	}
	
}

else if(grid[2][0]!="")
{
	if(grid[2][0]==grid[1][1] && grid[2][0]==grid[2][0]) //7,5,3
	{
		$('[colIdx='+2+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+1+']').addClass('winnerBackground');
		$('[colIdx='+2+'][rowIdx='+0+']').addClass('winnerBackground');
		gameOver(grid[2][0]);
	}
	else if(grid[2][0]==grid[2][1] && grid[2][0]==grid[2][2])//7,8,9
	{
		$('[colIdx='+0+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+2+'][rowIdx='+0+']').addClass('winnerBackground');
		gameOver(grid[2][0]);
	}	
}

else if(grid[1][0]!="" && grid[1][0]==grid[1][1] && grid[1][2]==grid[1][0]) //4,5,6
{
		$('[colIdx='+1+'][rowIdx='+0+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+1+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+2+']').addClass('winnerBackground');
		gameOver(grid[1][0]);
}
else if(grid[0][1]!="" && grid[0][1]==grid[1][1] && grid[2][1]==grid[0][1]) //2,5,8
{
		$('[colIdx='+0+'][rowIdx='+1+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+1+']').addClass('winnerBackground');
		$('[colIdx='+2+'][rowIdx='+1+']').addClass('winnerBackground');
		gameOver(grid[0][1]);
}
else if(grid[0][2]!="" && grid[0][2]==grid[1][2] && grid[0][2]==grid[2][2]) //3,6,9
{
		$('[colIdx='+0+'][rowIdx='+2+']').addClass('winnerBackground');
		$('[colIdx='+1+'][rowIdx='+2+']').addClass('winnerBackground');
		$('[colIdx='+2+'][rowIdx='+2+']').addClass('winnerBackground');
		gameOver(grid[0][2]);
}




/////////
		
}

function gameOver(player)
{
	
	if(player==1)
	    {
		$("#winnerText").html("You win");
	    }
	    else{
		$("#winnerText").html("You lose");
	    }
}


function computerMove(user_colIdx,user_rowIdx)
{
	var emptyCells = [];
	var xCells=[];
	var oCells=[];
    for (var colIdx=0; colIdx<3; colIdx++) {
      for (var rowIdx=0; rowIdx<3; rowIdx++) {
        if (grid[colIdx][rowIdx]=='')
			{			
			emptyCells.push(colIdx+','+rowIdx)			
			};
			
			//could have made use of the below code to deveop a better counter move, had more time been given
			if (grid[colIdx][rowIdx]=='X')
			{			
			xCells.push(colIdx+','+rowIdx)			
			};
			if (grid[colIdx][rowIdx]=='O'){		
			oCells.push(colIdx+','+rowIdx)			
			};
      }
    }
	
	 var item = emptyCells[Math.floor(Math.random()*emptyCells.length)];	 
    if(item!=null){	 
	  var arr= item.split(',');
	  grid[arr[0]][arr[1]] = 2;
	 
    }
}

function Restart()
{
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++)
		{
			grid[i][j]=0;
		}
	}
	//initializeGrid();
renderMainGrid();
addClickHandlers();
	
}

initializeGrid();
renderMainGrid();
addClickHandlers();
