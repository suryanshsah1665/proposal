// Function to create falling elements
function createFallingElement(type) {
  const element = document.createElement("div");
  element.className = type === "heart" ? "heart" : "rose";
  element.innerHTML = type === "heart" ? "❤️" : "🌹";
  element.style.left = Math.random() * 100 + "vw";
  element.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(element);
  
  // Remove element after animation
  element.addEventListener("animationend", () => element.remove());
}

// Create falling hearts and roses periodically
setInterval(() => createFallingElement("heart"), 100); // more hearts
setInterval(() => createFallingElement("rose"), 200);  // more roses

// Button handling
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
// Function to launch the button off-screen
function flyAway() {
  const xDirection = Math.random() > 0.5 ? 1 : -1;
  const yDirection = Math.random() > 0.5 ? 1 : -1;

  noBtn.style.position = "absolute";
  noBtn.style.transition = "all 0.6s ease";
  noBtn.style.transform = `translate(${xDirection * 1500}px, ${yDirection * 1500}px) rotate(720deg) scale(0.2)`;
  noBtn.style.opacity = "0";
}

// Trigger when user tries to click or touch it
noBtn.addEventListener("mousedown", flyAway);
noBtn.addEventListener("touchstart", flyAway);
let scale = 1;

noBtn.addEventListener("click", () => {
  scale += 0.5;
  yesBtn.style.transform = `scale(${scale})`;

  // Shake animation for No button
  gsap.to(noBtn, {
    x: "+=10",
    duration: 0.1,
    yoyo: true,
    repeat: 5
  });
});

yesBtn.addEventListener("click", () => {
  // Celebration animation
  gsap.to(".sticker", {
    scale: 2,
    duration: 0.5,
    yoyo: true,
    repeat: 1
  });
  
  // Create burst of hearts
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createFallingElement("heart"), i * 50);
  }

  // Smooth transition + redirect
  gsap.to("body", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      window.location.href = "datetime-.html"; // same as original
    }
  });
});
