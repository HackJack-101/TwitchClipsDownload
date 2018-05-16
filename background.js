chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(changeInfo);
    if (changeInfo.hasOwnProperty("status") && changeInfo.status === "complete") {
        chrome.tabs.executeScript(tabId, {
            file: "index.js",
        }, function() {
            console.log("Script loaded");
        });
    }
});