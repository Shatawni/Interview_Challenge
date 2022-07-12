const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("submitBtn");
const commentSection = document.getElementById("comment");

const errorWords = [
  "zoom",
  "channel",
  "galvanize",
  "mcsp",
  "garrett",
  "ross",
  "incompetent",
  "unfunny",
];

button.addEventListener("click", function (e) {
  e.preventDefault();
  submitComment();
  input.value = "";
});

function submitComment() {
  const comment = document.createElement("div");
  comment.classList.add("eachComment");
  for (let i = 0; i < errorWords.length; i++) {
    let current = errorWords[i];
    if (current === input.value.toLowerCase()) {
      comment.textContent = current[0] + "----";
      commentSection.appendChild(comment);
      body.document.appendChild(commentSection);
    } else {
      comment.textContent = input.value;
      commentSection.appendChild(comment);
      body.document.appendChild(commentSection);
    }
  }
}
