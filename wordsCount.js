//Words Counter
let speech = "I   am a   good   person. I  don't snore at    night";
let counter = 0;
for (let i = 0; i < speech.length; i++) {
    const char = speech[i];
    if (char == " " && speech[i - 1] != " ") {
        counter++;
    }
}
counter++;

console.log(counter);
