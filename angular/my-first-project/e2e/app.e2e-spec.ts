import { MyFirstProjectPage } from './app.po';

describe('my-first-project App', () => {
  let page: MyFirstProjectPage;

  beforeEach(() => {
    page = new MyFirstProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
