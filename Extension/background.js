// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {

    // first load jquery
    // for the current tab, inject the "payload.js" file & execute it
    /*chrome.tabs.executeScript(tab.ib, {
        file: 'payload.js'
    });
    */
   
    chrome.tabs.executeScript(null, { file: "Extension/jquery-3.4.1.min.js"}, function() {
        
            chrome.tabs.executeScript(null, { file: "payload.js" });


    });
    
    

});