import homePageModel from "./page_models/home_page_model";

fixture("eShopOnWeb Use Case 03").page(
  "https://192.168.2.217:5001/"
);

test("The filter returned the right number of items", async t => {
    await t.click(homePageModel.brandFilter)
        .click(homePageModel.brandFilterOption.withText(".NET"))
        .click(homePageModel.applyFilter)
        .expect(homePageModel.filterResult.withText("Showing 6 of 6 products - Page 1 - 1").exists).ok();
});
