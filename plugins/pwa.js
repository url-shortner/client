if (process.client) {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    alert('test')
    e.preventDefault();
  });
}

