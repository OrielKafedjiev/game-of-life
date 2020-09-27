var grid=[];
var sX=160, sY=120;
for(let x=0;x<sX;x++){
	grid[x]=[];
	for(let y=0;y<sY;y++){
		grid[x][y]=Math.floor(Math.random()*2);
	}
}
function update() {
	for(let x=0;x<sX;x++){
		for(let y=0;y<sY;y++){
			let neighbours=0;
			for(let i=-1;i<=1;i++){
				for(let j=-1;j<=1;j++){
					if(i==0 && j==0){continue}
					if((x+i>=sX) || (x+i<=0) || (y+j<=0) || (y+j>=sY)){continue}
					else if(grid[x+i][y+j]==1){
						neighbours++;
					}
				}
			}
			if(neighbours<2 && grid[x][y]==1){
				grid[x][y]=0;
			}else if(neighbours>3 && grid[x][y]==1){
				grid[x][y]=0;
			}else if(neighbours==3 && grid[x][y]==0){
				grid[x][y]=1;
			}
		}
	}
}

function draw() {
	for(let x=0;x<sX;x++){
		for(let y=0;y<sY;y++){
			if(grid[x][y]==1){
				context.fillStyle="black";
			}else{
				context.fillStyle="white";
			}
			context.fillRect(x*5,y*5,5,5);
		}
	}
	
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
