import loginPageModel from "./page_models/login_page_model";

fixture("eShopOnWeb Login").page(
  "https://192.168.2.217:5001/Identity/Account/Login"
);

test("User can log in to their account", async t => {
  await t
    .typeText(loginPageModel.emailInput, "demouser@microsoft.com")
    .typeText(loginPageModel.passwordInput, "Pass@word1")
    .click(loginPageModel.submitButton);

  await t.expect(loginPageModel.accountHeader.exists).ok();
});
