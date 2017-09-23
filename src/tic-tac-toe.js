class TicTacToe {
    constructor() {
      this.player1 = {};
      this.player2 = {};
      this.state = {};
      // this.player1.name = 'player1';
      this.player1.symbol = 'x';
      // this.player2.name = 'player2';
      this.player2.symbol = 'o';
      this.state.order = this.player1;
      this.state.marksStorage = [];
      this.state.fieldValue = [[null, null, null], [null, null, null], [null, null, null]]
      this.state.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.state.order.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.state.marksStorage.includes(String(rowIndex) + String(columnIndex) + 'x') &&
          !this.state.marksStorage.includes(String(rowIndex) + String(columnIndex) + 'o')) {
        this.state.marksStorage.push(String(rowIndex) + String(columnIndex) + this.state.order.symbol);
        this.state.fieldValue[rowIndex][columnIndex] = this.state.order.symbol;
        if (this.state.order === this.player1) {
          this.state.order = this.player2;
        }else {
          this.state.order = this.player1;
        }
      }
      this.updateWinner();
    }

    updateWinner() {
      for (var i = 0; i < 3; i++) {
        if (this.state.fieldValue[i][0] === this.state.fieldValue[i][1] &&
            this.state.fieldValue[i][0] === this.state.fieldValue[i][2]) {
          this.state.winner = this.state.fieldValue[i][0];
        }
      }
      for (var i = 0; i < 3; i++) {
        if (this.state.fieldValue[0][i] === this.state.fieldValue[1][i] &&
            this.state.fieldValue[0][i] === this.state.fieldValue[2][i]) {
          this.state.winner = this.state.fieldValue[0][i];
        }
      }
      if (this.state.fieldValue[0][0] === this.state.fieldValue[1][1] &&
          this.state.fieldValue[0][0] === this.state.fieldValue[2][2]) {
        this.state.winner = this.state.fieldValue[0][0];
      }
      if (this.state.fieldValue[0][2] === this.state.fieldValue[1][1] &&
          this.state.fieldValue[0][2] === this.state.fieldValue[2][0]) {
        this.state.winner = this.state.fieldValue[0][2];
      }
    }

    isFinished() {
      return Boolean(this.getWinner()) || this.isDraw();
    }

    getWinner() {
      return this.state.winner;
    }

    noMoreTurns() {
      return this.state.marksStorage.length === 9;
    }

    isDraw() {
      return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.state.fieldValue[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
