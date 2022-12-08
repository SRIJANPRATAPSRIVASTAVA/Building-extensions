// content script is the code that exe. after a webpages loads that can manipulate the actual content of webpage
console.log("Chrome extension ,ready to go!!");

// let paragraphs = document.getElementsByTagName('p');
// for (ele of paragraphs)
// {
//     ele.style['background-color'] = 'white'
//     ele.style['border-radius'] = '5px'
// }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.text);
  if (message.text === "hello") {
    let paragraphs = document.getElementsByTagName("p");
    for (ele of paragraphs) {
      ele.style["background-color"] = "white";
      ele.style["border-radius"] = "5px";
    }
  }
}
