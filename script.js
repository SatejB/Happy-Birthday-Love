
const startDate = new Date("2024-07-19");
const totalDays = 15;
const grid = document.getElementById("countdownGrid");
const today = new Date();
today.setHours(0, 0, 0, 0);

const surpriseMessages = [
  "Day 1: Your smile is my favorite sunrise 🌅",
  "Day 2: I still remember the first time I saw you 💫",
  "Day 3: You make the world softer and brighter ✨",
  "Day 4: If love is a song, you're my favorite verse 🎶",
  "Day 5: Your laugh is music to my soul 🎵",
  "Day 6: I can't wait to grow old with you 🕰️",
  "Day 7: You're my home and my adventure 🏡❤️",
  "Day 8: You deserve flowers every day 💐",
  "Day 9: You’re my peace and my chaos 😇🔥",
  "Day 10: I love your sleepy face 😴💕",
  "Day 11: I’m proud to love you 💘",
  "Day 12: You make ordinary moments magical ✨",
  "Day 13: Forever doesn’t seem long enough with you ♾️",
  "Day 14: You're more beautiful every day 🌹",
  "Day 15: I wrote your name on the sky 🌌"
];

for (let i = 0; i < totalDays; i++) {
  const tileDate = new Date(startDate);
  tileDate.setDate(tileDate.getDate() + i);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");

  if (tileDate.toDateString() <= today.toDateString()) {
    tile.textContent = `Day ${i + 1}`;
    tile.addEventListener("click", () => {
      alert(surpriseMessages[i] || `Surprise for Day ${i + 1}! 💌`);
    });
  } else {
    tile.classList.add("locked");
    tile.textContent = `Day ${i + 1} 🔒`;
  }

  grid.appendChild(tile);
}

