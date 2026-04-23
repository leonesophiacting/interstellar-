const targetDate = new Date("2026-06-06T00:00:00-05:00").getTime();

function updateClocks() {
  const now = new Date().getTime();
  let distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("earthClock").innerHTML = "EXPIRED";
    document.getElementById("millerClock").innerHTML = "EXPIRED";
    return;
  }

  // Earth time
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((distance / (1000 * 60)) % 60);
  let seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("earthClock").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Miller’s Planet exaggeration
  let miller = distance * 10;

  let mDays = Math.floor(miller / (1000 * 60 * 60 * 24));
  let mHours = Math.floor((miller / (1000 * 60 * 60)) % 24);
  let mMinutes = Math.floor((miller / (1000 * 60)) % 60);
  let mSeconds = Math.floor((miller / 1000) % 60);

  document.getElementById("millerClock").innerHTML =
    `${mDays}d ${mHours}h ${mMinutes}m ${mSeconds}s`;
}

setInterval(updateClocks, 1000);
updateClocks();
