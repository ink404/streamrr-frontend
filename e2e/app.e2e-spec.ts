import { StreamrrPage } from './app.po';

describe('streamrr App', () => {
  let page: StreamrrPage;

  beforeEach(() => {
    page = new StreamrrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
