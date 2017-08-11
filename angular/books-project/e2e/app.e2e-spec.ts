import { BooksProjectPage } from './app.po';

describe('books-project App', () => {
  let page: BooksProjectPage;

  beforeEach(() => {
    page = new BooksProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
