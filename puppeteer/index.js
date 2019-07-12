const electron = require('electron');
const cmd = require('node-cmd');
const puppeteer = require('puppeteer-core');
const devices = require('puppeteer-core/DeviceDescriptors');
const pathToExtension = require('path');

// cmd.get(
//   'sudo chmod -R a+rwx chromium/Chromium.app',
//   function(err, data, stderr){
//       console.log('>>>>>>>>>',data)
//   }
// );

let temp = document.querySelector('.temp');
temp.innerText = "加载中";

let tp = pathToExtension.join(__dirname, './Chromium.app/Contents/MacOS/Chromium');
console.log('!!!!!!', tp);
(async () => {
  const browser = await puppeteer.launch({
    executablePath: `${pathToExtension.join(__dirname, './Chromium.app/Contents/MacOS/Chromium')}`,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.emulate(devices['iPhone X']);
  temp.innerText = "打开 iPhone X 模拟器";
  await page.goto('http://jartto.wang/',
    { waitUntil: 'networkidle2' }
  );
  // await page.waitForNavigation({ timeout: 3000 }).then(() => {
  //   console.log('url fail load');
  //   temp.innerText = "url fail load";
  // });
  temp.innerText = "生成屏幕快照";
  await page.screenshot({path: pathToExtension.join(__dirname, 'img/temp.png')});
  
  
  await browser.close();

  temp.innerText = '显示图片';
  document.getElementById('pic').src = pathToExtension.join(__dirname, 'img/temp.png');

})().catch(error => console.log('error: ', error.message));