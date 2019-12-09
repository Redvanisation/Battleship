/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Board from '../gameboard';
import Ship from '../ship';

it('test if a default ship is in the board', () => {
  const board = Board();
  board.setShip(new Ship());
  expect(board.posArray[0]).toBe('S');
});

it('test if a ship is in the board', () => {
  const board = Board();
  board.setShip(new Ship(2));
  expect(board.posArray[0]).toBe('S');
  expect(board.posArray[1]).toBe('S');
});
