const startDate = new Date("2025-07-23");
const totalDays = 11;
const funnyMessages = [
  "शानी झालीस का लय? 🫩",
  "आधी एक पप्पी दे!!😚",
  "मोठी हो, 2 ऑगस्ट नंतर!😅",
  "थांब की जरा,किती घाई!😏",
  "Oye hoye, Reva 😆",
  "Not now, Cutie 🕒",
  "Tsk tsk, Gangu 😜",
  "Patience, Queen 👑",
  "Locked 4 Reva 🔐"
];

const shuffledMessages = [...funnyMessages].sort(() => Math.random() - 0.5);
let lockedCount = 0;




const grid = document.getElementById("countdownGrid");

function formatDateToYMD(date) {
  return date.toISOString().split("T")[0];
}


const messageLetters = ["I", "❤️", "L", "O", "V", "E", "❤️", "Y", "O", "U", "❤️"];

for (let i = 0; i < totalDays; i++) {
   if (i === 10) continue;
  const tileDate = new Date(startDate);
  tileDate.setDate(tileDate.getDate() + i);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");

  const isBirthday = formatDateToYMD(tileDate) === "2025-08-02";
  const daysLeft = totalDays - i - 1;
  const letter = messageLetters[i] ?? "";

  tile.innerHTML = `
    <div class="tile-letter" style="font-size: 2.5rem; font-weight: bold; color: #e91e63;">
      ${letter === " " ? "&nbsp;" : letter}
    </div>
    <div class="tile-label">
      ${isBirthday ? "🎉 Happy Birthday! 🎉" : `${daysLeft} Day${daysLeft > 1 ? "s" : ""} to Go`}
    </div>
  `;

 // Unlock at 12:00 AM on tile's date
const now = new Date();
const unlockTime = new Date(tileDate);
unlockTime.setHours(0, 0, 0, 0);

if (now < unlockTime) {
 tile.classList.add("locked");

  const lockMsg = document.createElement("small");
  lockMsg.classList.add("locked-text");
  lockMsg.textContent = "🔒 Locked";

  // ✅ Assign rotating funny messages
  const msgIndex = lockedCount % shuffledMessages.length;
 lockMsg.setAttribute("data-tooltip", shuffledMessages[msgIndex]);
 lockedCount++;

  tile.appendChild(lockMsg);
}
else {
    tile.addEventListener("click", () => {
      let modal;

      if (i === 0) {
        modal = createModal(
          "Where it all began...",
          "day1-meeting.png",
          `It all began with a simple chat between my sister-in-law and your parents.<br>
No one knew then, but that small moment quietly stitched our worlds together. ✨<br><br>
A spark was lit… and destiny had already taken its first step.
`,
          "a_thousand_years.mp3"
        );
      } else if (i === 1) {
        modal = createModal(
          "The First 'Hi' 💬",
          "day2-chat.png",
          `10 May 2025 – Our very first conversation<br><br>
To be honest, I wasn’t that serious when we first started chatting —<br>
after going through 20 marriage prospects, I had stopped expecting much.<br><br>
But there was something different about that exchange…<br>
It wasn’t dramatic or poetic, but it lingered in my mind.<br>
Like I had just unknowingly typed my way into something beautiful.`,
          "bgm_day2.mp3"
        );
      } else if (i === 2) {
        modal = createModal(
          "The Rainy Call ☔📞",
          "day3-call-rain.png",
          `One of those quiet, magical nights,<br>
you stood on your balcony... and I, on my terrace.<br><br>
The rain whispered between us,<br>
long conversations turned into soft laughter,<br>
and somewhere between each drop —<br>
the drizzle became our love language.
.`,
          "bgm_day3.mp3"
        );
      } else if (i === 3) {
        modal = createModal(
          "The Rooftop Moment 🌆❤️",
          "day4-rooftop-meet.png",
          `15 May 2025 — The first time we met face-to-face...<br><br>
You had already arrived — your dad dropped you off, and there you were, in your white full-sleeved top, looking like a dream.<br><br>
I reached a little after, on my bike — nervous, excited, and smiling like a fool.<br><br>
We met, we smiled, and then we headed to that rooftop restaurant — softly lit, breezy, wrapped in quiet conversations.<br><br>
Among the food, laughter, and gentle stares, time simply paused.<br>
That evening didn’t feel like a first meeting... it felt like something that was always meant to be.
.`,
          "bgm_day4_rooftop.mp3"
        );
      } else if (i === 4) {
  modal = createModal(
    "When Our Worlds Met 🏡✨",
    "day6-family-meet.png",
    `22 May 2025 — The day your family visited mine...<br><br>
You in that beautiful saree, surrounded by your mom, dad, uncle, aunt, and mama — it was tradition, nerves, and grace all at once.<br><br>
My home was filled with smiles, teasing glances, and our little nephew dancing around the living room 😄<br><br>
That evening, our families didn’t just meet — they <i>clicked</i>. And so did my heart, a little more. ❤️`,
    "bgm_day6.mp3"
  );
} else if (i === 5) {
  modal = createModal(
    "The Pandit Prank 😂📞",
    "day5-pandit-prank.png",
    `I texted you, “There’s something <strong>serious</strong> I need to tell you… about what the pandit said regarding our kundali match.”<br><br>
    You got so worried, and I could feel the silence even before the call began.<br><br>
    And then — I hit you with it: “The pandit is the one who’s <strong>serious</strong>... he’s in the hospital!” 😂<br><br>
    That nervous laugh of yours afterwards? Worth everything. My first successful prank on you — and definitely not the last!`,
    "bgm_day5_funny.mp3"
  );
}
else if (i === 6) {
        modal = createModal(
          "The Final Yes 💍🏠",
          "day7-marriage-fixed.png",
          `31st May 2025 — The day we visited your home — my parents, my sister-in-law, brother, nephew, everyone…<br><br>
And there you were, with your mom, dad, uncle, aunt, and mama — all waiting with a mix of excitement and grace.<br><br>
That day, surrounded by our families and blessings, it was decided...<br><br>
<strong>We are getting married.</strong><br><br>
No big speeches, no drama — just love, smiles, and that overwhelming feeling that everything was falling into place. 🤍`
,
          "bgm_day7_marriage_fixed.mp3"
        );
      } else if (i === 7) {
        modal = createModal(
          "Our First Official Selfie 📸❤️",
          "day8-first-selfie.png",
         `This was it — our very first selfie after everything became official. 📸<br><br>
No nerves, just joy — your smile, my grin, and that spark in our eyes.<br><br>
It wasn’t just a photo, it was a snapshot of a new beginning...<br>
the beginning of <i>us</i>, captured with warmth, laughter, and so much love. ❤️<br><br>
That night, even the skies couldn’t hold back — it rained and rained, and we got drenched in it till 11 pm...<br>
But honestly, being stuck with you in that rain made it even more unforgettable. ☔💫`,
          "bgm_day8_selfie.mp3"
        );
      } else if (i === 8) {
        modal = createModal(
          "The Midnight Surprise 🎂🌙",
          "day9-birthday-surprise.png",
          `Just after midnight — the clock had barely struck 12 on 20 June 2025...<br><br>
          I came down from the terrace, walked into the house, and casually settled on the sofa — completely unaware of what was about to unfold.<br><br>
          Little did I know, you were already inside, quietly hiding in one of the bedrooms with a cake and a bouquet of flowers.<br><br>
          And then, you walked out — smiling, glowing, and carrying all the love in that surprise.<br><br>
          That moment... so unexpected, so genuine — it’s etched in my heart forever. 💐🎂`,
          "bgm_day9_midnight_surprise.mp3"
        );
      } else if (i === 9) {
        modal = createModal(
          "Practicing for Forever 💃🕺",
          "day10-dance-practice.png",
          `In that quiet studio with mirrors and wooden floors,<br><br>
          we stood side by side — a little awkward, a little shy.<br><br>
          Learning steps, missing beats, laughing over wrong moves — but always, always trying together.<br><br>
          With your cousin sisters teaching us lovingly, and us stealing glances in between,<br>
          this dance became more than just performance —<br>
          it became a rehearsal for forever. ❤️`,
          "bgm_day10.mp3"
        );
      } else if (i === 10) {
        modal = createModal(
          "Your Special Day, My Forever Gift 🎂💍",
          "day11-final.png",
          `2nd August 2025 — Your Birthday 🎉<br><br>
          The day the universe gifted me you. And this year, it’s even more magical...<br><br>
          Because tomorrow, on 3rd August, we take the first official step toward forever — our <strong>Engagement Day</strong> 💍<br><br>
          Thank you for being born. Thank you for choosing me. <br><br>
          I Love You, Reva. Today, tomorrow, and always. ❤️`,
          "bgm_day11_final.mp3"
        );
      }

      if (modal) document.body.appendChild(modal);
    });
  }

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
      <audio autoplay loop style="display:none;">
        <source src="${bgmSrc}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  `;

  modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());
  return modal;
}
