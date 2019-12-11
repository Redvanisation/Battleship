/* eslint-disable linebreak-style */

import Player from './player';

const battleship = (() => ({
  player1: new Player(),
  player2: new Player(),
  start() {
    this.player1.board.startBoard();
    this.player2.board.startBoard();
  }
}));

export default battleship;
