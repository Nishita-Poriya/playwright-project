import {expect,test} from '@playwright/test';

/*
test('basic interaction test',async ({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');
    const messageInput=page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log("testing started> Scrolled to the message input field");

    console.log(await messageInput.getAttribute('placeholder'));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");

    console.log("before entering data"+ await messageInput.inputValue());
    await messageInput.type("Hi Nishita");
    console.log("after entering data"+ await messageInput.inputValue());

})
console.log("testing1 > entername is completed");

test('sum up',async ({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/');
    await page.waitForLoadState('networkidle');

    console.log("testing started> Scrolled to the message input field");

    const sum1input=page.locator("#sum1")
    const sum2input=page.locator("#sum2")

    const getValueBtn =page.locator("//button[text()='Get values']")
    let num1=121;
    let num2=546;

    await sum1input.fill(""+num1);
    await sum2input.fill(""+num2);
    await getValueBtn.click();
    const result=page.locator("#addmessage");
    expect(result).toHaveText("" +(num1 + num2))

})
*/

test("Checkbox", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckbox = page.locator('input[type="checkbox"]').first()
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();

})


