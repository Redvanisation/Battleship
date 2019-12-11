/* eslint-disable linebreak-style */

import Player from './player';

const battleship = (() => ({
  player: new Player(),
  computer: new Player(),
  start() {
    this.computer.turn = false;
    this.player.board.startBoard();
    this.computer.board.startBoard();
  },
}));

export default battleship;
