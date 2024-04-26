
// /html/body/div[1]/div[1]/div[2]/div/div[3]/div/div/div[2]/div[3]/div[2]/div[2]/button


while (true) {
    // Locate the button element using XPath
    var button = document.evaluate("/html/body/div[1]/div[1]/div[2]/div/div[3]/div/div/div[2]/div[3]/div[2]/div[2]/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    // Check if the button element is found
    if (button) {
        // Trigger a click event on the button
        button.click();
    } else {
        console.log("Button not found!");
    }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickButtonWithDelay() {
    // Locate the button element using XPath
    var button = document.evaluate("/html/body/div[1]/div[1]/div[2]/div/div[3]/div/div/div[2]/div[3]/div[2]/div[2]/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    // Check if the button element is found
    if (button) {
        // Trigger a click event on the button
        button.click();
    } else {
        console.log("Button not found!");
    }

    // Sleep for 4 seconds
    await sleep(4000);
}

// Run the loop with delay
async function runLoopWithDelay() {
    while (true) {
        // Click the button and wait for 4 seconds
        await clickButtonWithDelay();
    }
}

runLoopWithDelay(); // Start the loop

