const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir(srcDir);
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // We change max-w-7xl to max-w-[1536px]
    if (content.includes('max-w-7xl')) {
        content = content.replace(/max-w-7xl/g, 'max-w-[1536px]');
        changed = true;
    }

    // We change max-w-5xl to max-w-7xl
    if (content.includes('max-w-5xl')) {
        content = content.replace(/max-w-5xl/g, 'max-w-7xl');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
        console.log('Updated', file);
    }
});

console.log(`Updated ${changedCount} files.`);
