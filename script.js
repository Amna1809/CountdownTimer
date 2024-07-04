const targetDate = new Date('2024-09-18 12:00:00'); // Set your target date and time here
let interval = null;

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  if (difference >= 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
  }
}

document.getElementById("start-stop-btn").addEventListener("click", function() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    this.innerText = "Start";
  } else {
    interval = setInterval(updateCountdown, 1000);
    this.innerText = "Stop";
  }
});
