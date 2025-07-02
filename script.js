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
      // Day 1: Sister-in-law meets parents
      const modal = createModal(
        "Where it all began...",
        "day1-meeting.png",
        `It all started when my sister-in-law met your parents. 
        A conversation that seemed casual led to a lifetime spark ✨<br><br>
        That day, unknowingly, our stars aligned.`,
        "a_thousand_years.mp3"
      );
      document.body.appendChild(modal);
    } else if (i === 1) {
      // Day 2: First WhatsApp conversation
      const modal = createModal(
        "The First 'Hi' 💬",
        "day2-chat.png",
        `10 May 2025 — Our first ever conversation...<br><br>
        It wasn't grand or poetic, but it felt special. 
        Just knowing I was speaking to someone who’d matter so much one day.`,
        "bgm_day2.mp3"
      );
      document.body.appendChild(modal);
    } else if (i === 2) {
      // Day 3: Late night call in light rain
      const modal = createModal(
        "The Rainy Call ☔📞",
        "day3-call-rain.png",
        `One of those calm nights, 
        you stood on your balcony and I stood on mine...<br><br>
        A gentle drizzle, long talks, soft laughs — 
        and just like that, rain became our love language.`,
        "bgm_day3.mp3"
      );
      document.body.appendChild(modal);
    } else if (i === 3) {
  // Day 4: Pandit Prank Call
  const modal = createModal(
    "The Pandit Prank 😂📞",
    "day4-pandit-prank.png",
    `I texted you, “There’s something serious I need to tell you… about what the pandit said regarding our kundali match.”<br><br>
You got so worried, and I could feel the silence even before the call began.<br><br>
And then — I hit you with it: “The pandit is the one who’s serious... he’s in the hospital!” 😂<br><br>
That nervous laugh of yours afterwards? Worth everything. My first successful prank on you — and definitely not the last!
`,
    "bgm_day4_funny.mp3"
  );
  document.body.appendChild(modal);
}
 else {
      alert(surpriseMessages[i] || `Surprise! 💌`);
    }
  });

  grid.appendChild(tile);
}

function createModal(title, imageSrc, message, bgmSrc) {
  const modal = document.createElement("div");
  modal.classList.add("custom-modal");

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>${title}</h2>
      <img src="${imageSrc}" alt="${title}" class="modal-img"/>
      <p>${message}</p>
      <audio autoplay loop>
        <source src="${bgmSrc}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  `;

  modal.querySelector(".close-btn").onclick = () => {
    modal.remove();
  };

  return modal;
}

