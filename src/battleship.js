/* eslint-disable linebreak-style */

import Player from './player';

const battleship = (() => ({
  player: new Player('player'),
  computer: new Player('computer'),
  start() {
    this.player.turn = true;
    this.player.board.startBoard();
    this.computer.board.startBoard();
  },
}));

export default battleship;
