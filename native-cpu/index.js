const os = require("os");
// const drivelist = require('drivelist');



let network = os.networkInterfaces(),
  cpus = os.cpus(),
  totalMem = os.totalmem(),
  freeMem = os.freemem(),
  loadavg = os.loadavg(),
  type = os.type(), // Linux, Darwin or Window_NT
  platform = os.platform(); // 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'

  let temp = document.querySelector('.temp');
  temp.innerText = "loading...";


console.log('网络情况：', network);
console.log('cpu', cpus);
console.log('总内存：', totalMem / 1048576);
console.log('可用内存：', freeMem / 1048576);
console.log('系统负载：', loadavg);
console.log('系统类型：', type);
console.log('平台：', platform);

temp.innerText = `总内存：${totalMem / 1048576} M`;




// drivelist.list((error, drives) => {
//     if (error) {
//         throw error;
//     }

//     drives.forEach((drive) => {
//         console.log('drive：', drive);
//     });
// });