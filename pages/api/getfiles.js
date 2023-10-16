const fs = require('fs');
const path = require('path');

// Function to recursively read files from subfolders
function readFilesFromSubfolders(folderPath, fileNames = []) {
    
    const files = fs.readdirSync('/var/task/public/collections/home/beds');
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            readFilesFromSubfolders(filePath, fileNames);
        } else {
            fileNames.push(filePath);
        }
    }
    console.log(fileNames)
    return fileNames;
}

export default function handler(req, res) {
    console.log(req.body.path)
    const folderPath = req.body.path; // Replace with your folder path
    const fileNames = readFilesFromSubfolders(folderPath);
    return res.status(200).json(fileNames);
}

