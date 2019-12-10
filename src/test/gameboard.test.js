/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Board from '../gameboard';
import Ship from '../ship';

const board = Board();
beforeEach(() => {
  board.startBoard();
});

it('test if a default ship could be placed on a board', () => {
  const cond = board.setShip(new Ship());
  expect(cond).toBe(true);
  expect(board.posArray[0]).toBe('Ship 1');
});

it('test if a horizontal ship with length 2 could be placed on a board', () => {
  const cond = board.setShip(new Ship(2, 'ship'), 2);
  expect(cond).toBe(true);
  expect(board.posArray[1]).toBe('E');
  expect(board.posArray[2]).toBe('ship');
  expect(board.posArray[3]).toBe('ship');
  expect(board.posArray[4]).toBe('E');
});

it('test if an horizontal ship with a lenght more than the space is in the board', () => {
  const cond = board.setShip(new Ship(4), 8);
  expect(cond).toBe(false);
  expect(board.posArray[8]).toBe('E');
});

it('test if a horizontal ship in the 4th row could be placed on a board', () => {
  const cond = board.setShip(new Ship(2, 'ship2'), 32);
  expect(cond).toBe(true);
  expect(board.posArray[31]).toBe('E');
  expect(board.posArray[32]).toBe('ship2');
  expect(board.posArray[33]).toBe('ship2');
  expect(board.posArray[34]).toBe('E');
});

it('test if a vertical ship could be placed on a board', () => {
  const cond = board.setShip(new Ship(1, 'theShip'), 0, true);
  expect(cond).toBe(true);
  expect(board.posArray[0]).toBe('theShip');
});

it('test if a vertical ship with length 3 could be placed on a board', () => {
  const cond = board.setShip(new Ship(3, 'bigShip'), 12, true);
  expect(cond).toBe(true);
  expect(board.posArray[2]).toBe('E');
  expect(board.posArray[12]).toBe('bigShip');
  expect(board.posArray[22]).toBe('bigShip');
  expect(board.posArray[32]).toBe('bigShip');
  expect(board.posArray[42]).toBe('E');
});

it('test if a vertical ship could be placed on a board', () => {
  const cond = board.setShip(new Ship(2), 91, true);
  expect(cond).toBe(false);
  expect(board.posArray[91]).toBe('E');
});

it('test 2 ships in the same position', () => {
  const cond1 = board.setShip(new Ship(2, 'trueShip'), 2, false);
  const cond2 = board.setShip(new Ship(2, 'falseShip'), 2, true);
  expect(cond1).toBe(true);
  expect(cond2).toBe(false);
  expect(board.posArray[2]).toBe('trueShip');
});

it('returns an array of deployed ships', () => {
  expect(board.deployedShips).toHaveLength(0);
  const cond1 = board.setShip(new Ship(2, 'first ship'), 2, false);
  const cond2 = board.setShip(new Ship(4, 'second ship'), 12, true);
  expect(board.deployedShips).toHaveLength(2);
});

// it('', () => {

// });
