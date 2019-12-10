/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
import Ship from './ship';

const board = (() => ({
  posArray: new Array(100),
  deployedShips: [],

  startBoard() {
    this.posArray.fill('E');
    this.deployedShips = [];
  },

  setShip(ship = new Ship(), iniPos = 0, vertical = false) {
    const len = ship.length;

    if (vertical) {
      if (iniPos + (10 * len) > 99) {
        return false;
      }
      for (let j = iniPos; j < iniPos + (10 * len); j += 10) {
        if (this.posArray[j] !== 'E') {
          return false;
        }
        this.posArray[j] = ship.name;
        ship.position.push(j);
      }
    } else {
      if (len + (iniPos % 10) > 10) {
        return false;
      }
      for (let i = iniPos; i < len + iniPos; i += 1) {
        if (this.posArray[i] !== 'E') {
          return false;
        }
        this.posArray[i] = ship.name;
        ship.position.push(i);
      }
    }
    this.deployedShips.push(ship);
    return true;
  },

  receiveAttack(position) {
    if (this.posArray[position] === 'E') {
      this.posArray[position] = 'M';
      return false;
    }

    for (const ship of this.deployedShips) {
      if (ship.position.includes(position)) {
        ship.hit();
        return true;
      }
    }
    return false;
  },

  allSunk() {
    let counter = 0;

    this.deployedShips.forEach((ship) => {
      if (ship.isSunk()) {
        counter += 1;
      }
    });

    if (counter === this.deployedShips.length) return true;
    return false;
  },
}));

export default board;
