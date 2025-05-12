import {expect, Locator, Page} from "@playwright/test";

export default class BasePage {
    readonly page: Page;
    readonly headerImg: Locator;
    readonly elementsBtn: Locator;
    readonly formsBtn: Locator;
    readonly alertFrameWindowsBtn: Locator;
    readonly widgetBtn: Locator;
    readonly interactionsBtn: Locator;
    readonly bookStoreBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerImg = this.page.locator('//img[@src=\'/images/Toolsqa.jpg\']');
        this.elementsBtn = this.page.getByText('Elements');
        this.formsBtn = this.page.getByText('Forms');
        this.alertFrameWindowsBtn = this.page.getByText('Alerts, Frame & Windows');
        this.widgetBtn = this.page.getByText('Widgets');
        this.interactionsBtn = this.page.getByText('Interactions');
        this.bookStoreBtn = this.page.getByText('Book Store Application');
    }

    async clickElementsBtn() {
        await this.elementsBtn.click();
    }
    async clickFormsBtn() {
        await this.formsBtn.click();
    }
    async clickAlertFrameWindowsBtn() {
        await this.alertFrameWindowsBtn.click();
    }
    async clickWidgetBtn() {
        await this.widgetBtn.click();
    }
    async clickInteractionsBtn() {
        await this.interactionsBtn.click();
    }
    async clickBookStoreBtn() {
        await this.bookStoreBtn.click();
    }
    async clickHeaderImg() {
        await this.headerImg.click();
    }
    async verifyBasePage() {
        await expect(this.headerImg).toBeVisible({timeout: 10000});
    }
}
