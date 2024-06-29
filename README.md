# Sura File Renamer 📁📜

![image](https://github.com/AbdelrahmanBayoumi/holy-quran-radio-desktop/assets/48678280/bf7d5a2f-6d08-4502-a473-bfacb3bd6ad0)

## Description 📝

Sura File Renamer is an Electron app that automatically renames files in a specified folder based on a predefined mapping (`suraObject.json`). It is designed to rename files with names like `001`, `002`, etc., to their corresponding names like `001 - سورة الفاتحة`.

## Features ✨

- 📂 Select a folder containing files named `001`, `002`, etc.
- 🔄 Automatically rename these files based on the `suraObject.json` mapping.
- 👤 Simple and user-friendly interface.

## Getting Started 🚀

### Prerequisites 📋

- Node.js
- npm (Node Package Manager)

### Installation 💻

1. Clone the repository:

   ```sh
   git clone https://github.com/AbdelrahmanBayoumi/sura-file-renamer.git
   cd sura-file-renamer
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Usage 🛠️

1. Start the application in development mode:

   ```sh
   npm start
   ```

2. To build the application for distribution:

   ```sh
   npm run dist
   ```

3. Run the executable generated in the `dist` folder.

### How to Use 📚

1. Open the application.
2. Click on "اختر المجلد" to choose the folder containing the files to be renamed.
3. Click on "إعادة تسمية الملفات" to automatically rename the files based on the `suraObject.json` mapping.

## Project Structure 🗂️

- `main.js`: Main process script for Electron.
- `renderer.js`: Renderer process script for Electron.
- `index.html`: Main HTML file for the app interface.
- `suraObject.json`: JSON file containing the mapping of file names.
- `icon.ico`: Icon for the application.

## Acknowledgements 🙏

- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)

## Author 👨‍💻

- **Author:** Abdelrahman Bayoumi
- **Website:** [https://abdelrahmanbayoumi.github.io](https://abdelrahmanbayoumi.github.io/)
