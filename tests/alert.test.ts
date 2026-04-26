import {expect,test} from '@playwright/test';
test("handling assertions",async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog",async (alert)=>{
        const text=alert.defaultValue();
        console.log(text);
        //await alert.accept("Nishita");
    });

   // await page.locator("button:has-text('Click Me')").nth(2).click();
    //expect(page.locator("#prompt-demo")).toHaveText("Nishita' !")
})