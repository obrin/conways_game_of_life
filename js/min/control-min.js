var Control=function(t){this.grids=t,this.speed=2,this.timeElapsed=0};Control.prototype.alive=function(){},Control.prototype.getCell=function(t,i){return t=(t+this.grids.numCols)%this.grids.numCols,i=(i+this.grids.numCols)%this.grids.numRows,this.grids.cellsArray[t+i*this.grids.numCols]},Control.prototype.getSurroundings=function(t,i){return[this.getCell(t-1,i-1),this.getCell(t-1,i),this.getCell(t-1,i+1),this.getCell(t,i-1),this.getCell(t,i+1),this.getCell(t+1,i-1),this.getCell(t+1,i),this.getCell(t+1,i+1)]},Control.prototype.shouldLive=function(t,i){var e=this.getSurroundings(t,i),r=e.filter(function(t){return t.isAlive});return 3===r.length?!0:!1},Control.prototype.shouldDie=function(t,i){var e=this.getSurroundings(t,i),r=e.filter(function(t){return t.isAlive});return r.length<2?!0:r.length>3?!0:!1},Control.prototype.update=function(t){var i=this;if(i.timeElapsed+=t,!(i.timeElapsed<i.speed)){i.timeElapsed=0;var e=this.grids.cellsArray.filter(function(t){return i.shouldLive(t.x,t.y)});e.forEach(function(t){t.isAlive=!0});var r=this.grids.cellsArray.filter(function(t){return i.shouldDie(t.x,t.y)});r.forEach(function(t){t.isAlive=!1})}};var control=new Control(grids);