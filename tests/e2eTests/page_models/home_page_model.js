import { Selector } from "testcafe";

class HomePageModel {
  constructor() {
    this.mainDiv = Selector("body > div.esh-app-wrapper");
    this.brandFilter = Selector("#CatalogModel_BrandFilterApplied");
    this.brandFilterOption = this.brandFilter.find("option");
    this.applyFilter = Selector("body > div.esh-app-wrapper > section.esh-catalog-filters > div > form > input");
    this.filterResult = Selector("body > div.esh-app-wrapper > div > div:nth-child(1) > div > article > nav > div.col-md-8.col-xs-12 > span");
  }
}

export default new HomePageModel();
