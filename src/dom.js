/* eslint-disable linebreak-style */

import battleship from './battleship';

const game = battleship();

const setupBoards = () => {
  const boards = document.querySelectorAll('.board');
  for (let x = 0; x < boards.length; x += 1) {
    let id = 'computer';
    if (x === 0) {
      id = 'player';
    }
    boards[x].innerHTML = '';
    const lab = document.createElement('label');
    lab.textContent = id;
    lab.classList.add('board-label');
    boards[x].appendChild(lab);
    for (let i = 1; i <= 100; i += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.setAttribute(`data-${id}`, (i - 1));
      cellDiv.textContent = 'E';
      boards[x].appendChild(cellDiv);
      if (i % 10 === 0) {
        boards[x].appendChild(document.createElement('br'));
      }
    }
    boards[x].addEventListener('click', (e) => {
      if (!isNaN(e.target.dataset.player)) {
        console.log(e.target.dataset.player);
      }  
    });
  }
};

const playerForm = document.querySelector('#player-form');

playerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setupBoards();
  game.start();
  game.player1.setupRandomShips();
  game.player2.setupRandomShips();

  const shipsP1 = game.player1.board.deployedShips;
  shipsP1.forEach((ship) => {
    const arrPositions = ship.position;
    arrPositions.forEach((pos) => {
      const cell = document.querySelector(`div[data-player="${pos}"]`);
      cell.classList.add('ship');
    });
  });

  const shipsP2 = game.player2.board.deployedShips;
  shipsP2.forEach((ship) => {
    const arrPositions = ship.position;
    arrPositions.forEach((pos) => {
      const cell = document.querySelector(`div[data-computer="${pos}"]`);
      cell.classList.add('ship');
    });
  });
});

const setupHeader = () => {
  const header = document.querySelector('header');

  const h1 = document.createElement('h1');
  h1.classList.add('main-header', 'text-center', 'py-3');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);
};


export { setupHeader, setupBoards };
