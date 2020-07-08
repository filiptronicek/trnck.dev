const changingEl = document.getElementById("changingText");
const rankDiv = document.getElementById("rank");
const sponsorsDiv = document.getElementById("sponsors");

const me = {
  username: "filiptronicek"
};

const names = [
  "student",
  "web developer",
  "web designer",
  "gamer",
  "GitHub addict",
  "reporter",
  "coder",
  "sceptic",
  "editor",
  "data lover",
  "optimist",
  "blogger",
  "team leader",
  "memer",
  "Redditor",
  "perfectionist",
  "wannabe security expert",
  "Firefox user",
  "Apple enthusiast"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeText() {
  const randomText = names[Math.floor(Math.random() * names.length)];
  if (randomText) {
    const randomArray = randomText.split("");
    if (changingEl.innerText !== randomText && names.length > 0) {
      const index = names.indexOf(randomText);
      if (index > -1) {
        names.splice(index, 1);
      }
      changingEl.innerText = "";
      for (let character of randomArray) {
        changingEl.innerText += character;
        await sleep(200);
      }
    } else {
      changingEl.innerText = "";
      for (let character of "web developer") {
        changingEl.innerText += character;
        await sleep(200);
      }
    }
  }
  await sleep(1000);

  changeText();
}
function getRank() {
  const url = "https://commiters.now.sh/rank/czech_republic";

  fetch(url)
  .then(response => response.json())
  .then(res => {
    for(const user of res.users) {
      if(user.user.username === me.username) {
        rankDiv.innerText = `${user.rank}${user.rank === 1 ? "st" : user.rank === 2 ? "nd" : "th"}`;
      }
    }
  });
}
function getSponsors() {
  const url = `https://sponsors.trnck.dev/${me.username}/count`;
  fetch(url)
  .then(responce => responce.json())
  .then(res => {
    res = res.sponsors.count;
    sponsorsDiv.innerText = `${res} sponsor${res == 1 ? '' : 's'}`;
  });
}
getSponsors();
getRank();

setTimeout(changeText, 1000);

/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
