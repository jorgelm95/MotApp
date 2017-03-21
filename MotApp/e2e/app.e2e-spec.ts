import { MotAppPage } from './app.po';

describe('mot-app App', function() {
  let page: MotAppPage;

  beforeEach(() => {
    page = new MotAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
