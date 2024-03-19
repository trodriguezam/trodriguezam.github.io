
document.getElementById("dynamic-text-button").addEventListener("click", function (text) {
    var text = document.getElementById("dynamic-input").value;
    console.log(text)
    document.getElementById("dynamic-text-output").textContent = text;
})