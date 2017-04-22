import { NgTicTacToePage } from './app.po';

describe('ng-tic-tac-toe App', () => {
  let page: NgTicTacToePage;

  beforeEach(() => {
    page = new NgTicTacToePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
