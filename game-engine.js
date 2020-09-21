// game constructor
function gameBuilder(row, column) {
    this.game = this._create(row, column);
    this.activePlayer = 0 // 0 means yellow 1 means red;
    this.row = row;
    this.column = column;
    this.playerWon = "";
}

gameBuilder.prototype._create = function(rowNum, column) {
    if (!rowNum && !column) return null;
    const game = [];
    for (let rowIn = 0; rowIn < rowNum; rowIn++) {
        const row = [];
        for (let colIn = 0; colIn < column; colIn++) {
            row.push(-1);
        }
        game.push(row);
    }
    return game;
}

gameBuilder.prototype.reset = function() {
    this.game = this._create(this.row, this.column);
}

gameBuilder.prototype.add = function(colNum = 0) {
    if (colNum < 0 || colNum >= this.column || this.playerWon ) return false;
    for (let i = 0; i < this.row; i++) {
        if (this.game[i][colNum] == -1) {
            this.game[i][colNum] = this.activePlayer;
            if (this._checkForWin()) {
                this.playerWon = this.activePlayer;
            }
            this._tooglePlayer();
            return true;
        }
    }
    return false;
}

gameBuilder.prototype.getJson = function() {
    return {
        game : this.game,
        activePlayer : this.activePlayer,
        playerWon : this.playerWon
    }
}

gameBuilder.prototype._tooglePlayer = function() {
    this.activePlayer = (this.activePlayer + 1) % 2;
}

gameBuilder.prototype._checkForWin = function() {
    for (let i = 0; i < this.row; i++) {
        for (let  j = 0; j < this.column; j++) {
            if (this.game[i][j] == this.activePlayer) {
                const check = this._chechFor(i, j);
                if (check) return check;
            }
        }
    }
    return false;
}

gameBuilder.prototype._chechFor = function(row, col) {
    // check horizontal to right;
    let count = 0;
    for (let i = col; i < this.column; i++) {
        if (this.game[row][i] == this.activePlayer) {
            count++;
        } else {
            break;
        }
    }

    if (count >= 4) return true;
    count = 0;

    // check for vertical upward;
    for (let i = row; i < this.row; i++) {
        if (this.game[i][col] == this.activePlayer) {
            count++;
        } else {
            break;
        }
    }

    if (count >= 4) return true;
    count = 0;

    // check diagonal bottom right
    let iRow = row;
    let iCol = col;

    while (iRow >= 0 && iCol < this.column) {
        if (this.game[iRow][iCol] == this.activePlayer) {
            count++;
        } else {
            break;
        }
        iRow--;
        iCol++;
    }

    if (count >= 4) return true;
    count = 0;

    // check diagonal top right
    iRow = row;
    iCol = col;

    while (iRow < this.row && iCol < this.column) {
        if (this.game[iRow][iCol] == this.activePlayer) {
            count++;
        } else {
            break;
        }
        iRow++;
        iCol++;
    }

    if (count >= 4) return true;
    count = 0;

    // check diagonal top left
    iRow = row;
    iCol = col;

    while (iRow < this.row && iCol >= 0) {
        if (this.game[iRow][iCol] == this.activePlayer) {
            count++;
        } else {
            break;
        }
        iRow++;
        iCol--;
    }

    // check diagonal bottom left
    iRow = row;
    iCol = col;

    while (iRow >= 0 && iCol >= 0) {
        if (this.game[iRow][iCol] == this.activePlayer) {
            count++;
        } else {
            break;
        }
        iRow--;
        iCol--;
    }

    if (count >= 4) return true;
    count = 0;

    return false;
}


module.exports = gameBuilder;