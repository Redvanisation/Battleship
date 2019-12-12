/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// import Board from '../gameboard';
// import Ship from '../ship';
import Player from '../player';
import { count } from '../helper';


describe('Player factory', () => {
  const player1 = new Player();
  const player2 = new Player();

  beforeEach(() => {
    player1.board.startBoard();
    player2.board.startBoard();
    player1.startPlayer();
    player2.startPlayer();
    player1.turn = true;
    player2.turn = false;
  });

  it('checks if the game starts with the initial turn values for players', () => {
    expect(player1.turn).toBe(true);
    expect(player2.turn).toBe(false);
  });

  it('checks if players switch turns after a missed attack', () => {
    player1.attack(player2, 5);
    expect(player1.turn).toBe(false);
    expect(player2.turn).toBe(true);
  });

  it('checks if the players continue playing after a successful attack', () => {
    player1.attack(player2, 2);
    expect(player1.turn).toBe(true);
    expect(player2.turn).toBe(false);
  });

  it('tests of player1 can attack player2', () => {
    expect(player2.attack(player1, 1)).toBe(false);
    expect(player1.attack(player2, 2)).toBe(true);
  });

  it('tests if the computer can attack a random position when no coordinates are given', () => {
    const arrEmptyCountBefore = count(player1.board.posArray, 'E');

    player1.attack(player2, 5);
    player2.attack(player1);

    const arrEmptyCountAfter = count(player1.board.posArray, 'E');
    expect(arrEmptyCountBefore).toBeGreaterThan(arrEmptyCountAfter);
  });
});

describe("Player's ships random deployment", () => {
  const player1 = new Player();
  it('tests if the player has a number of randomly deployed ships', () => {
    player1.board.startBoard();
    player1.setupRandomShips();
    expect(player1.board.deployedShips.length).toBe(6);
  });
});
