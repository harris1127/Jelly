const electron = require('electron');
const url = require('url');
const path = require('path');

const {

    app,
    BrowserWindow,
    Menu

} = electron;

let mainWindow;

//Listen for app to be ready
app.on('ready', function () {

    //create new window
    mainWindow = new BrowserWindow({});

    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'jelly-home.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Build Menu using template
    const mainMenu = Menu.buildFromTemplate(menuTemplate);

    //Insert menu on page
    Menu.setApplicationMenu(mainMenu);
});

//Menu Template for Jelly
const menuTemplate = [
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                role: 'pasteandmatchstyle'
            },
            {
                role: 'delete'
            },
            {
                role: 'selectall'
            }
    ]
  },
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item'
            },
            {
                label: 'Clean Items'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
    ]
  }
]
