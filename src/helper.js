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

export { randomNumber, count, colorShips };
