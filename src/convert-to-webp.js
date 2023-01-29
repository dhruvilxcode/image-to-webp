const os = require("os");
const path = require("path");
const { exec } = require("child_process");

const fs = require("fs");

const { grantPermission } = require("./grant-permission");
const cwebp = require("./cwebp");

// get's the temporary directory to store images on OS
const tmpdir = os.tmpdir();

// grant permission to cwebp
grantPermission(cwebp());


/**
 * Converts image to WebP
 * @param {string} imagePath input image path to convert to WebP
 * @param {number} quality (optional) 0 to 100, default value is 80. 100 for less Compression, 0 for High compression and less quality.
 * @returns {Promise<string>} converted WebP file path 
 * @example
 * ```javascript
 * const outputFilePath = await convertToWebp.imageToWebp("./myimg.jpeg",90);
 * console.log(outputFilePath);
 * ```
 */ 
exports.imageToWebp = (imagePath, quality = 80) => {
    if(quality < 0 || quality > 100) {
        throw Error("quality value should be between the 0 to 100, 0 for High compression, 100 for less compression, defualt compression is 70.");
    }

    const fileName = path.basename(imagePath);
    const outputFileName = fileName.replace(fileName.split(".")[1], "webp");

    const outputImagePath = `${tmpdir}/${outputFileName}`;

    const command = `${cwebp()} -q ${quality} ${imagePath} -o ${outputImagePath}`;

    return new Promise((resolve, reject)=>{
        exec(command, (err, stdout, stderr) => {
            if(err) {
                reject(err);
            }
            resolve(outputImagePath);
        });
    });
};
