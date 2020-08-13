const jokeDiv = document.getElementById("joke");

function getJokeOfTheDay() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      jokeDiv.innerText = JSON.parse(this.responseText).setup;
      jokeDiv.innerHTML += `<br><span class="punchline">${
          JSON.parse(this.responseText).punchline}</span>`;
    }
  };
  xhttp.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/official-joke-api.appspot.com/jokes/random",
      true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}

getJokeOfTheDay();
