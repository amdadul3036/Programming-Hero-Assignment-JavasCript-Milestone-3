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

function brickCalculator(floor) {
  let floorDataType = Number.isInteger(floor);
  if (floorDataType == true) {
    if (floor > 0) {
      if (floor <= 10) {
        let totalFeet = floor * 15;
        let totalBricks = totalFeet * 1000;
        return totalBricks + " Bricks";
      } else if (floor > 10 && floor <= 20) {
        let floorFeet12 = floor - 10;
        let floorFeet15 = floor - floorFeet12;
        let totalFeet = floorFeet15 * 15 + floorFeet12 * 12;
        let totalBricks = totalFeet * 1000;
        return totalBricks;
      } else {
        let floorFeet10 = floor - 20;
        let totalFeet = 10 * 15 + 10 * 12 + floorFeet10 * 10;
        let totalBricks = totalFeet * 1000;
        return totalBricks;
      }
    } else {
      return "Building Floor Should Not Be 0 Or Negative";
    }
  } else {
    return "Input Should Be integer";
  }
}

let floor = 21;
let totalBricks = brickCalculator(floor);
console.log(totalBricks);

//4th Problem

var FriendsName = ["Dhrubo","Dhruboish","Amdadul","Kaosar","Khayer","Tasnim","Jocky","Olu","Sumon","Sle",
];

function tinyFriend(FriendsName) {
  var sm = FriendsName.length;
  var smallest;
  for (var i = 0; i < FriendsName.length; i++) {
    if (FriendsName[i].length < sm) {
      sm = FriendsName[i].length;
      smallest = FriendsName[i];
    }
  }
  return smallest;
}
var Result = tinyFriend(FriendsName);
console.log(Result);
