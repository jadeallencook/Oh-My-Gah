import { OhMyGahPage } from './app.po';

describe('oh-my-gah App', () => {
  let page: OhMyGahPage;

  beforeEach(() => {
    page = new OhMyGahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
