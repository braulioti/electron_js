console.log('main process working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

const windowOptions = {
    webPreferences: {
        nodeIntegration: true
    }
};

let win, dimWindow, colorWindow, framelessWindow;
let parentWindow, childWindow;

function createWindow() {
    /*win = new BrowserWindow(windowOptions);
    dimWindow = new BrowserWindow({
        width: 400,
        height: 400,
        maxWidth: 600,
        maxHeight: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    colorWindow = new BrowserWindow({
        backgroundColor: '#228b22',
        webPreferences: {
            nodeIntegration: true
        }
    });
    framelessWindow = new BrowserWindow({
        backgroundColor: '#800000',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })*/

    parentWindow = new BrowserWindow({
        title: 'Parent',
        webPreferences: {
            nodeIntegration: true
        }
    });

    childWindow = new BrowserWindow({
        show: false,
        parent: parentWindow,
        title: 'Child',
        modal: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    childWindow.loadURL('https://github.com');
    childWindow.once('ready-to-show', () => {
        childWindow.show();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
   app.quit();
}
});

app.on('activate', () => {
if (win !== null) {
    createWindow();
}
});
