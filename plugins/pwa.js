window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.prompt();
});
// window.addEventListener('install', (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
// });


