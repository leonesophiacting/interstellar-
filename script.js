const targetDate = new Date("2026-06-06T00:00:00-05:00").getTime();

function updateClocks() {
  const now = new Date().getTime();
  let distance = targetDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((distance / (1000 * 60)) % 60);
  let seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("earthClock").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  let miller = distance * 61320;

  document.getElementById("millerClock").innerHTML =
    Math.floor(miller / 1000) + " ms (scaled)";
}

setInterval(updateClocks, 1000);
