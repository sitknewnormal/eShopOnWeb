import { Selector } from "testcafe";

class LoginPageModel {
  constructor() {
    this.emailInput = Selector("#Input_Email");
    this.passwordInput = Selector("#Input_Password");
    this.submitButton = Selector("body > div.esh-app-wrapper > div > div > div > section > form > div:nth-child(6) > button").withText("Log in"); 
    this.accountHeader = Selector("#logoutForm > section.esh-identity-section > div").withText("demouser@microsoft.com");
  }
}

export default new LoginPageModel();