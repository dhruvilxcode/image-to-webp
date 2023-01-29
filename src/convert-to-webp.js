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

/****
 * @description
 * @params 
 */
exports.imageToWebp = ({imagePath, quality = 70}) => {
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
