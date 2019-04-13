import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', () => {
    page.navigateTo();
    //browser.pause();
    expect(page.getParagraphText()).toEqual('Home Page');
  });

  it('should display about button', () => {
    page.navigateTo();
    page.getAboutButton().click();
    //browser.pause();
    expect(page.getAboutButton().getText()).toEqual('About');
  })

  it('should route to about button', () => {
    page.navigateTo();
    page.getAboutButton().click();
    //browser.pause();
    expect(page.getAboutText()).toEqual('About Page');
  })

});
