const word1 = "SEND";
const word2 = "MORE";
const result = "MONEY";

const usedLetters = [];
const usedDigits = [];
const assignedDigit = [];

var flag = false;

run(); 

function run(){
    init();
}

function init(){
    for(let i = 0; i < 26; i++){
        usedLetters[i] = false;
        usedDigits[i] = false;
    }
    markLetters(word1);
    markLetters(word2);
    markLetters(result);
    calcLetters(0,word1,word2,result);
    flag ? console.log() : console.log("No solution");
}

function markLetters(word){
   for(let i  = 0; i < word.length; ++i){
       usedLetters[word.charCodeAt(i) - 'A'.charCodeAt(0)] = true;
   }
}

function calcLetters(index,w1,w2,w3){
    if(index === 26){
        if(check(w1,w2,w3)){
            console.log("solution is  : \n");
            for(let i = 0; i < 26; i++){
                flag = true;
                if(usedLetters[i]){
                    console.log(String.fromCharCode(i+65)+ " -> ",assignedDigit[i]);
                }
            }
        }
        return;
    }

    if(!usedLetters[index]){
        calcLetters(index+1,w1,w2,w3);
        return;
    }

    for(let d = 0; d < 10; ++d){
        if(!usedDigits[d]){
            usedDigits[d] = true;
            assignedDigit[index] = d;
            calcLetters(index+1,w1,w2,w3);
            usedDigits[d] = false;
        }
    }
}

function check(w1,w2,w3){
    if(leadingZero(w1) || leadingZero(w2) || leadingZero(w3)){
        return false;
    }

    return (value(w1)+ value(w2) == value(w3)) ? true : false; 
}

function leadingZero(w){
    return assignedDigit[w.charCodeAt(0) - 'A'.charCodeAt(0)] == 0 ? true : false;
}


function value(w){
    let val = 0;
    for(let i = 0; i < w.length; i++){
        val = val * 10 + assignedDigit[w.charCodeAt(i) - 'A'.charCodeAt(0)];
    }
    return val;
}