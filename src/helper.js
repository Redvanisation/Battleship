/* eslint-disable linebreak-style */
const randomNumber = limit => Math.floor((Math.random() * limit) + 1);

const count = (arr, item) => {
  let counter = 0;
  arr.forEach((cell) => {
    if (cell === item) counter += 1;
  });
  return counter;
};

const colorShips = (shipsObj, name, className) => {
  shipsObj.forEach((ship) => {
    ship.position.forEach((pos) => {
      const cell = document.querySelector(`div[data-${name}="${pos}"]`);
      // console.log(cell)
      cell.classList.add(className);
    });
  });
};

const disable = (elem) => {
  elem.classList.add('disabled');
};

const successfulAttack = (elem) => {
  elem.classList.add('attack-success');
  disable(elem);
};

const missedAttack = (elem) => {
  elem.classList.add('attack-missed');
  disable(elem);
};

const computerAttack = (computer, player) => {
  // if (!computer.turn) return;
  while (computer.turn) {
    const randNum = randomNumber(99);
    const cell = document.querySelector(`div[data-computer="${randNum}"]`);
    if (!cell.classList.contains('disabled')) {
      const attacked = computer.attack(player, randNum);
      attacked ? successfulAttack(cell) : missedAttack(cell);
    }
  }
};

const handleRestart = () => {
  location.reload(true);
};

export {
  randomNumber, count, colorShips, successfulAttack, missedAttack, computerAttack, disable, handleRestart,
};
