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

export { randomNumber, count, colorShips, successfulAttack, missedAttack };
