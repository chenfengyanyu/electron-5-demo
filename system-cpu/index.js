// https://www.npmjs.com/package/systeminformation

const si = require('systeminformation');


console.log('System: ', si.system());
console.log('CPU: ', si.cpu(), si.cpuFlags(), si.cpuCache(), si.cpuCurrentspeed(), si.cpuTemperature());
console.log('Memory: ', si.mem());
console.log('Battery: ', si.battery());
console.log('Operating System: ', si.osInfo());
console.log('Processes: ', si.processes());
console.log('Wifi: ', si.wifiNetworks());
console.log('Disk: ', si.diskLayout());