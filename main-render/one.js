console.log('From one.js');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');
const windowOptions = {
    webPreferences: {
        nodeIntegration: true
    }
};

const newWinWindoBtn = document.getElementById('newWindowBtn');
newWinWindoBtn.addEventListener('click', function (event) {
    let winThree = new BrowserWindow(windowOptions);

    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'three.html'),
        protocol: 'file',
        slashes: true
    }));

    winThree.webContents.openDevTools();
});
