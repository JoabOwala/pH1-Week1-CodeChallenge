Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

The program propts the user to input marks
the marks is used in the if statement to genereate the appropriate grade 

if marks > 79 and <=100
    display "A" 

if marks >= 60 && marks <=79
    display "B"

if marks >= 49 && marks <=59
    display "C"

if marks >= 40 && marks <= 48
    display "D"

if marks < 40
    display "E" 


In anycase user enter an invalid and out of range number 
display Please enter marks in the range of 0 - 100