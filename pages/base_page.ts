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

    /**
     * Constructor for the BasePage class.
     * @param page Playwright Page object.
     */
    constructor(page: Page) {
        this.page = page;
        // TODO: This XPath locator is specific and might be brittle if the image src changes. Consider a more resilient locator if possible, e.g., by using a test ID or a less specific attribute.
        this.headerImg = this.page.locator('//img[@src=\'/images/Toolsqa.jpg\']');
        this.elementsBtn = this.page.getByText('Elements');
        this.formsBtn = this.page.getByText('Forms');
        this.alertFrameWindowsBtn = this.page.getByText('Alerts, Frame & Windows');
        this.widgetBtn = this.page.getByText('Widgets');
        this.interactionsBtn = this.page.getByText('Interactions');
        this.bookStoreBtn = this.page.getByText('Book Store Application');
    }

    /**
     * Clicks the Elements button.
     */
    async clickElementsBtn() {
        await this.elementsBtn.click();
    }

    /**
     * Clicks the Forms button.
     */
    async clickFormsBtn() {
        await this.formsBtn.click();
    }

    /**
     * Clicks the Alerts, Frame & Windows button.
     */
    async clickAlertFrameWindowsBtn() {
        await this.alertFrameWindowsBtn.click();
    }

    /**
     * Clicks the Widgets button.
     */
    async clickWidgetBtn() {
        await this.widgetBtn.click();
    }

    /**
     * Clicks the Interactions button.
     */
    async clickInteractionsBtn() {
        await this.interactionsBtn.click();
    }

    /**
     * Clicks the Book Store Application button.
     */
    async clickBookStoreBtn() {
        await this.bookStoreBtn.click();
    }

    /**
     * Clicks the header image.
     */
    async clickHeaderImg() {
        await this.headerImg.click();
    }

    /**
     * Verifies that the base page is loaded by checking if the header image is visible.
     */
    async verifyBasePage() {
        await expect(this.headerImg).toBeVisible({timeout: 10000});
    }
}
