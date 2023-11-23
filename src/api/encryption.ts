


// This file is the background script

chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        if (request.action === "submitForm") {
            console.log("encryption.js got the message");

            sendResponse('goodbye');

        }
    }
);

