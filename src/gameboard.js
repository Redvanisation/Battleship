/* eslint-disable linebreak-style */
const board = (() => ({
  posArray: new Array(100),

  startBoard() {
    this.posArray.fill('E');
  },

  setShip(ship, iniPos = 0, vertical = false) {
    const len = ship.length;

    if (vertical) {
      if (iniPos + (10 * len) > 99) {
        return false;
      }
      for (let j = iniPos; j < iniPos + (10 * len); j += 10) {
        this.posArray[j] = 'S';
      }
    } else {
      if (len + (iniPos % 10) > 10) {
        return false;
      }
      this.posArray.fill('S', iniPos, len + iniPos);
    }
    return true;
  },
}));

export default board;

// this.posArray.fill('S', 11, 2 + 11);
// setShip(3, 8, vertical = true)
//      0 1 2 3 4 5 6 7 8 9

//  0   0 0 S 0 0 0 0 0 0 0
//  1   0 0 S 0 0 0 0 0 0 0
//  2   0 0 S 0 0 0 0 0 0 0
//  3   0 0 0 0 0 0 0 0 0 0
//  4   0 0 0 0 0 0 0 0 0 0
//  5   0 0 0 0 0 0 0 0 0 0
//  6   0 0 0 0 0 0 0 0 0 0
//  7   0 0 0 0 0 0 0 0 0 0
//  8   0 0 0 0 0 0 0 0 S 0
//  9   0 0 0 0 0 0 0 0 S 0

// 2,12,22

// 0 S S 0 0 0 0 0 0 0