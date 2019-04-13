import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home h2')).getText();
  }

  getAboutButton(){
    return element(by.css('[routerlink="/about"]'));
  }

  getAboutText(){
    return element(by.css('app-about h2')).getText();
  }
}
