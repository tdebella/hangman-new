//show the notification and remove it after 2 seconds
//in this helper fun the showNotification takes out setter as true & after 2 seconds set it as false

export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  // Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 6) status = "lose";

  return status;
}
