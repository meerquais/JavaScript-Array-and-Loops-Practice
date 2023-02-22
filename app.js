// Chapter #!4 - 16  // Array!

// Questions #1

// var studentName = [];

// Question #2

// var studentName = new Array();

// Question #3

// var string = ["string" , "string2" , "string3"];

// Question #4

// var numbers = [2 , 4 , 5]; 

// Question #5

// var boolean = [true , false ]; 

// Question #6

// var mixedArray = ["string" , 2 , true , null , undefined]; 

// Question #7 

// var educationInPak = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil." , "PhD"];
// document.write("<h1>Qualifications:</h1>");
// for(i = 0 ; i <= educationInPak.length ; i++){
//     document.write("<h1>" + educationInPak[i] + "</h1>")
// }

// Question #8 

// var studentName = ["Meer" , "Hafeez" , "Basit"];
// var studentScores = [450 , 420 , 380];

// var totalMarks = 500;

// for(var i = 0; i < studentName.length; i++){
//     var percentage = (studentScores[i]/totalMarks)*100;
//     document.write("<h1>" + "Scored of " + studentName[i] + " is " + studentScores[i]+ "." + "Percentage:" + percentage + "%" + "</h1>" + "<br/>")
// }

// Question #9 

// var colors = ["Red" , "Green" , "Blue"];
// document.write(colors);

// var userColor = prompt("What Color do you want to add to the beginning?");
// colors.shift(userColor);
// document.write("<br/>" + colors);

// var userColorEnd = prompt("What Color do you want to add to the end?");
// colors.push(userColorEnd);
// document.write("<br/>" + colors);

// colors.unshift("Purple" , "Black");
// document.write("<br/>" + colors);

// colors.shift();
// document.write("<br/>" + colors);

// colors.pop();
// document.write("<br/>" + colors);


// var userIndex = prompt("At which Index do you want to add a color?");
// var userColorIndex = prompt("which Color Would you like to add?");
// colors.splice(userIndex,0,userColorIndex);
// document.write("<br/>" + colors);

// var userDeleteIndex = prompt("At which index do you want to remove a color?");
// var userDeleteColor = prompt("Which Color Would you like to remove?");
// colors.splice(userDeleteIndex,userDeleteColor);
// document.write("<br/>" + colors);


// Question #10

// var studentScores = [320 , 230 , 480 , 120];
// document.write("Scores of Students : " + studentScores + "<br/>");
// studentScores.sort(function(a,b){
//     return a-b;
// })
// document.write("Ordered Scores of Students : " + studentScores);


// Question #11 

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities list:" + "<br/>" + cities + "<br/>");
// var selectedCities = cities.slice(2,4); 
// document.write(selectedCities);

// Question #12 

// var arr = ["This " , "is " , "my " , "cat"];
// document.write("<h1> Array:" + "<br/>" + arr + "</h1>")
// var singleString = arr.join("");
// document.write("<h1> String:" + "<br/>" + singleString + "</h1>")

// Question #13


// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("<h1> Devices:" + "<br/>" + devices + "</h1>");

// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");

// Question #14 


// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("<h1> Devices:" + "<br/>" + devices + "</h1>");

// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");


// Question #15

// var phoneManufacturers = ["Apple" , "Sansung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("<select>")
// for(var i = 0; i < phoneManufacturers.length; i++){
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>")


// Chapter #17 - 20 // Arrays and Loop

// Question #1

// var emptyArray = [[]]; 

// Question #2

// var matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ];

// Question #3

// for(var i = 1; i <=10; i++){
//     document.write(i + "<br/>");
// }

// Question #4

// var tableNumber = +prompt("Enter Table Number");
// var tableLength = +prompt("Enter The Length of the Table");
// document.write("<h1 > Multiplication table of " + tableNumber + "</h1>");
// document.write("<h1> Length " + tableLength + "</h1>");
// for(var i = 1; i <= tableLength; i++){
//     document.write(tableNumber + " x " + i + " " + " = " + tableNumber * i + "<br/>");
// }


// Question #5


// var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

// for(i = 0; i <= 4 ; i++){
//     document.write(fruits[i] + "<br/>");
//     document.write("Element at Index " + i + " is "  + fruits[i] + "<br/>");
// }


// Question #6
// document.write("<h1>Counting: <br/> <h1>");
// for(var i = 1 ; i <= 15; i++){
//     document.write(" " + i);
// }

// document.write("<h1>Reverse Counting: <br/> <h1>");
// for(var i = 10 ; i >= 1; i--){
//     document.write(" " + i);
// }


// document.write("<h1>Even: <br/> <h1>");
// for(var i = 0 ; i <= 20; i+=2){
//     document.write(" " + i);
// }

// document.write("<h1>Odd: <br/> <h1>");
// for(var i = 1 ; i <= 19; i+=2){
//     document.write(" " + i);
// }

// document.write("<h1>Series: <br/> <h1>");
// for(var i = 2 ; i <= 20; i+=2){
//     document.write(" " + i + "k");
// }

// Question #7

// var array = ["Cake" , "Apple pie", "Cookie", "Chips"]
// var userInput = prompt("What item are you looking for?")
// var flag = false

// for (var i = 0; i < array.length; i++){
//     if(array[i] == userInput){
//         flag = true;
//         break;
//     }
// }
// if(flag){
//     alert("The item is found in the list!");
// }else{
//     alert("The item is not found in the list!")
// }

// Question #8

// var arr = [24 , 53 , 78 , 91 , 12];
// var largest = 0 ;
// document.write("<h1> Array Items:" + arr + " </h1>")

// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// document.write("<h1>The Largest number is " + largest)


// Question #9

// var arr = [24 , 53 , 78 , 91 , 12];
// var smallest = arr[0];
// document.write("<h1> Array Items:" + arr + " </h1>")

// for(var i = 1 ; i < arr.length; i++){
//     if(arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// document.write("<h1>The Smallest number is " + smallest)


// Question #10

// for(var i = 1 ; i <= 100; i++){
//     if(i % 5 === 0){
//         document.write(" " + i);
//     }
// }
