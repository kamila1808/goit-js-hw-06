const input = document.querySelector("#font-size-control");
 const span = document.querySelector("#text");

input.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
    text.style.fontSize = `${event.target.value}px`;
}