const timerCharacter = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let i = 0; i < timerCharacter.length; i++) {
  setTimeout(() => {
    process.stdout.write(timerCharacter[i]);
  }, i * 200);
}