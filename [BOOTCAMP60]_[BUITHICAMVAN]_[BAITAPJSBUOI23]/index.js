// Mô hình 3 khối
// Tính tiền lương nhân viên

function ex1() {
  var getDailySalary = document.getElementById("dailySalary").value;
  var getWorkDay = document.getElementById("workDay").value;
  var totalSalary = 0;

  totalSalary = getDailySalary * getWorkDay;
  document.getElementById("result").innerHTML = totalSalary.toLocaleString();
}

function ex2() {
  var firstNum = document.getElementById("firstNum").value * 1;
  var secondNum = document.getElementById("secondNum").value * 1;
  var thirdNum = document.getElementById("thirdNum").value * 1;
  var fourthNum = document.getElementById("fourthNum").value * 1;
  var fifthNum = document.getElementById("fifthNum").value * 1;

  var averageNum =
    ((firstNum + secondNum + thirdNum + fourthNum + fifthNum) / 5) * 1;

  console.log(typeof averageNum);
  document.getElementById("resultAverage").innerHTML = averageNum;
}

function ex3() {
  var money = document.getElementById("money").value;
  var exchangeTool = money * 23500;
  document.getElementById("result").innerHTML = exchangeTool.toLocaleString();
}

function ex4() {
  var width = document.getElementById("widthRec").value * 1;
  var length = document.getElementById("lengthRec").value * 1;

  var periRec = (width + length) * 2 * 1;
  var areaRec = width * length * 1;
  document.getElementById("areaRec").innerHTML = areaRec;
  document.getElementById("periRec").innerHTML = periRec;
}

function ex5() {
  var num = document.getElementById("twoDigitNum").value;

  var firstDigit = Math.floor(num / 10);
  var secondDigit = Math.floor(num % 10);
  var sum = firstDigit + secondDigit;

  document.getElementById("result").innerHTML = sum;
}
