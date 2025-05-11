function showEnvelope() {
  document.getElementById("introText").style.display = "none";
  document.getElementById("envelopeContainer").style.display = "flex";
}

// function rotateEnvelope() {
//   console.log("Rotating envelope");
//   document.getElementById("envelope").classList.add("rotate");
// }

function showCard() {
  const card = document.getElementById("popupCard");
  card.style.display = "flex";
  card.classList.add("show");
}

function goToSurprise() {
  document.getElementById("envelopeContainer").style.display = "none";
  document.getElementById("writingSheet").style.display = "flex";
}

function rotateEnvelope() {
  const envelope = document.getElementById("envelope");
  envelope.classList.add("rotate");

  // Optional: auto-show card after rotation
  setTimeout(() => {
    showCard();
  }, 1000); // wait for 1s rotation to finish
}

// Create the container for falling hearts
const heartContainer = document.createElement('div');
heartContainer.className = 'falling-hearts';
document.body.appendChild(heartContainer);

// Function to create a heart
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart-piece';

  // Random horizontal position
  heart.style.left = Math.random() * 100 + 'vw';

  // Random animation duration
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';

  heartContainer.appendChild(heart);

  // Remove after animation completes
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create hearts continuously
setInterval(createHeart, 200); // Adjust the speed by changing 200
