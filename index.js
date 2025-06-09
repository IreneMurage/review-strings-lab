// Write your code in this file!
const currentUser = 'Irene M.';
//let welcomeMessage = "Welcome to Flatbook, "
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;