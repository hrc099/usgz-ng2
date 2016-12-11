import { Angular2CliLaganiniPage } from './app.po';

describe('angular2-cli-laganini App', function() {
  let page: Angular2CliLaganiniPage;

  beforeEach(() => {
    page = new Angular2CliLaganiniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
