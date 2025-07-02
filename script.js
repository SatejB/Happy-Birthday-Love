const startDate = new Date("2024-07-18");
const totalDays = 15;
const grid = document.getElementById("countdownGrid");

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

function formatDateToYMD(date) {
  return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
}

for (let i = 0; i < totalDays; i++) {
  const tileDate = new Date(startDate);
  tileDate.setDate(tileDate.getDate() + i);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");

  const isBirthday = formatDateToYMD(tileDate) === "2024-08-02";
  const daysLeft = totalDays - i;

  tile.textContent = isBirthday
    ? "🎉 Happy Birthday! 🎉"
    : `${daysLeft} Day${daysLeft > 1 ? 's' : ''} to Go`;

  tile.addEventListener("click", () => {
  if (i === 0) {
    // Day 1: Show custom image, message, and bgm
    const modal = document.createElement("div");
    modal.classList.add("custom-modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Where it all began...</h2>
        <img src="day1-meeting.png" alt="First step of destiny" class="modal-img"/>
        <p>
          It all started when my sister-in-law met your parents at PNG. 
          A conversation that seemed casual led to a lifetime spark ✨<br><br>
          That day, unknowingly, our stars aligned.
        </p>
        <audio controls autoplay>
          <source src="a_thousand_years.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-btn").onclick = () => {
      modal.remove();
    };
  } else {
    alert(surpriseMessages[i] || `Surprise! 💌`);
  }
});


  grid.appendChild(tile);
}
