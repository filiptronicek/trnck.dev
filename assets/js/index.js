import names from "./nicks.js";

const changingEl = document.getElementById("changingText");
const rankDiv = document.getElementById("rank");
const sponsorsDiv = document.getElementById("sponsors");
const commitSp = document.getElementById("commit");
const bandSp = document.getElementById("band");
const contributionMessage = document.getElementById("contribIntro");

/* Defer font awesome icons */
const fontAwesomeLink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
document.querySelector("head").innerHTML += fontAwesomeLink;

// "Borrowed" from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#using_options 

const ordinalPluralRules = new Intl.PluralRules('en-US', { type: 'ordinal' });

const ordinalSuffixes = new Map([
  ['one',   'st'],
  ['two',   'nd'],
  ['few',   'rd'],
  ['other', 'th'],
]);
const formatOrdinals = (number) => {
  const rule = ordinalPluralRules.select(number);
  const suffix = ordinalSuffixes.get(rule);
  return `${number}${suffix}`;
};

const me = {
  username: "filiptronicek",
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
          rankDiv.innerText = formatOrdinals(user.rank)
        }
      }
    });
}

function getSponsors() {
  const url = `https://ghs.vercel.app/count/${me.username}`;
  fetch(url)
    .then((response) => response.json())
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
    .then((response) => response.json())
    .then((res) => {
      commitSp.innerHTML = `<a href="https://github.com/filiptronicek/trnck.dev/commit/${
        res.data
      }" target="_blank" rel="noreferrer">${res.data.substring(0, 7)}</a>`;
    });
};

const getContributions = () => {
  const url = `/api/contribs?username=${me.username}`;
  const year = new Date().getFullYear();
  fetch(url)
  .then((response) => response.json())
  .then((res) => {
    let total = 0;
    for (const year of res.years) {
      total += year.total;
    }
    contributionMessage.innerHTML = `
      So far in ${year} I have made <strong>${res.years[0].total}</strong> contributions to Open Source (${total} in my lifetime)
    `;
  });
};

const getBand = () => {
  const url = `https://api.trnck.dev/bandwidth`;
  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      bandSp.innerText = res.result.humanReadable;
    });
};

const updateStuff = () => {
  getSponsors();
  getRank();
  //getBand();
  getContributions();
};

updateStuff();
getCommit();


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
  VanillaTilt.init(document.querySelectorAll("aside"), {
    max: 10,
    speed: 25
  });
}

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
