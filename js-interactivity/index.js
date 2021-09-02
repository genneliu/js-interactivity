const message = document.querySelector("aside");

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  // step 3
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
}

document.querySelector("form").addEventListener("submit", addMovie);

// step 3
function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = event.target.parentNode.textContent + " Deleted!";
  revealMessage(message);
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = event.target.textContent + " watched!";
  } else {
    message.textContent = event.target.textContent + " added back!";
  }
}

// // revealmessage
function revealMessage(message) {
  message.classList.remove("hide");
  setTimeout(function () {
    message.classList.add("hide");
  }, 1000);
}
