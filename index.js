window.onload = function() {

    var button = document.querySelector(".Btn");
    var copyBtn = document.getElementById("copyBtn");


    function generateColor() {
            var randomColor = (Math.floor(Math.random()*16777216)).toString(16);
            console.log(randomColor)
            document.body.style.backgroundColor = "#" + randomColor;
            var text = document.getElementById("textDiv");
            text.innerText = "#" + randomColor;
    }

    button.addEventListener("click", function(){
        generateColor();
        copy();
    })

    copyBtn.addEventListener("click", function() {
        copy_to_clipboard();
        copied();
    })

    
    function copy_to_clipboard() {    
        var text = document.getElementById("textDiv").innerText;
        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");
        document.getElementById("textDiv").appendChild(createInput);
        createInput.value = text;
        createInput.select();
        document.execCommand('copy');
        document.getElementById("textDiv").removeChild(createInput);
    }

    function copied() {
        var copied = document.getElementById("copyBtn");
        copied.innerText="Copied!";
    }
    
    function copy() {
        var copy = document.getElementById("copyBtn");
        copy.innerText="Copy";
    }

}