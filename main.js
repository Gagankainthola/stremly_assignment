const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let mainWindow;
let serverProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  // Load React build (Vite or CRA output goes into dist)
  const indexPath = path.join(__dirname, "client", "dist", "index.html");
  console.log("Loading frontend from:", indexPath);

  mainWindow.loadFile(indexPath).catch((err) => {
    console.error("❌ Failed to load frontend:", err);
  });

  // Uncomment for debugging frontend
  // mainWindow.webContents.openDevTools();
}

app.on("ready", () => {
  console.log("✅ Electron app is ready");

  // Start backend server
  const serverPath = path.join(__dirname, "server", "server.js");
  console.log("Starting backend server from:", serverPath);

  try {
    serverProcess = spawn("node", [serverPath], {
      cwd: __dirname,
      shell: true,
    });

    // Log backend output
    serverProcess.stdout.on("data", (data) => {
      console.log(`📡 Server: ${data}`);
    });

    serverProcess.stderr.on("data", (data) => {
      console.error(`❌ Server Error: ${data}`);
    });

    serverProcess.on("close", (code) => {
      console.log(`⚠️ Server process exited with code ${code}`);
    });

  } catch (err) {
    console.error("❌ Failed to start backend server:", err);
  }

  createWindow();
});

app.on("window-all-closed", () => {
  console.log("🪟 All windows closed");
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("quit", () => {
  console.log("👋 App quitting...");
  if (serverProcess) {
    console.log("Killing backend server...");
    serverProcess.kill();
  }
});
