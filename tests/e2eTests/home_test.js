import homePageModel from "./page_models/home_page_model";

fixture("eShopOnWeb Home Page").page(
  "https://192.168.2.217:5001/"
);

test("Verify home page loads properly", async t => {
  await t.expect(homePageModel.mainDiv.exists).ok();
});

