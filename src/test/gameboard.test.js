/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Board from '../gameboard';
import Ship from '../ship';

const board = Board();
beforeAll(() => {
  board.startBoard();
});

it('test if a default ship could be placed on a board', () => {
  const cond = board.setShip(new Ship());
  expect(cond).toBe(true);
  expect(board.posArray[0]).toBe('S');
});

it('test if a horizontal ship with length 2 could be placed on a board', () => {
  const cond = board.setShip(new Ship(2), 2);
  expect(cond).toBe(true);
  expect(board.posArray[1]).toBe('E');
  expect(board.posArray[2]).toBe('S');
  expect(board.posArray[3]).toBe('S');
  expect(board.posArray[4]).toBe('E');
});

it('test if an horizontal ship with a lenght more than the space is in the board', () => {
  const cond = board.setShip(new Ship(4), 8);
  expect(cond).toBe(false);
  expect(board.posArray[8]).toBe('E');
});

it('test if a horizontal ship in the 4th row could be placed on a board', () => {
  const cond = board.setShip(new Ship(2), 32);
  expect(cond).toBe(true);
  expect(board.posArray[31]).toBe('E');
  expect(board.posArray[32]).toBe('S');
  expect(board.posArray[33]).toBe('S');
  expect(board.posArray[34]).toBe('E');
});

it('test if a vertical ship could be placed on a board', () => {
  const cond = board.setShip(new Ship(), 0, true);
  expect(cond).toBe(true);
  expect(board.posArray[0]).toBe('S');
});

it('test if a vertical ship with length 3 could be placed on a board', () => {
  const cond = board.setShip(new Ship(3), 12, true);
  expect(cond).toBe(true);
  expect(board.posArray[2]).toBe('E');
  expect(board.posArray[12]).toBe('S');
  expect(board.posArray[22]).toBe('S');
  expect(board.posArray[32]).toBe('S');
  expect(board.posArray[42]).toBe('E');
});

it('test if a vertical ship could be placed on a board', () => {
  const cond = board.setShip(new Ship(2), 91, true);
  expect(cond).toBe(false);
  expect(board.posArray[91]).toBe('E');
});