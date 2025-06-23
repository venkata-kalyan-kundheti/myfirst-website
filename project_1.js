const result = document.getElementById("result");
const button = document.getElementById("button");
const reset = document.getElementById("reset");
const bar = document.getElementById("luck-bar");
const progressContainer = document.querySelector(".progress-container");
const tip = document.getElementById("tip");
const share = document.getElementById("share");

let number = Math.floor(Math.random() * 100);
let clicked = false;

const tips = [
  "Stay positive. Great things take time!",
  "Your vibe attracts your tribe.",
  "Take the risk or lose the chance.",
  "Good things are coming your way!",
  "Make today ridiculously amazing.",
  "Luck is when preparation meets opportunity."
];

button.onclick = function () {
  if (clicked) return;
  clicked = true;

  result.className = "";
  result.textContent = "Calculating your luck... 🎰";
  tip.textContent = "";
  progressContainer.style.display = "none";
  bar.style.width = "0%";

  setTimeout(() => {
    progressContainer.style.display = "block";
    bar.style.width = number + "%";

    if (number < 30) {
      result.textContent = `🥲 Low Luck: ${number}% — try staying positive!`;
      result.classList.add("low");
    } else if (number < 60) {
      result.textContent = `😊 Moderate Luck: ${number}% — a balanced day!`;
      result.classList.add("mod");
    } else if (number < 80) {
      result.textContent = `😍 Great Luck: ${number}% — go chase your dreams!`;
      result.classList.add("great");
    } else {
      result.textContent = `💖 Epic Luck: ${number}% — jackpot vibes today!`;
      result.classList.add("high-score");
    }

    // Show a random tip
    tip.textContent = tips[Math.floor(Math.random() * tips.length)];
  }, 1200);
};

reset.onclick = function () {
  number = Math.floor(Math.random() * 100);
  clicked = false;
  result.textContent = "Click below to reveal your luck!";
  result.className = "";
  tip.textContent = "";
  progressContainer.style.display = "none";
  bar.style.width = "0%";
};

// Share on WhatsApp
share.onclick = function () {
  const shareText = `Hey! I checked my luck and it's ${number}%. Check yours here 👉 https://venkata-kalyan-kundheti.github.io/myfirst-website/`;
  const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  window.open(url, "_blank");
};
