const startDate = new Date("2024-07-22"); // 11 days before Aug 2
const totalDays = 11;
const today = new Date();
const grid = document.getElementById("countdownGrid");

function formatDateToYMD(date) {
  return date.toISOString().split("T")[0];
}

const todayStr = formatDateToYMD(today);

// The 11-character romantic message for the tiles
const messageLetters = ["I", "❤️", "L", "O", "V", "E", "❤️", "Y", "O", "U", "❤️"];

for (let i = 0; i < totalDays; i++) {
  const tileDate = new Date(startDate);
  tileDate.setDate(tileDate.getDate() + i);
  const tileDateStr = formatDateToYMD(tileDate);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");

  const isBirthday = tileDateStr === "2024-08-02";
  const daysLeft = totalDays - i;
  const letter = messageLetters[i] ?? "";

  tile.innerHTML = `
    <div class="tile-letter" style="font-size: 2.5rem; font-weight: bold; color: #e91e63;">
      ${letter === " " ? "&nbsp;" : letter}
    </div>
    <div class="tile-label">
      ${isBirthday ? "🎉 Happy Birthday! 🎉" : `${daysLeft} Day${daysLeft > 1 ? "s" : ""} to Go`}
    </div>
  `;

  if (tileDateStr > todayStr) {
    tile.classList.add("locked");
    tile.innerHTML += `<small class="locked-text">🔒 Locked</small>`;
  } else {
    tile.addEventListener("click", () => {
      let modal;

      if (i === 0) {
        modal = createModal(
          "Where it all began...",
          "day1-meeting.png",
          `It all started when my sister-in-law met your parents. 
          A conversation that seemed casual led to a lifetime spark ✨<br><br>
          That day, unknowingly, our stars aligned.`,
          "a_thousand_years.mp3"
        );
      } else if (i === 1) {
        modal = createModal(
          "The First 'Hi' 💬",
          "day2-chat.png",
          `10 May 2025 — Our first ever conversation...<br><br>
          It wasn't grand or poetic, but it felt special. 
          Just knowing I was speaking to someone who’d matter so much one day.`,
          "bgm_day2.mp3"
        );
      } else if (i === 2) {
        modal = createModal(
          "The Rainy Call ☔📞",
          "day3-call-rain.png",
          `One of those calm nights, 
          you stood on your balcony and I stood on mine...<br><br>
          A gentle drizzle, long talks, soft laughs — 
          and just like that, rain became our love language.`,
          "bgm_day3.mp3"
        );
      } else if (i === 3) {
        modal = createModal(
          "The Rooftop Moment 🌆❤️",
          "day4-rooftop-meet.png",
          `The first time we met face-to-face...<br><br>
          You walked in wearing your white full-sleeved top, and I had just arrived on my bike — nervous but smiling.<br><br>
          We met at that rooftop restaurant — lit softly, breezy, and filled with quiet conversations.<br><br>
          Among the food, laughter, and gentle stares, time simply paused.<br>
          That evening didn’t feel like a first meeting... it felt like something that was always meant to be.`,
          "bgm_day4_rooftop.mp3"
        );
      } else if (i === 4) {
        modal = createModal(
          "The Pandit Prank 😂📞",
          "day5-pandit-prank.png",
          `I texted you, “There’s something <strong>serious</strong> I need to tell you… about what the pandit said regarding our kundali match.”<br><br>
          You got so worried, and I could feel the silence even before the call began.<br><br>
          And then — I hit you with it: “The pandit is the one who’s <strong>serious</strong>... he’s in the hospital!” 😂<br><br>
          That nervous laugh of yours afterwards? Worth everything. My first successful prank on you — and definitely not the last!`,
          "bgm_day5_funny.mp3"
        );
      } else if (i === 5) {
        modal = createModal(
          "When Our Worlds Met 🏡✨",
          "day6-family-meet.png",
          `The day your family visited mine...<br><br>
          You in that beautiful saree, surrounded by your mom, dad, uncle, aunt, and mama — it was tradition, nerves, and grace all at once.<br><br>
          My home was filled with smiles, teasing glances, and our little nephew dancing around the living room 😄<br><br>
          That evening, our families didn’t just meet — they <i>clicked</i>. And so did my heart, a little more. ❤️`,
          "bgm_day6.mp3"
        );
      } else if (i === 6) {
        modal = createModal(
          "The Final Yes 💍🏠",
          "day7-marriage-fixed.png",
          `The day we visited your home — my parents, my sister-in-law, brother, nephew, everyone…<br><br>
          And there you were, with your mom, dad, uncle, aunt, and mama — all waiting with a mix of excitement and grace.<br><br>
          That day, surrounded by our families and blessings, it was decided...<br><br>
          <strong>We are getting married.</strong><br><br>
          No big speeches, no drama — just love, smiles, and that overwhelming feeling that everything was falling into place. 🤍`,
          "bgm_day7_marriage_fixed.mp3"
        );
      } else if (i === 7) {
        modal = createModal(
          "Our First Official Selfie 📸❤️",
          "day8-first-selfie.png",
          `This was it — our very first selfie after everything became official. 📸<br><br>
          No nerves, just joy — your smile, my grin, and that spark in our eyes.<br><br>
          It wasn’t just a photo, it was a snapshot of a new beginning...<br>
          the beginning of <i>us</i>, captured with warmth, laughter, and so much love. ❤️`,
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
          "The Letter You Didn't Expect ✉️",
          "day11-letter.png",
          `I had written you a letter... not to impress, but to express.<br><br>
          A few pages filled with feelings I couldn't speak aloud —<br>
          about our journey, your laughter, and the peace you bring.<br><br>
          Maybe you'll read it someday, maybe you already did...<br>
          but I meant every word. 📝❤️`,
          "bgm_day11_letter.mp3"
        );
      } else if (i === 11) {
        modal = createModal(
          "The Countdown Ends 💝",
          "day12-final.png",
          `From day 1 to day 12 — it’s been a ride of memories, surprises, and smiles.<br><br>
          And today, I just want to say one thing, not through a tile but from my heart:<br><br>
          <strong>I Love You, Reva.</strong><br><br>
          Always have. Always will. 💫`,
          "bgm_day12_final.mp3"
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

  modal.querySelector(".close-btn").onclick = () => modal.remove();
  return modal;
}
