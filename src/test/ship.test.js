/* eslint-disable no-undef */
/* eslint-disable eol-last */
import Ship from '../ship';


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
