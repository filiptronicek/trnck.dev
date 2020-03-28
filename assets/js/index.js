const changingEl = document.getElementById("changingText");

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
  "Redditor"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeText() {
    const randomText = names[Math.floor(Math.random() * names.length)];
  const randomArray = randomText.split("");
  if (changingEl.innerText !== randomText) {
    changingEl.innerText = "";

    for (let character of randomArray) {
      changingEl.innerText += character;
      await sleep(200);
    }
  }
  await sleep(1000);

  changeText();
}
setTimeout(changeText, 1000);
