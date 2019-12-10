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
        if (this.posArray[j] !== 'E') {
          return false;
        }
        this.posArray[j] = 'S';
      }
    } else {
      if (len + (iniPos % 10) > 10) {
        return false;
      }
      for (let i = iniPos; i < len + iniPos; i += 1) {
        if (this.posArray[i] !== 'E') {
          return false;
        }
        this.posArray[i] = 'S';
      }
    }
    return true;
  },
}));

export default board;
