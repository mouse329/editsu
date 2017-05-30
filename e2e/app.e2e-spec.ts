import { EditSUPage } from './app.po';

describe('edit-su App', () => {
  let page: EditSUPage;

  beforeEach(() => {
    page = new EditSUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
