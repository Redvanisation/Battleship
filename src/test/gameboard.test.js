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
  board.setShip(new Ship(2, 'first ship'), 2, false);
  board.setShip(new Ship(4, 'second ship'), 12, true);
  expect(board.deployedShips).toHaveLength(2);
});

it('receiveAttack() determines if the cell has a ship or not...', () => {
  board.setShip(new Ship(4, 'test ship'), 24, false); // 24,25,26,27
  expect(board.deployedShips).toHaveLength(1);
  expect(board.receiveAttack(15)).toBe(false);
  expect(board.receiveAttack(25)).toBe(true);
});

it('receiveAttack() if called on an empty cell then it sets it to Missed', () => {
  board.setShip(new Ship(4, 'test ship'), 24, false); // 24,25,26,27
  expect(board.receiveAttack(15)).toBe(false);
  expect(board.posArray[15]).toBe('M');
});

it('receiveAttack() if called on a ship then it calls the ship hit() method', () => {
  const ship1 = Ship(4, 'test ship');
  board.setShip(ship1, 24, false); // 24,25,26,27
  expect(board.receiveAttack(25)).toBe(true);
  expect(board.receiveAttack(26)).toBe(true);
  expect(ship1.hitsNumber).toBe(2);
});

it('receiveAttack() sinks the ship with enough hits', () => {
  const ship1 = Ship(2, 'test ship');
  board.setShip(ship1, 24, false); // 24,25
  expect(board.receiveAttack(24)).toBe(true);
  expect(board.receiveAttack(25)).toBe(true);
  expect(ship1.hitsNumber).toBe(2);
  expect(ship1.isSunk()).toBe(true);
});

it('allSunk() returns true if all deployed ships are sunk', () => {
  const ship1 = Ship(2, 'test ship');
  const ship2 = Ship(1, 'test ship2');
  board.setShip(ship1, 24, false); // 24,25
  board.setShip(ship2, 30, true); // 30
  board.receiveAttack(24);
  board.receiveAttack(25);
  board.receiveAttack(30);
  expect(board.allSunk()).toBe(true);
});

it('allSunk() returns false if not all deployed ships are sunk', () => {
  const ship1 = Ship(2, 'test ship');
  const ship2 = Ship(1, 'test ship2');
  const ship3 = Ship(1, 'test ship3');
  const ship4 = Ship(3, 'test ship4');
  board.setShip(ship1, 24, false); // 24,25
  board.setShip(ship2, 30, true); // 30
  board.setShip(ship3, 40, true); // 40
  board.setShip(ship4, 55, false); // 55,56,57
  // attack ship1
  board.receiveAttack(24);
  board.receiveAttack(25);
  // attack ship2
  board.receiveAttack(30);
  expect(board.allSunk()).toBe(false);
});
