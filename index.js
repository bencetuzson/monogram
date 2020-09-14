const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const letters = ["cs", "dz", "gy", "ly", "ny", "sz", "ty", "zs"];

rl.question("Hogy hívnak? ", function (name) {
    let names = name.split(" ");
    let monogram = [];
    let temp;

    for (let i = 0; i < names.length; i++) {
        if ((temp = names[i].substring(0, 3)).toLowerCase() === "dzs") {
            monogram[i] = names[i].substring(0, 3);
        } else if ((temp = doubleLetters(letters, i, names)) !== null) {
            monogram[i] = temp;
        } else {
            monogram[i] = names[i].charAt(0);
        }
    }

    console.log(writeMonogram(monogram));
    process.exit(0);
});

function doubleLetters(arr, index, names) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if ((temp = names[index].substring(0, 2)).toLowerCase() === arr[i]) {
            return temp;
        }
    }
    return null;
}

function writeMonogram(arr) {
    let out = "A monogramod: ";
    for (let i = 0; i < arr.length; i++) {
        out += `${arr[i]}.`
        if (i !== arr.length-1) {
            out += " ";
        }
    }
    return out;
}
