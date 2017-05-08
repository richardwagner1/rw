import { AngularbasePage } from './app.po';

describe('angularbase App', () => {
  let page: AngularbasePage;

  beforeEach(() => {
    page = new AngularbasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
