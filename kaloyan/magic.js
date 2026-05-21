const mushroomBtn = document.getElementById("magicMushroomBtn");
const mushroomGame = document.getElementById("mushroomGame");
const mushroomClicker = document.getElementById("mushroomClicker");
const scoreDisplay = document.getElementById("score");
const upgradeBtn = document.getElementById("upgradeBtn");
const megaUpgradeBtn = document.getElementById("megaUpgradeBtn");

let score = 0;
let autoTrips = 0;
let upgradeCost = 10;
let megaUpgradeCost = 100;
let megaTrips = 0;

/* OPEN/CLOSE */

mushroomBtn.onclick = () => {

  if(mushroomGame.style.display === "block"){
    mushroomGame.style.display = "none";
  } else {
    mushroomGame.style.display = "block";
  }

};

/* CLICK */

mushroomClicker.onclick = () => {

  score++;
  updateDisplay();

};

/* UPGRADE */

upgradeBtn.onclick = () => {

  if(score >= upgradeCost){

    score -= upgradeCost;

    autoTrips+=0.1;

    upgradeCost = Math.floor(upgradeCost * 1.1);

    updateDisplay();

  }

};
/* MEGA UPGRADE */

megaUpgradeBtn.onclick = () => {

  if(score >= megaUpgradeCost){

    score -= megaUpgradeCost;

    megaTrips += 1;

    megaUpgradeCost = Math.floor(megaUpgradeCost * 1.3);

    updateDisplay();

  }

};

/* AUTO SCORE */

setInterval(() => {

  score += autoTrips;
  score += megaTrips;

  updateDisplay();

}, 1000);

/* UPDATE UI */

function updateDisplay(){

  scoreDisplay.innerText = score.toFixed(1);

  upgradeBtn.innerText =
    `Buy Auto Trip (Cost: ${upgradeCost})`;

  megaUpgradeBtn.innerText =
    `Buy Shroom Farm (Cost: ${megaUpgradeCost})`;

}
// magic mush e peak
