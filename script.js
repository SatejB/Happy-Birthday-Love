
const startDate = new Date("2024-07-18");
const totalDays = 15;
const grid = document.getElementById("countdownGrid");
const today = new Date();
today.setHours(0, 0, 0, 0);

const surpriseMessages = [
  "Your smile is my favorite sunrise ðŸŒ…",
  "I still remember the first time I saw you ðŸ’«",
  "You make the world softer and brighter âœ¨",
  "If love is a song, you're my favorite verse ðŸŽ¶",
  "Your laugh is music to my soul ðŸŽµ",
  "I can't wait to grow old with you ðŸ•°ï¸",
  "You're my home and my adventure ðŸ¡â¤ï¸",
  "You deserve flowers every day ðŸ’",
  "Youâ€™re my peace and my chaos ðŸ˜‡ðŸ”¥",
  "I love your sleepy face ðŸ˜´ðŸ’•",
  "Iâ€™m proud to love you ðŸ’˜",
  "You make ordinary moments magical âœ¨",
  "Forever doesnâ€™t seem long enough with you â™¾ï¸",
  "You're more beautiful every day ðŸŒ¹",
  "I wrote your name on the sky ðŸŒŒ"
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
      ? "ðŸŽ‰ Happy Birthday! ðŸŽ‰"
      : \`\${daysLeft} Day\${daysLeft > 1 ? 's' : ''} to Go\`;

    tile.addEventListener("click", () => {
      alert(surpriseMessages[i] || \`Surprise! ðŸ’Œ\`);
    });
  } else {
    tile.classList.add("locked");
    tile.textContent = \`ðŸ”’ Locked\`;
  }

  grid.appendChild(tile);
}