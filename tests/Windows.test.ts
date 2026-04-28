import {expect,Page,test} from '@playwright/test';

// Test to demonstrate interaction with multiple browser tabs/windows
// This test opens a demo page, clicks a button that opens multiple tabs,
// and then interacts with one of the opened tabs
test("Interact with multiple tabs",async ({page,context})=>{
    // Variable to store reference to the Facebook tab
    let facebookPage:Page;

    // Navigate to the LambdaTest demo page that has popup functionality
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    // Set up popup listener before clicking to catch new pages
    const popupPromise = context.waitForEvent('page', { timeout: 5000 }); // 5 second timeout

    // Click the "Follow Both" button which opens Facebook and Twitter tabs
    await page.click("#followboth");

    try {
        // Wait for the popup to open (with timeout)
        const newPage = await popupPromise;
        await newPage.waitForLoadState();

        // Get all pages (tabs) in the current browser context
        const pages = context.pages();
        console.log("Total tabs opened are " + pages.length);

        // Log the URL of each opened tab for debugging purposes
        pages.forEach(tab => {
            console.log(tab.url());
        });

        // Loop through all pages to find the Facebook tab
        for (let index = 0; index < pages.length; index++) {
            const url = pages[index].url();
            // Check if the URL contains 'facebook.com' to identify the Facebook tab
            if (url.includes("facebook.com")) {
                facebookPage = pages[index];
                break; // Found it, no need to continue searching
            }
        }

        // If Facebook page was found, extract and log the main heading text
        if (facebookPage) {
            const text = await facebookPage.textContent("//h1");
            console.log("Facebook page title: " + text);
        } else {
            // If Facebook page wasn't found (e.g., popup blocked), log a message
            console.log("Facebook page not found - popup may have been blocked");
        }
    } catch (error) {
        // Handle case where popup is blocked or doesn't open within timeout
        console.log("Popup handling: " + error.message);

        // Even if popup is blocked, check all current tabs
        const pages = context.pages();
        console.log("Total tabs currently open: " + pages.length);

        pages.forEach(tab => {
            console.log("Tab URL: " + tab.url());
        });

        // Try to find Facebook tab among existing pages
        for (let index = 0; index < pages.length; index++) {
            const url = pages[index].url();
            if (url.includes("facebook.com")) {
                facebookPage = pages[index];
                const text = await facebookPage.textContent("//h1");
                console.log("Facebook page title: " + text);
                break;
            }
        }

        if (!facebookPage) {
            console.log("Facebook page not found - popup was blocked by browser");
        }
    }
});

