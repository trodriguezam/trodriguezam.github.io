
document.getElementById("button").addEventListener("click", function (text) {
    var text = document.getElementById("button-input").value;
    document.getElementById("dynamic-text").querySelector('p').innerText = text;
})