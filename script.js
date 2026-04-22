/* ENTER */
function enterSite() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("music").play();
  startTyping();
}

/* MESSAGE */
const message = `Welcome to 20s 💖

No more teenage excuses...
Still my partner in crime 😜

Happy Birthday 🎂✨`;

let i = 0;
let done = false;

function startTyping() {
  function type() {
    if (i < message.length) {
      document.getElementById("messageText").innerHTML += message[i];
      i++;
      setTimeout(type, 40);
    } else {
      done = true;
    }
  }
  type();
}

/* PAGES */
let pages = [
  "magazine/pages/page1.jpg",
  "magazine/pages/page2.jpg",
  "magazine/pages/page3.jpg",
  "magazine/pages/page4.jpg",
  "magazine/pages/page5.jpg"
];

let current = 0;
let started = false;
const page = document.getElementById("page");

document.addEventListener("click", handleClick);

function handleClick() {
  if (!done) return;

  if (!started) {
    started = true;
    document.getElementById("messageBox").style.display = "none";
    document.getElementById("bookContainer").style.display = "flex";
    return;
  }

  page.style.opacity = 0;

  setTimeout(() => {
    current++;

    if (current < pages.length) {
      page.src = pages[current];
      page.style.opacity = 1;
    } else {
      document.getElementById("bookContainer").style.display = "none";
      document.getElementById("journeyContainer").style.display = "flex";
      document.removeEventListener("click", handleClick);
    }
  }, 500);
}

/* Video Start */
function startJourney() {
  document.getElementById("journeyContainer").style.display = "none";
  document.getElementById("videoContainer").style.display = "flex";
  document.getElementById("birthdayVideo").play();
}

/* 💖 SHOW SPECIAL (CLICK BASED FLOW) */
function showSpecial() {
  document.getElementById("videoContainer").style.display = "none";
  document.getElementById("specialContainer").style.display = "flex";

  let clicked = false;

  function handleSpecialClick() {
    if (clicked) return;
    clicked = true;

    // 👇 show last line
    const last = document.getElementById("lastLine");
    if (last) last.style.display = "block";

    // 👇 delay popup
    setTimeout(() => {
      showPopup();
    }, 4000);

    document.removeEventListener("click", handleSpecialClick);
  }

  // 👇 wait for user tap
  document.addEventListener("click", handleSpecialClick);
}

/* 💖 POPUP */
const popupMessage = `This was just a small surprise...

But you mean everything to me 💖

Happy Birthday 🎂✨`;

function showPopup() {
  const popup = document.getElementById("finalPopup");
  if (!popup) return;

  popup.style.display = "flex";
  typePopup();
  startConfetti();
}

function typePopup() {
  let i = 0;
  const el = document.getElementById("popupText");
  if (!el) return;

  el.innerHTML = "";

  function type() {
    if (i < popupMessage.length) {
      el.innerHTML += popupMessage[i++];
      setTimeout(type, 40);
    }
  }
  type();
}

function closePopup() {
  document.getElementById("finalPopup").style.display = "none";
}

/* 🎉 Confetti */
function startConfetti() {
  for (let i = 0; i < 100; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}

/* Hearts */
setInterval(() => {
  let h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 300);

/* Welcome typing */
const text = "Welcome to a Special Surprise 💖";
let t = 0;

function typeEffect() {
  if (t < text.length) {
    document.getElementById("typing").innerHTML += text[t];
    t++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;