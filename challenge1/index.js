// Student Grade Generator(Toy Problem)
// prompt user to input marks
const prompt=require("prompt-sync")({sigint:true});

let marks = prompt('Please enter marks: ');

//outer if statment informs user to stick to a range of 0 - 100

if(marks <= 100 && marks >=0){
//compares the marks to generate appropriate grade
if (marks > 79 && marks <=100){
    console.log("A");
}else if(marks >= 60 && marks <=79){
    console.log("B")
}else if(marks >= 49 && marks <=59){
    console.log("C")
}else if(marks >= 40 && marks <= 48){
    console.log("D")
}else if(marks < 40){
    console.log("E")
}else{
    console.log("Please enter a valid number")
}
}else{
    console.log("Please enter marks in the range of 0 - 100")
}