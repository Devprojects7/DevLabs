const htmlCodeInput = document.getElementById("html-code");
const cssCodeInput = document.getElementById("css-code");
const jsCodeInput = document.getElementById("javascript-code");
const outputFrame = document.getElementById("output");


htmlCodeInput.value = localStorage.getItem("htmlCode") || "";
cssCodeInput.value = localStorage.getItem("cssCode") || "";
jsCodeInput.value = localStorage.getItem("jsCode") || "";

function run() {
    const htmlCode = htmlCodeInput.value;
    const cssCode = cssCodeInput.value;
    const jsCode = jsCodeInput.value;

    outputFrame.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outputFrame.contentWindow.eval(jsCode);
}

document.getElementById("run-button").addEventListener("click", run);

document.getElementById("refresh-button").addEventListener("click", function () {
    htmlCodeInput.value = "";
    cssCodeInput.value = "";
    jsCodeInput.value = "";
    outputFrame.contentDocument.body.innerHTML = "";
});

document.getElementById("save-button").addEventListener("click", function () {
    const htmlContent = htmlCodeInput.value;
    const cssContent = cssCodeInput.value;
    const jsContent = jsCodeInput.value;

    const htmlBlob = new Blob([htmlContent], { type: "text/html" });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const htmlLink = document.createElement("a");
    htmlLink.href = htmlUrl;
    htmlLink.download = "index.html";
    htmlLink.click();

    const cssBlob = new Blob([cssContent], { type: "text/css" });
    const cssUrl = URL.createObjectURL(cssBlob);
    const cssLink = document.createElement("a");
    cssLink.href = cssUrl;
    cssLink.download = "styles.css";
    cssLink.click();

    const jsBlob = new Blob([jsContent], { type: "application/javascript" });
    const jsUrl = URL.createObjectURL(jsBlob);
    const jsLink = document.createElement("a");
    jsLink.href = jsUrl;
    jsLink.download = "script.js";
    jsLink.click();
});


htmlCodeInput.addEventListener("input", function () {
    localStorage.setItem("htmlCode", htmlCodeInput.value);
});

cssCodeInput.addEventListener("input", function () {
    localStorage.setItem("cssCode", cssCodeInput.value);
});

jsCodeInput.addEventListener("input", function () {
    localStorage.setItem("jsCode", jsCodeInput.value);
});


document.getElementById("run-button").addEventListener("click", function() {
    const outputSection = document.querySelector(".right");
    const iframe = document.getElementById("output");
    outputSection.scrollIntoView({ behavior: "smooth" });

    
    iframe.onload = function() {
        outputSection.scrollIntoView({ behavior: "smooth" });
    };
});


