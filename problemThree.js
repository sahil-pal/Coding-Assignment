var numberOfBottles = 1000;
var numberOfPrisoner = 10;
var deadSequence = [1,4,6,7];
var bottleTasted = [];

init();

function init(){
    if(Math.pow(2,numberOfPrisoner) >= numberOfBottles){
        for(let i = 0; i < numberOfPrisoner; i++){
            bottleTasted[i] = "";
        }
        calcBottleTasted();
        var binaryform = calcBottlePoisoned();
        var bottlePosioned = parseInt(binaryform,2);
        console.log(`Bottle poisoned : `, bottlePosioned);

    }
    else{
        console.log("No Solution");
    }
}

function calcBottlePoisoned(){
    var binary = "";
    for(let i = 1; i <= numberOfPrisoner; i++){
        if(isPresent(i)){
            binary = binary+"1";
        }
        else{
            binary = binary+"0";
        }
    }
    return binary;
}

function isPresent(prisoner){
    for(let i = 0; i < deadSequence.length; i++){
        if(prisoner == deadSequence[i]){
            return true;
        }
    }
    return false;
}

function calcBottleTasted(){
    for(let i = 1; i <= numberOfBottles; i++){
        var binary = i.toString(2);
        for(let j = 0; j < binary.length; j++){
            binary[j] == 1 ? bottleTasted[j] = bottleTasted[j] + " "+i : bottleTasted[j] += "";
        }
    }
    printBottleTasted();
}

function printBottleTasted(){
    for(let i = 0; i < bottleTasted.length; i++){
        console.log((i+1)+" prisoner tasted :\n"+bottleTasted[i]);
    }
}

function getInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

