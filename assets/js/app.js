let cl = console.log;

let str = " i love javascript";

let str1 = str.split("").reverse().join("").split(" ").reverse().join(" ")
cl(str1)

function reversewords(str) {
    let result = ""

    for (let i = 0; i < str.length; i++) {
        result = str[i] + result
       
    }
    return result
}
cl(reversewords(str))