/* eslint-disable linebreak-style */
const board = (() => ({
  posArray: new Array(100),

  startBoard() {
    this.posArray.fill('E');
  },

  setShip(ship) {
    const len = ship.length;
    const pos = ship.position[0];
    this.posArray.fill('S', pos, len + pos);
    // for (let i = pos; i < pos + len; i += 1) {
    //   this.posArray[i] = 'S';
    // }
  },

}));

export default board;

// S 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0 0