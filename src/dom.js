/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

import battleship from './battleship';
import {
  colorShips, successfulAttack, missedAttack, computerAttack, disable, handleRestart,
} from './helper';

const playerForm = document.querySelector('.player-section');
const boardsSection = document.querySelector('.board-section');
const restart = document.querySelector('#btn-end-game');
const endGame = document.querySelector('#end-game');
const endGameH2 = document.querySelector('#end-game-h2');

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

          if (game.computer.board.allSunk()) {
            endGameH2.textContent = 'Contratulations Player!!! You Won!';
            disable(boardsSection);
            endGame.classList.remove('hidden');
          }
        } else {
          missedAttack(e.target);
          setTimeout(() => {
            computerAttack(game.computer, game.player, endGameH2, boardsSection, endGame);
          }, 1000);
        }
      }
    });
  });
};

playerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  boardsSection.classList.remove('disabled');
  setupBoards();

  playerForm.classList.add('hidden');

  game.start();

  game.player.setupRandomShips();
  game.computer.setupRandomShips();

  // display player ships on computer cells
  const shipsP1 = game.player.board.deployedShips;
  colorShips(shipsP1, 'ship');
  cellsAction();
});

restart.addEventListener('click', handleRestart);


const setupHeader = () => {
  const h1 = document.querySelector('#h1');
  h1.textContent = 'BATTLESHIP';
};


export default setupHeader;
