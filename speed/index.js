var speedTest = require('speedtest-net');
var test = speedTest({maxTime: 5000});
 

let temp = document.querySelector('.temp');
temp.innerText = "loading...";

test.on('data', data => {
  console.dir(data);
  temp.innerText = ``;
});
 
test.on('error', err => {
  console.error(err);
});