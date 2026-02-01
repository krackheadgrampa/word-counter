const box = document.getElementById("textBox");
const display = document.getElementById("charCount");
const LIMIT = 50;

box.addEventListener("input", updateCount);

function updateCount() {
  let text = box.value;
  let len = text.length;

  if (len > LIMIT) {
    box.value = text.substring(0, LIMIT);
    len = LIMIT;
    box.classList.add("error");
    box.classList.remove("ok");
  } else {
    box.classList.add("ok");
    box.classList.remove("error");
  }

  showCount(len);
}

function showCount(num) {
  display.textContent = num;
}
