//First Problem
function feetToMile(miles) {
  var feet = miles * 0.000189394; //1 ft=0.000189394 Miles
  return feet;
}

var size1 = feetToMile(180);
console.log(size1);
var size2 = feetToMile(369);
console.log(size2);
var size3 = feetToMile(690);
console.log(size3);

//Second Problem WoodCalculator
function woodCalculator(numberOfChair, numberOfTable, numberOfKhat) {
  var totalWood = numberOfChair * 1 + numberOfTable * 3 + numberOfKhat * 5;
  return totalWood;
}
var Customar1 = woodCalculator(10, 20, 30);
var Customar2 = woodCalculator(23, 46, 89);
var Customar3 = woodCalculator(45, 89, 12);
console.log(Customar1);
console.log(Customar2);
console.log(Customar3);

//Third Problem;BrickCalculator

function brickCalculator(n) {
  if (n <= 10) {
    numberOfBricks110 = n * 15 * 1000;
    return numberOfBricks110;
  }
  if (n >= 11) {
    numberOfBricks1120 = (n - 10) * 12 * 1000;
    return numberOfBricks1120;
  }
  if (n > 20) {
    numberOfBricks20Plus = (n - 20) * 10 * 1000;
    return numberOfBricks20Plus;
  }
  var totalNumberOfBricks =
    numberOfBricks110 + numberOfBricks1120 + numberOfBricks20Plus;
//   return totalNumberOfBricks;
}

var House1 = brickCalculator(1);
var House2 = brickCalculator(11);
var House3 = brickCalculator(9);
var House4 = brickCalculator(17);
var House5 = brickCalculator(23);
var House6 = brickCalculator(45);

console.log("Total Number of Bricks of House 1 : ", House1);
console.log("Total Number of Bricks of House 2 : ", House2);
console.log("Total Number of Bricks of House 3 : ", House3);
console.log("Total Number of Bricks of House 4 : ", House4);
console.log("Total Number of Bricks of House 5 : ", House5);
console.log("Total Number of Bricks of House 6 : ", House6);



//4th Problem

var FriendsName=["Dhrubo","Dhruboish","Amdadul","Kaosar","Khayer","Tasnim","Jocky","Olu","Sumon","S"];

function tinyFriend(FriendsName){
    var sm=FriendsName.length;
    var smallest;
    for(var i=0;i<FriendsName.length;i++){
        if(FriendsName[i].length<sm){
            sm=FriendsName[i].length;
            smallest= FriendsName[i];
        }
    }
    return smallest;
}
var Result=tinyFriend(FriendsName);
console.log(Result);
