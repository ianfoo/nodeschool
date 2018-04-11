const minArgs = 3;
let numArgs = process.argv.length;
if (numArgs < minArgs) {
    console.log(process.argv[0] + ': need at least one numerical argument');
    exit(1);
}

function sumArgs(args) {
    var sum = 0;
    for (let n of args) {
        sum += +n;
    }
    return sum;
}

console.log(sumArgs(process.argv.slice(minArgs-1)));