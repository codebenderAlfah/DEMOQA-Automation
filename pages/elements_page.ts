import {expect, Page, Locator} from "@playwright/test";
import BasePage from "./base_page";

export default class ElementsPage extends BasePage {
    readonly elementsList;
    readonly textBoxBtn;
    readonly checkBoxBtn;
    readonly radioBtn;
    readonly webTablesBtn;
    readonly buttonsBtn;
    readonly linksBtn;
    readonly brokenLinksImagesBtn;
    readonly uploadAndDownloadBtn;
    readonly dynamicPropertiesBtn;
    readonly fullNameTxtBox;
    readonly emailTxtBox;
    readonly currentAddressTxtBox;
    readonly permanentAddressTxtBox;
    readonly submitBtn;
    readonly fullnameResult;
    readonly emailResult;
    readonly currentAddressResult;
    readonly permanentAddressResult;
    readonly expandAllcheckBoxBtn;
    readonly collapseAllcheckBoxBtn;
    readonly HomeCheckBox;
    readonly desktopCheckBox;
    readonly notesCheckBox;
    readonly commandsCheckBox;
    readonly documentCheckBox;
    readonly workspaceCheckBox;
    readonly reactCheckBox;
    readonly angularCheckBox;
    readonly veuCheckBox;
    readonly officeCheckBox;
    readonly publicCheckBox;
    readonly privateCheckBox;
    readonly classifiedCheckBox;
    readonly generalCheckBox;
    readonly downloadsCheckBox;
    readonly wordCheckBox;
    readonly excelCheckBox;
    readonly checkBoxResult;
    readonly YesRadioBtn;
    readonly impressiveRadioBtn;
    readonly noRadioBtn;
    readonly radioBtnResult;
    readonly searchBox;
    readonly searchResult;
    readonly searchNoResult;
    readonly addBtn;
    readonly editBtn;
    readonly deleteBtn;
    readonly RegFirstNametxtBox;
    readonly RegLastNametxtBox;
    readonly RegEmailtxtBox;
    readonly RegAgeTxtBox;
    readonly RegSalaryTxtBox;
    readonly RegDepartmentTxtBox;
    readonly regSubmitBtn;
    readonly doubleClickBtn;
    readonly rightClickBtn;
    readonly clickMeBtn;
    readonly doubleClickResult;
    readonly rightClickResult;
    readonly clickMeResult;
    readonly HomeLink;
    readonly homeozdOpLink;
    readonly createdLink;
    readonly noContentLink;
    readonly movedLink;
    readonly badRequestLink;
    readonly unauthorizedLink;
    readonly forbiddenLink;
    readonly notFoundLink;
    readonly createdResult;
    readonly noContentResult;
    readonly movedResult;
    readonly badRequestResult;
    readonly unauthorizedResult;
    readonly forbiddenResult;
    readonly notFoundResult;
    readonly brokenimage;
    readonly validlink;
    readonly brokenlink;
    readonly downloadBtn;
    readonly uploadBtn;
    readonly uploadResult;
    readonly randmonIdTxt;
    readonly delayedBtn;
    readonly colorChangeBtn;
    readonly colorChangeResult;
    readonly delayedvisiblebtn;

    constructor(page: Page) {
        super(page);
        this.elementsList = this.page.locator('.element-list.collapse.show');
        this.textBoxBtn = this.page.getByText('Text Box');
        this.checkBoxBtn = this.page.getByText('Check Box');
        this.radioBtn = this.page.getByText('Radio Button');
        this.webTablesBtn = this.page.getByText('Web Tables');
        this.buttonsBtn = this.page.getByText('Buttons');
        this.linksBtn = this.page.getByText('Links');
        this.brokenLinksImagesBtn = this.page.getByText('Broken Links - Images');
        this.uploadAndDownloadBtn = this.page.getByText('Upload and Download');
        this.dynamicPropertiesBtn = this.page.getByText('Dynamic Properties');
        this.fullNameTxtBox = this.page.locator('id=userName');
        this.emailTxtBox = this.page.locator('id=userEmail');
        this.currentAddressTxtBox = this.page.locator('id=currentAddress');
        this.permanentAddressTxtBox = this.page.locator('id=permanentAddress');
        this.submitBtn = this.page.getByText('Submit');
        this.fullnameResult = this.page.locator('#name');
        this.emailResult = this.page.locator('#email');
        this.currentAddressResult = this.page.locator('#currentAddress');
        this.permanentAddressResult = this.page.locator('#permanentAddress');
        this.expandAllcheckBoxBtn = this.page.getByText('Expand all');
        this.collapseAllcheckBoxBtn = this.page.getByText('Collapse all');
        this.HomeCheckBox = this.page.locator('label[for=tree-node-home]');
        this.desktopCheckBox = this.page.locator('label[for=tree-node-desktop]');
        this.notesCheckBox = this.page.locator('label[for=tree-node-notes]');
        this.commandsCheckBox = this.page.locator('label[for=tree-node-commands]');
        this.documentCheckBox = this.page.locator('label[for=tree-node-documents]');
        this.workspaceCheckBox = this.page.locator('label[for=tree-node-workspace]');
        this.reactCheckBox = this.page.locator('label[for=tree-node-react]');
        this.angularCheckBox = this.page.locator('label[for=tree-node-angular]');
        this.veuCheckBox = this.page.locator('label[for=tree-node-veu]');
        this.officeCheckBox = this.page.locator('label[for=tree-node-office]');
        this.publicCheckBox = this.page.locator('label[for=tree-node-public]');
        this.privateCheckBox = this.page.locator('label[for=tree-node-private]');
        this.classifiedCheckBox = this.page.locator('label[for=tree-node-classified]');
        this.generalCheckBox = this.page.locator('label[for=tree-node-general]');
        this.downloadsCheckBox = this.page.locator('label[for=tree-node-downloads]');
        this.wordCheckBox = this.page.locator('label[for=tree-node-wordFile]');
        this.excelCheckBox = this.page.locator('label[for=tree-node-excelFile]');
        this.checkBoxResult = this.page.locator('.text-success');
        this.YesRadioBtn = this.page.locator('label[for=yesRadio]');
        this.impressiveRadioBtn = this.page.locator('label[for=impressiveRadio]');
        this.noRadioBtn = this.page.locator('label[for=noRadio]');
        this.radioBtnResult = this.page.locator('.text-success');
        this.searchBox = this.page.locator('id=searchBox');
        this.searchResult = this.page.locator('.rct-title');
        this.searchNoResult = this.page.locator('.text-success');
        this.addBtn = this.page.getByText('Add');
        this.editBtn = this.page.getByText('Edit');
        this.deleteBtn = this.page.getByText('Delete');
        this.RegFirstNametxtBox = this.page.locator('id=firstName');
        this.RegLastNametxtBox = this.page.locator('id=lastName');
        this.RegEmailtxtBox = this.page.locator('id=userEmail');
        this.RegAgeTxtBox = this.page.locator('id=age');
        this.RegSalaryTxtBox = this.page.locator('id=salary');
        this.RegDepartmentTxtBox = this.page.locator('id=department');
        this.regSubmitBtn = this.page.getByText('Submit');
        this.doubleClickBtn = this.page.locator('id=doubleClickBtn');
        this.rightClickBtn = this.page.locator('id=rightClickBtn');
        this.clickMeBtn = this.page.locator('xpath=//button[text()="Click Me"]');
        this.doubleClickResult = this.page.locator('#doubleClickMessage');
        this.rightClickResult = this.page.locator('#rightClickMessage');
        this.clickMeResult = this.page.locator('#dynamicClickMessage');
        this.HomeLink = this.page.locator('xpath=//a[text()="Home"]');
        this.homeozdOpLink = this.page.locator('xpath=//a[text()="Home"]');
        this.createdLink = this.page.locator('xpath=//a[text()="Created"]');
        this.noContentLink = this.page.locator('xpath=//a[text()="No Content"]');
        this.movedLink = this.page.locator('xpath=//a[text()="Moved"]');
        this.badRequestLink = this.page.locator('xpath=//a[text()="Bad Request"]');
        this.unauthorizedLink = this.page.locator('xpath=//a[text()="Unauthorized"]');
        this.forbiddenLink = this.page.locator('xpath=//a[text()="Forbidden"]');
        this.notFoundLink = this.page.locator('xpath=//a[text()="Not Found"]');
        this.createdResult = this.page.locator('#linkResponse');
        this.noContentResult = this.page.locator('#linkResponse');
        this.movedResult = this.page.locator('#linkResponse');
        this.badRequestResult = this.page.locator('#linkResponse');
        this.unauthorizedResult = this.page.locator('#linkResponse');
        this.forbiddenResult = this.page.locator('#linkResponse');
        this.notFoundResult = this.page.locator('#linkResponse');
        this.brokenimage = this.page.locator('xpath=//img[@src="images/Toolsqa.jpg"]');
        this.validlink = this.page.locator('xpath=//a[@href="https://demoqa.com"]');
        this.brokenlink = this.page.locator('xpath=//a[@href="https://demoqa.com/invalid-url"]');
        this.downloadBtn = this.page.locator('id=downloadButton');
        this.uploadBtn = this.page.locator('id=uploadFile');
        this.uploadResult = this.page.locator('id=uploadedFilePath');
        this.randmonIdTxt = this.page.locator('id=randomId');
        this.delayedBtn = this.page.locator('id=enableAfter');
        this.colorChangeBtn = this.page.locator('id=colorChange');
        this.colorChangeResult = this.page.locator('#colorChange');
        this.delayedvisiblebtn = this.page.locator('id=visibleAfter');
    }

    async verifyElementsPage() {
        await this.elementsList.waitFor({state: 'visible', timeout: 10000});
        await expect(this.elementsList).toBeVisible({timeout: 10000});
    }

    async clickTextBoxBtn() {
        await this.textBoxBtn.click();
        await this.fullNameTxtBox.waitFor({state: 'visible', timeout: 10000});
        await expect(this.fullNameTxtBox).toBeVisible({timeout: 10000});
    }

    async enterFullName(fullName: string) {
        await this.fullNameTxtBox.fill(fullName);
    }

    async enterEmail(email: string) {
        await this.emailTxtBox.fill(email);
    }

    async enterCurrentAddress(currentAddress: string) {
        await this.currentAddressTxtBox.fill(currentAddress);
    }

    async enterPermanentAddress(permanentAddress: string) {
        await this.permanentAddressTxtBox.fill(permanentAddress);
    }
    async clickSubmitBtn() {
        await this.submitBtn.click();
    }
    async fillTextBoxForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.enterFullName(fullName);
        await this.enterEmail(email);
        await this.enterCurrentAddress(currentAddress);
        await this.enterPermanentAddress(permanentAddress);
        await this.clickSubmitBtn();
    }
    async verifyFullName(fullName: string) {
        await expect(this.fullnameResult).toHaveText(`Name:${fullName}`);
    }
    async verifyEmail(email: string) {
        await expect(this.emailResult).toHaveText(`Email:${email}`,);
    }
    async verifyCurrentAddress(currentAddress: string) {
        await expect(this.currentAddressResult).toHaveText(`Current Address :${currentAddress}`);
    }
    async verifyPermanentAddress(permanentAddress: string) {
        await expect(this.permanentAddressResult).toHaveText(`Permanent Address :${permanentAddress}`);
    }
    async verifyTextBoxOutput(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.verifyFullName(fullName);
        await this.verifyEmail(email);
        await this.verifyCurrentAddress(currentAddress);
        await this.verifyPermanentAddress(permanentAddress);
    }
}
