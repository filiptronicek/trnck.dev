import names from "./nicks.js";

const changingEl = document.getElementById("changingText");
const rankDiv = document.getElementById("rank");
const sponsorsDiv = document.getElementById("sponsors");
const commitSp = document.getElementById("commit");
const bandSp = document.getElementById("band");

const me = {
  username: "filiptronicek",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
      for (const character of randomArray) {
        changingEl.innerText += character;
        await sleep(200);
      }
    } else {
      changingEl.innerText = "";
      for (const character of "web developer") {
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
    .then((response) => response.json())
    .then((res) => {
      for (const user of res.users.users) {
        if (user.login === me.username) {
          rankDiv.innerText = `${user.rank}${
            user.rank === 1 ? "st" : user.rank === 2 ? "nd" : "th"
          }`;
        }
      }
    });
}
function getSponsors() {
  const url = `https://sponsors.trnck.dev/${me.username}/count`;
  fetch(url)
    .then((responce) => responce.json())
    .then((res) => {
      const respData = res.sponsors;
      sponsorsDiv.innerText = `${respData.count} sponsor${
        respData.count === 1 ? "" : "s"
      }`;
    });
}

const getCommit = () => {
  const url = `/api/commit`;
  fetch(url)
    .then((responce) => responce.json())
    .then((res) => {
      commitSp.innerHTML = `<a href="https://github.com/filiptronicek/trnck.dev/commit/${
        res.data
      }" target="_blank" rel="noreferrer">${res.data.substring(0, 7)}</a>`;
    });
};

const getBand = () => {
  const url = `https://api.trnck.dev/bandwidth`;
  fetch(url)
    .then((responce) => responce.json())
    .then((res) => {
      bandSp.innerText = res.result.humanReadable;
    });
};

const updateStuff = () => {
  getSponsors();
  getRank();
  getBand();
};

updateStuff();
getCommit();

setInterval(() => {
  updateStuff();
}, 600000);

setTimeout(changeText, 1000);

/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
