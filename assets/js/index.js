import names from "./nicks.js";

const changingEl = document.getElementById("changingText");
const rankDiv = document.getElementById("rank");
const sponsorsDiv = document.getElementById("sponsors");
const commitSp = document.getElementById("commit");
const bandSp = document.getElementById("band");

function formatBytes(bytes, decimals = 0) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const vercel = [27672562, 7091123363];

const sum = vercel.reduce((a, b) => a + b, 0);

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
      commitSp.innerHTML = `<a href="${
        res[0].html_url
      }" target="_blank" rel="noreferrer">${res[0].sha.substring(0, 7)}</a>`;
    });
};

const getBand = () => {
  const url = `https://api.trnck.dev/api/bandwith`;
  fetch(url)
    .then((responce) => responce.json())
    .then((res) => {
        bandSp.innerText = formatBytes(res.result.bytes + sum, 2);
    });
};

getCommit();
getSponsors();
getRank();
getBand();

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
