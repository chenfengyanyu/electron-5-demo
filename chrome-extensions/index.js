const { BrowserWindow } = require('electron')
// const installExtension =  require('electron-devtools-installer');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

// const path = require('path')
// const os = require('os')

// let url = path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/ibiejjpajlfljcgjndbonclhcbdcamai/18.12.19.1401_0');
// console.log('*****', url);
// BrowserWindow.addDevToolsExtension(url);

// let url = '/Users/jartto/Library/Application Support/Google/Chrome/Default/Extensions/ibiejjpajlfljcgjndbonclhcbdcamai/18.12.19.1401_0';
let url = 'ibiejjpajlfljcgjndbonclhcbdcamai';

installExtension(url)
    .then((name) => {
        console.log(`Added Extension:  ${name}`)
       
    })
    .catch((err) => console.log('An error occurred: ', err));