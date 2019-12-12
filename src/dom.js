/* eslint-disable linebreak-style */

import battleship from './battleship';
import { colorShips, successfulAttack, missedAttack, computerAttack, disable } from './helper';

const boardsSection = document.querySelector('.board-section');
const game = battleship();
const theBoards = [];

const setupBoards = () => {
  const boards = document.querySelectorAll('.board');
  let loops = 1;
  boards.forEach((board) => {
    board.innerHTML = '';
    let id = '';
    loops === 1 ? id = 'computer' : id = 'player';

    const lab = document.createElement('label');
    lab.textContent = id;
    lab.classList.add('board-label');
    board.appendChild(lab);
    for (let i = 1; i <= 100; i += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.setAttribute(`data-${id}`, (i - 1));
      cellDiv.textContent = 'E';
      board.appendChild(cellDiv);
      if (i % 10 === 0) {
        board.appendChild(document.createElement('br'));
      }
    }
    loops += 1;
    theBoards.push(board);
  });
};

const playerForm = document.querySelector('#player-form');

playerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  boardsSection.classList.remove('disabled');
  setupBoards();

  // console.log(theBoards);
  game.start();
  game.player.board.deployedShips = [];
  game.computer.board.deployedShips = [];
  game.player.setupRandomShips();
  game.computer.setupRandomShips();

  // display player ships on computer cells
  const shipsP1 = game.player.board.deployedShips;
  colorShips(shipsP1, game.computer.name, 'ship');
  
  // display computer ships on player cells
  const shipsComp = game.computer.board.deployedShips;
  colorShips(shipsComp, game.player.name, 'ship');
  
  cellsAction();
  // setTimeout(boo, 1000);
});

const cellsAction = () => {
  if (!theBoards) return;
  theBoards.forEach((board) => {
    board.addEventListener('click', (e) => {
      if (Object.keys(e.target.dataset).toString() === 'player') {
        const coor = parseInt(e.target.dataset.player, 10);
        if (!game.player.turn) return;
        const attacked = game.player.attack(game.computer, coor);
        if (attacked) {
          successfulAttack(e.target);
          console.log('computer ships:', game.computer.board.deployedShips);
        } else {
          missedAttack(e.target);
          setTimeout(() => {
            computerAttack(game.computer, game.player);
          }, 100);
        }
      }
      if (game.computer.board.allSunk()) {
        // console.log('computer ships:', game.computer.board.deployedShips);
        console.log(`Contratulations ${game.player.name}.!!! You Won!`);
        disable(boardsSection);
      } else if (game.player.board.allSunk()) {
        console.log('player ships:', game.player.board.deployedShips);
        console.log(`Bad! ${game.computer.name} Won. You Lost!`);
        disable(boardsSection);
      }
    });
  });
};


const setupHeader = () => {
  const header = document.querySelector('header');

  const h1 = document.createElement('h1');
  h1.classList.add('main-header', 'text-center', 'py-3');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);
};


export { setupHeader, setupBoards };
