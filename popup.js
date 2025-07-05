// Select the button using its ID
const jokeButton = document.getElementById("jokeButton");

// Select the paragraph where the joke will be shown
const jokeDisplay = document.getElementById("jokeDisplay");

// Create a list of flirty jokes
const jokes = [
  "Are you French? Because Eiffel for you. 😍",
  "Do you have a map? Because I just got lost in your eyes. 🗺️👀",
  "If you were a vegetable, you'd be a cute-cumber. 🥒😉",
  "Are you a magician? Because whenever I look at you, everyone else disappears. 🎩✨",
  "Are you Google? Because you have everything I’ve been searching for. 🔍❤️",
  "Do you believe in love at first sight—or should I walk by again? 😘",
  "If kisses were snowflakes, I’d send you a blizzard. ❄️💋",
  "You're so sweet, you could put Hershey’s out of business. 🍫😚",
  "Is your name Wi-Fi? Because I’m feeling a connection. 📶💘",
  "If beauty were time, you’d be eternity. ⏳💞"
];

// Function to get a random joke from the list
function getRandomJoke() {
  // Create a random number between 0 and the number of jokes
  const randomIndex = Math.floor(Math.random() * jokes.length);

  // Return the joke at that index
  return jokes[randomIndex];
}

// Add a click event to the button
jokeButton.addEventListener("click", () => {
  // Call the function to get a random joke
  const randomJoke = getRandomJoke();

  // Display the joke in the paragraph
  jokeDisplay.textContent = randomJoke;
});
