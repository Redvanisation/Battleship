/* eslint-disable no-undef */
/* eslint-disable eol-last */
import Ship from '../ship';
import Board from '../gameboard';

describe('Ship', () => {
  it("hit() method increments the ship hits number if it's not sunk", () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.hitsNumber).toBe(1);
  });

  it("hit() method DOES NOT increment the ship hits number if it's sunk", () => {
    const ship = Ship();
    ship.hit();
    ship.hit();
    expect(ship.hitsNumber).toBe(1);
  });

  it('isSunk() method returns true if the ship hits are equal to the ship length', () => {
    const ship = Ship();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it('isSunk() method returns false if the ship hits are less than the ship length', () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  it('has a horizontal position array', () => {
    const theBoard = Board();
    theBoard.startBoard();
    const ship = Ship(3, 'test ship');
    theBoard.setShip(ship, 2, false);
    expect(ship.position).toStrictEqual([2, 3, 4]);
  });

  it('has a vertical position array', () => {
    const theBoard = Board();
    theBoard.startBoard();
    const ship = Ship(3, 'test ship');
    theBoard.setShip(ship, 2, true);
    expect(ship.position).toStrictEqual([2, 12, 22]);
  });
});