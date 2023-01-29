const path = require("path");

// get os type then return path of respective platform library

const cwebp = function () {
  console.log("Running on the CPU ", process.platform, process.arch);
  if (process.platform === "darwin") {
    if(process.arch === "x64") {
      return path.join(__dirname, "../", "/bin/macos/x64/cwebp"); //return macos cwebp
    } 
    return path.join(__dirname, "../", "/bin/macos/cwebp"); //return macos cwebp
  } else if (process.platform === "linux") {
    return path.join(__dirname, "../", "/bin/linux/cwebp"); //return linux cwebp
  } else if (process.platform === "win32") {
    if (process.arch === "x64") {
      return path.join(
        __dirname,
        "../",
        "\\bin\\windows\\cwebp.exe"
      ); //return windows 64bit cwebp
    } else {
      console.log("Unsupported platform:", process.platform, process.arch); //show unsupported platform message
    }
  } else {
    console.log("Unsupported platform:", process.platform, process.arch); //show unsupported platform message
  }
};
module.exports = cwebp;
