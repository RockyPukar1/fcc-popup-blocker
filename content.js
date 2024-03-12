function removeDialogs() {
  const dialogs = document.querySelectorAll('[role="dialog"]');
  console.log(dialogs);
  dialogs.forEach(dialog => dialog.remove());
}

// Run the function on page load
window.onload = removeDialogs;