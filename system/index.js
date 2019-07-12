const os = require('os')
const homeDir = os.homedir()

const sysInfoBtn = document.getElementById('sys-info')

console.log('是否在线：', navigator.onLine)
console.log('网络连接：',navigator.connection.downlink);

navigator.connection.onchange = function () {
//do what you need to do ,on speed change event
    console.log('Connection Speed Changed');
}


sysInfoBtn.addEventListener('click', () => {
  const message = `Your system home directory is: ${homeDir}`
  document.getElementById('got-sys-info').innerHTML = message
})