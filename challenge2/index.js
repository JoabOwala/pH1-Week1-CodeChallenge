//propmt user to input speed
//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let speed = prompt('Enter speed: ');

if (speed > 70){
    let overSpeed = speed - 70
    overSpeed/=5
    console.log(`Points: ${overSpeed}`)
    if(overSpeed > 12){
        console.log("License suspended")
    }
}else if(speed <= 70){
    console.log("Ok")
}else{
    console.log("please enter a number")
}