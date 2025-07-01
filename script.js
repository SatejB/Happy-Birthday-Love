const startDate = new Date("2024-07-18");
const totalDays = 15;
const grid = document.getElementById("countdownGrid");
const today = new Date();
today.setHours(0, 0, 0, 0);

const surpriseMessages = [
  "Your smile is my favorite sunrise 🌅",
  "I still remember the first time I saw you 💫",
  "You make the world softer and brighter ✨",
  "If love is a song, you're my favorite verse 🎶",
  "Your laugh is music to my soul 🎵",
  "I can't wait to grow old with you 🕰️",
  "You're my home and my adventure 🏡❤️",
  "You deserve flowers every day 💐",
  "You’re my peace and my chaos 😇🔥",
  "I love your sleepy face 😴💕",
  "I’m proud to love you 💘",
  "You make ordinary moments magical ✨",
  "Forever doesn’t seem long enough with you ♾️",
  "You're more beautiful every day 🌹",
  "I wrote your name on the sky 🌌"
];

for (let i = 0; i < totalDays; i++) {
  const tileDate = new Date(startDate);
  tileDate.setDate(tileDate.getDate() + i);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");

  if (tileDate.toDateString() <= today.toDateString()) {
    const isBirthday = tileDate.toDateString() === new Date("2024-08-02").toDateString();
    const daysLeft = totalDays - i;

    tile.textContent = isBirthday
      ? "🎉 Happy Birthday! 🎉"
      : `${daysLeft} Day${daysLeft > 1 ? 's' : ''} to Go`;

    tile.addEventListener("click", () => {
      alert(surpriseMessages[i] || `Surprise! 💌`);
    });
  } else {
    tile.classList.add("locked");
    tile.textContent = `🔒 Locked`;
  }

  grid.appendChild(tile);
}