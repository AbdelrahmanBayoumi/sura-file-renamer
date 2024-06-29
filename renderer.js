const { ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

document
  .getElementById("select-folder-btn")
  .addEventListener("click", async () => {
    const folderPath = await ipcRenderer.invoke("select-folder");
    document.getElementById("folder-path").innerText =
      folderPath || "No folder selected";
  });

document
  .getElementById("rename-files-btn")
  .addEventListener("click", async () => {
    const folderPath = document.getElementById("folder-path").innerText;
    if (folderPath === "No folder selected") {
      alert("برجاء تحديد مجلد أولاً");
      return;
    }

    const suraObject = JSON.parse(
      fs.readFileSync(path.join(__dirname, "suraObject.json"), "utf8")
    );

    const result = await ipcRenderer.invoke(
      "rename-files",
      folderPath,
      suraObject
    );
    if (result.success) {
      alert("تم تغيير أسماء الملفات بنجاح");
    } else {
      alert(`حدث خطأ أثناء تغيير أسماء الملفات: ${result.message}`);
    }
  });
