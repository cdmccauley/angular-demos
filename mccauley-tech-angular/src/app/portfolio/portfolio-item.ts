export class PortfolioItem {

  itemName: string;
  itemUrl: string;
  itemLandscapeUrl: string;
  itemPortraitUrl: string;

  constructor(name: string, url: string, landscapeUrl: string, portraitUrl: string) {
    this.itemName = name;
    this.itemUrl = url;
    this.itemLandscapeUrl = landscapeUrl;
    this. itemPortraitUrl = portraitUrl;
  }

  

}