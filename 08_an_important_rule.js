var q = require("q");

function throwMyGod() {
  throw new Error("OH NOES");
}

function iterate(num) {
  console.log(num);
  return ++num;
}

q.fcall(iterate, 1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(throwMyGod)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log);
