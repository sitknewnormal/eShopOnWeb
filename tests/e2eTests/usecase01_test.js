import homePageModel from "./page_models/home_page_model";

fixture("eShopOnWeb Use Case 01").page(
  "https://192.168.2.217:5001/"
);

test("Brand filter exits", async t => {
  await t.expect(homePageModel.brandFilter.exists).ok();
});
