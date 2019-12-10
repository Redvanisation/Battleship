/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// import Board from '../gameboard';
// import Ship from '../ship';
import Player from '../player';

// it('test if player has ships', () => {
//   const player1 = new Player();
//   player1.board.startBoard();
//   player1.startPlayer();
//   expect(player1.board.deployedShips).toHaveLength(3);
// });

// it('test attack player1 to player2', () => {
//   const player1 = new Player();
//   player1.board.startBoard();
//   player1.startPlayer();
//   const player2 = new Player();
//   player2.board.startBoard();
//   player2.startPlayer();
//   player2.turn = false;

//   expect(player2.attack(player1, 1)).toBe(false);

//   expect(player1.attack(player2, 1)).toBe(true);

//   expect(player2.attack(player1, 1)).toBe(false);

//   expect(player1.attack(player2, 0)).toBe(false);

//   expect(player2.attack(player1, 1)).toBe(true);
// });

it('test random attack player1 to player2', () => {
  const player1 = new Player();
  player1.board.startBoard();
  player1.startPlayer();
  const player2 = new Player();
  player2.board.startBoard();
  player2.startPlayer();
  player2.turn = false;
  expect(player1.randomAttack(player2)).toBe(true);
});
