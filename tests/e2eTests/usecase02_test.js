import homePageModel from "./page_models/home_page_model";

fixture("eShopOnWeb Use Case 02").page(
  "https://192.168.2.217:5001/"
);

test("Brand filter is clickable and there is '.NET' option", async t => {
    await t.click(homePageModel.brandFilter)
        .click(homePageModel.brandFilterOption.withText(".NET"));
});
