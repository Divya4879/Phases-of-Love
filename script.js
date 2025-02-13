// Progress indicator
const sections = document.querySelectorAll("section");

const container = document.querySelector(".container");

// Floating hearts
const floatingHeartsContainer =
  document.querySelector(".floating-hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  floatingHeartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// Audio setup
const audioElements = {
  title: new Audio("audio/title.mp3"),
  sad: new Audio("audio/sad-song.mp3"),
  neutral: new Audio("audio/2.mp3"),
  crush: new Audio("audio/3.mp3"),
  happy: new Audio("audio/4.mp3"),
  content: new Audio("audio/5.mp3"),
};

let currentAudio = null;

      const playPauseBtn = document.getElementById('play-pause');
      const volumeSlider = document.getElementById('volume');

      playPauseBtn.addEventListener('click', () => {
          if (currentAudio) {
              if (currentAudio.paused) {
                  currentAudio.play();
              } else {
                  currentAudio.pause();
              }
          }
      });

      volumeSlider.addEventListener('input', (e) => {
          const volume = parseFloat(e.target.value);
          Object.values(audioElements).forEach(audio => {
              audio.volume = volume;
          });
      });

      // Intersection Observer for section visibility

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Pause and reset any currently playing audio
            if (currentAudio) {
              currentAudio.pause();
              currentAudio.currentTime = 0;
            }
            
            // Toggle heart envelope display based on section id
            if (entry.target.id === "title") {
              heartEnvelope.style.display = "none"; // Hide for title page
            } else {
              heartEnvelope.style.display = "block"; // Show for all other sections
            }
            
            // Set and play new audio, then update letter content
            currentAudio = audioElements[entry.target.id];
            currentAudio.play();
            updateLetterContent(entry.target.id);
          }
        });
      }, { threshold: 0.5 });
      
      // Observe all sections and the title section (if separate)
      sections.forEach(section => observer.observe(section));
      const titleSection = document.getElementById("title");
      if (titleSection) {
        observer.observe(titleSection);
      }
      
const heartEnvelope = document.querySelector(".heart-envelope");



// Letter content
const letterContent = {
  sad: "In the depths of sorrow, remember that healing takes time. Your heart will mend.",
  neutral:
    "Embrace this moment of solitude. It's a time for self-discovery and growth.",
  crush:
    "The flutter of new beginnings! Cherish these moments of excitement and possibility.",
  happy:
    "True love has found you. Nurture it, cherish it, and let it bloom.",
  content:
    "In the warmth of lasting love, find peace and joy in each shared moment.",
};

function updateLetterContent(sectionId) {
  const letterElement = document.getElementById("letter-content");
  letterElement.textContent = letterContent[sectionId];
}

// Easter egg
const easterEgg = document.createElement("div");
easterEgg.textContent = "💝";
easterEgg.style.position = "fixed";
easterEgg.style.bottom = "20px";
easterEgg.style.right = "20px";
easterEgg.style.fontSize = "2rem";
easterEgg.style.cursor = "pointer";
easterEgg.style.opacity = "0";
easterEgg.style.transition = "opacity 0.3s ease";
document.body.appendChild(easterEgg);

let easterEggVisible = false;
document.addEventListener("mousemove", (e) => {
  if (
    e.clientX > window.innerWidth - 50 &&
    e.clientY > window.innerHeight - 50
  ) {
    if (!easterEggVisible) {
      easterEgg.style.opacity = "1";
      easterEggVisible = true;
    }
  } else {
    if (easterEggVisible) {
      easterEgg.style.opacity = "0";
      easterEggVisible = false;
    }
  }
});

easterEgg.addEventListener("click", () => {
  alert(
    "You've successfully found the hidden treasure of love! ❤️💖💗💓💞🩷❣️"
  );
});