import {test} from '@playwright/test';

test("Handling dropdown ",async ({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo",{
        //label:"Friday",
      //  value:"Tuesday",
      index:5
    })

    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select",[
        {
            label:"Florida"
        },{
            index:2
        }, {
            value:"Washington"
        }
    ])

})

    test.only("Bootatrap dropdown",async ({page})=>{
        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
        await selectCountry("India");
        await page.waitForTimeout(3000);
        await selectCountry("Denmark");
        await page.waitForTimeout(3000);
        await selectCountry("Finland");
          await page.waitForTimeout(3000);


        async function selectCountry(countryName:string){
            await page.click("#country+span");
            await page.locator("#ul#select2-country-results")
            .locator("li",{
                hasText:countryName
            }).click();

        }

    })
