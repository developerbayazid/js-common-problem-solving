//String Reverse
let speech = "Hi, This is Bayazid Hasan";
let reverse = "";

for (let i = 0; i < speech.length; i++) {
    const char = speech[i];
    reverse = char + reverse;
}

console.log(reverse);
