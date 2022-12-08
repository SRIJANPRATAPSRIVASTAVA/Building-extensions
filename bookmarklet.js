(function () {
  console.log("Bookmarked");
  let paragraphs = document.getElementsByTagName("p");
  for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].innerHTML = "kitten";
  }
})();

// (function () {let script = document.createElement("script");script.src = "bookmarklet.js";document.body.appendChild(script);})();
        