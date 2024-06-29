const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "icon.ico"), // Set the window icon
  });

  win.loadFile("index.html");
}

app.on("ready", createWindow);

ipcMain.handle("select-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  return result.filePaths[0];
});

ipcMain.handle("rename-files", async (event, folderPath, suraObject) => {
  try {
    renameFilesInFolder(folderPath, suraObject);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
});

function ensureValidDirectory(folderPath) {
  if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    throw new Error("Invalid folder path");
  }
}

function renameFilesInFolder(folderPath, mapFileNames) {
  ensureValidDirectory(folderPath);

  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const oldPath = path.join(folderPath, file);
    const newFileName = mapFileNames[file.split(".")[0]];

    if (newFileName && fs.statSync(oldPath).isFile()) {
      const newPath = path.join(folderPath, newFileName);
      fs.renameSync(oldPath, newPath);
    }
  });
}
