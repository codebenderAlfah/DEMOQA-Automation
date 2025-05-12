import {test, expect} from '@playwright/test';
import * as fs from 'fs';
import BasePage from "../pages/base_page";
import ElementsPage from "../pages/elements_page";

const testData = JSON.parse(fs.readFileSync('data/testData.json', 'utf-8'));

test.describe('Elements Page Automation', () => {
    let basePage: BasePage;
    let elementsPage: ElementsPage;
    test.beforeEach(async ({page,baseURL}) => {
        basePage = new BasePage(page);
        elementsPage = new ElementsPage(page);
        await page.goto(baseURL);
        await basePage.verifyBasePage();
        await basePage.clickElementsBtn();
        await elementsPage.verifyElementsPage();
    });
    test('Elements Page - Verify Text boxes', async ({page}) => {
        await test.step('Click on Text Box section', async () => {
            await elementsPage.clickTextBoxBtn();
        });
        await test.step('Fill in the text boxes and submit the form', async () => {
            const {fullName, email, currentAddress, permanentAddress} = testData;
            await elementsPage.fillTextBoxForm(fullName, email, currentAddress, permanentAddress);
        });
        await test.step('Verify the submitted data', async () => {
            const {fullName, email, currentAddress, permanentAddress} = testData;
            await elementsPage.verifyTextBoxOutput(fullName, email, currentAddress, permanentAddress);
        });
    });
});
