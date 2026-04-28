import {expect,test} from '@playwright/test';
test("Interfact with frames",async ({page})=>{

    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("Total frames in the page are "+allframes.length);

    const myFrame = page.frame("firstFr");
    if (myFrame != null) {
        await myFrame.locator("input[name='fname']").fill("Nishita", {timeout: 5000});
        await myFrame.locator("input[name='lname']").fill("Poriya", {timeout: 5000});
        
        const resultText = await myFrame.locator("p.has-text-info").textContent();
        expect(resultText).toContain("You have entered");
    }

});

