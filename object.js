function isPalindrome(param2){
    let result = false;
    let temp = "";

    for(let i = 0; i < param2.length / 2; i++){
       
        if(param2[i] !== param2[param2.length - 1 - i]){
            return false;
        }
    }
    
    return true;
}

console.log(isPalindrome("kasur ini rusak")) //true
console.log(isPalindrome("racecar")) // true
///////////////////////////////////////////////////////////////////


function isPalindrome2(param3) {
    let mid = Math.floor(param3.length / 2);

    for (let i = 0; i < mid; i++) {
        if (param3[i] !== param3[param3.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome2("kasur ini rusak")) //true
console.log(isPalindrome2("racecar")) // true

///////////////////////////////////////////////////////////////////

function drawSquare(size) {
    const outputSize = 5;

    for (let i = 0; i < outputSize; i++) {
        let line = '';
        for (let j = 0; j < outputSize; j++) {
           
            line += '*';
        }
        console.log(line);
    }
}

drawSquare(25);

