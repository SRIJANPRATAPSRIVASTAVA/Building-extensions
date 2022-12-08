// background script is the code that gets exe. as the you launch chrome 
// it listens for the events associated with the activity of using the chrome browser itself

console.log('background is running!!');


chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    // console.log('button clicked');
    // console.log(tab);
    let msg = {
        text : "hello"
    }
    chrome.tabs.sendMessage(tab.id,msg)
}