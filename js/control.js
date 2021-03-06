var Control = function(grids) {
	this.grids = grids;
	this.speed = 1;
	this.timeElapsed = 0;
};

Control.prototype.getCell = function(x, y) {
	// cells that exceed the matrix will start out the other end
	x = (x + this.grids.numCols) % this.grids.numCols;
	y = (y + this.grids.numCols) % this.grids.numRows;
	return this.grids.cellsArray[x + y * this.grids.numCols];
};

Control.prototype.getSurroundings = function(x, y) {
	return [
		this.getCell(x-1, y-1),
		this.getCell(x-1, y),
		this.getCell(x-1, y+1),
		this.getCell(x, y-1),
		this.getCell(x, y+1),
		this.getCell(x+1, y-1),
		this.getCell(x+1, y),
		this.getCell(x+1, y+1)
	];
};

Control.prototype.shouldLive = function(x, y) {
	var surroundings = this.getSurroundings(x, y);
	var surroundingAlive = surroundings.filter(function(cell) {
		return cell.isAlive;
	});

	if (surroundingAlive.length === 3) {
		return true;
	}
	return false;
};

Control.prototype.shouldDie = function(x, y) {
	var surroundings = this.getSurroundings(x, y);
	var surroundingAlive = surroundings.filter(function(cell) {
		return cell.isAlive;
	});
	// death by under-population
	if (surroundingAlive.length < 2) {
		return true;
	}
	// death by over-population
	if (surroundingAlive.length > 3) {
		return true;
	}
	// cell with 2 or 3 surroundings alive should live
	return false;
};

Control.prototype.update = function() {
	var self = this;

	// get cells that should die
	var cellsToDie = this.grids.cellsArray.filter(function(cell) {
		return self.shouldDie(cell.x, cell.y);
	});

	// get cells that should live
	var cellsToLive = this.grids.cellsArray.filter(function(cell) {
		return self.shouldLive(cell.x, cell.y);
	});

	// update cells that should die
	cellsToDie.forEach(function(cell) {
		cell.isAlive = false;
	});

	// update cells that should live
	cellsToLive.forEach(function(cell) {
		cell.isAlive = true;
	});
};
var control = new Control(grids);
