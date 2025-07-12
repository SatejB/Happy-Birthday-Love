const totalDays = 10;
const birthday = new Date("2024-08-02");
const today = new Date();
const grid = document.getElementById("countdownGrid");

// Start 10 days before birthday
const startDate = new Date(birthday);
startDate.setDate(birthday.getDate() - totalDays);

function formatDateToYMD(date) {
  return date.toISOString().split("T")[0];
}

for (let i = 0; i < totalDays; i++) {
  const tileDate = new Date(startDate);
  tileDate.setDate(startDate.getDate() + i);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");

  const isBirthday = formatDateToYMD(tileDate) === formatDateToYMD(birthday);
  const daysLeft = totalDays - i;

  // Label
  tile.textContent = isBirthday
    ? "🎉 Happy Birthday! 🎉"
    : `${daysLeft} Day${daysLeft > 1 ? 's' : ''} to Go`;

  // Lock future tiles
  if (today < tileDate) {
    tile.classList.add("locked");
    tile.innerHTML += "<br><small>Locked 🔒</small>";
    grid.appendChild(tile);
    continue;
  }

  // Open tile logic
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
    }

    if (modal) document.body.appendChild(modal);
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
      <audio autoplay loop style="display:none;">
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
