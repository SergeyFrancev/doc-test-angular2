import { UnitTestPage } from './app.po';

describe('unit-test App', function() {
  let page: UnitTestPage;

  beforeEach(() => {
    page = new UnitTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
