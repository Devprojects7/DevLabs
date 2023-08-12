document.addEventListener("DOMContentLoaded", function () {
    const htmlInput = document.querySelector("#txt1"); 
    const outputFrame = document.querySelector("#output-frame"); 

    htmlInput.addEventListener("input", function () {
        const htmlCode = htmlInput.value;
        const tempElement = document.createElement("div");
        tempElement.innerHTML = htmlCode;

        
        const scriptTags = tempElement.querySelectorAll("script");
        scriptTags.forEach((scriptTag) => {
            const script = document.createElement("script");
            script.innerHTML = scriptTag.innerHTML;
            outputFrame.contentDocument.body.appendChild(script);
        });

       
        const styleTags = tempElement.querySelectorAll("style");
        styleTags.forEach((styleTag) => {
            const style = document.createElement("style");
            style.innerHTML = styleTag.innerHTML;
            outputFrame.contentDocument.head.appendChild(style);
        });

       
        outputFrame.contentDocument.body.innerHTML = tempElement.innerHTML;
    });
});
