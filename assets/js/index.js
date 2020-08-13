const changingEl = document.getElementById("changingText");
const rankDiv = document.getElementById("rank");
const sponsorsDiv = document.getElementById("sponsors");
const commitSp = document.getElementById("commit");

const me = {
  username: "filiptronicek",
};

const names = [
  "student",
  "web developer",
  "web designer",
  "gamer",
  "GitHub addict",
  "coder",
  "sceptic",
  "editor",
  "data lover",
  "optimist",
  "blogger",
  "team leader",
  "perfectionist",
  "wannabe security expert",
  "Firefox user",
  "Apple enthusiast",
  "Open Source lover",
];

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
      sponsorsDiv.innerText = `${respData.count} sponsor${respData.count === 1 ? "" : "s"}`;
    });
}

const getCommit = () => {
  const url = `http://localhost:3000/api/commit`;
  fetch(url)
    .then((responce) => responce.json())
    .then((res) => {
      console.table(res);
        commitSp.innerHTML = res[0].sha.substring(0, 7);
    });
};
getCommit();
getSponsors();
getRank();

setTimeout(changeText, 1000);

/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
