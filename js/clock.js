const clock = document.getElementById("clock");
const hours = new Date().getHours();

function currentclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  //const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = ` ${hours} : ${minutes}`;
}
currentclock();
setInterval(currentclock, 1000);
