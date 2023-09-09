const fs = require('fs');
const path = require('path');



const emptyDirs = [
    '../uploads'
]
    .map(dir => path.resolve(__dirname, dir));

emptyDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});
