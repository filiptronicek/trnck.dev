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
  "Redditor",
  "perfectionist",
  "wannabe security expert"
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
      console.log(names);
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
