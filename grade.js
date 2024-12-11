function studentGrades(){
let marks = prompt("Input student marks between 0 and 100:");
if (marks <0 || marks>100){
return "Invalid Marks";  
}
else if (marks>79){
return "A";
}
else if (marks >=60 && marks <=79){
return "B";
}
else if (marks >=49 && marks <=59){
return "C";
}
else if (marks >=40 && marks <49){
return "D";
}
else{
return "E";  
}
}
console.log(studentGrades())