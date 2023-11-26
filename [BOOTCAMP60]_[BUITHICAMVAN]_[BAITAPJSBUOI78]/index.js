var listItems = [];

function readListItems() {
  var content = "";
  for(var i = 0; i < listItems.length; i++) {
    const number = listItems[i];
    content += number + " ";
  }
  return content;
}

function addNumber() {
  const txtNumber = parseInt(document.getElementById("txtNumber").value);
  listItems.push(txtNumber);
  const content = readListItems();
  document.getElementById("readListItems").innerHTML = content;
}

function sumPos() {
  var sum = 0;
  for (var i = 0; i < listItems.length; i++) {
    if(listItems[i] >= 0) {
      sum += listItems[i];
    }
  }
  document.getElementById("showSumPos").innerHTML = sum;
}


function countPos() {
  var count = 0;
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i] >= 0) {
      count += 1;
    }
  }
  document.getElementById("showCountPos").innerHTML = count;
}

// Tìm số nhỏ nhất
function findSmallest() {
  if (listItems.length === 0) return;
  var min = listItems[0];
  for (var i = 1; i < listItems.length; i++) {
    if (min > listItems[i]) {
      min = listItems[i];
    }
  }
  document.getElementById("showSmallest").innerHTML = min;
}

// Tìm số dương nhỏ nhất
function findSmallestPos() {
  var min = listItems[0];
  for (var i = 0; i < listItems.length; i++) {
    if(listItems[i] >= 0) {
      if (min >= listItems[i+1]) {
        min = listItems[i+1]
      } 
    }
  }
  document.getElementById("showSmallestPos").innerHTML = min;
}

// Tìm số chẵn cuối cùng 
function findLastEven() {
  var last = 0;
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i] % 2 == 0) {
      last = listItems[i];
    }
  }
  document.getElementById("showLastEven").innerHTML = last !== 0 ? last : 'No even number';
}

// Đổi chỗ 
function swap(firstIndex, secondIndex) {
  if (firstIndex < 0 || secondIndex < 0 || firstIndex >= listItems.length || secondIndex >= listItems.length) {
    return; 
  }
  var temp = listItems[firstIndex];
  listItems[firstIndex] = listItems[secondIndex];
  listItems[secondIndex] = temp;
  document.getElementById("showSwap").innerHTML = listItems[firstIndex] + " " + listItems[secondIndex];
}

// Sắp xếp tăng dần
function increase() {
  listItems.sort(function(a, b) { return a - b; });
  var sortedList = readListItems();
  document.getElementById("showIncrease").innerHTML = sortedList;
}

// Tìm số nguyên đầu tiên 
function firstPrime() {
  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (var i = 0; i < listItems.length; i++) {
    if (isPrime(listItems[i])) {
      document.getElementById("showFirstPrime").innerHTML = listItems[i];
      return;
    }
  }
  document.getElementById("showFirstPrime").innerHTML = 'No prime number';
}

function countInt() {
  var count = 0;
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i] % 2 == 0) {
      count += 1;
    }
  }
  document.getElementById("showCountInt").innerHTML = count;
}

function compare() {
  var countPos = 0;
  var countNeg = 0;
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i] > 0) {
      countPos += 1;
    } else if (listItems[i] < 0) {
      countNeg += 1;
    }
  }
  var result = "";
  if (countPos > countNeg) {
    result = "Positive > Negative";
  } else if (countPos < countNeg) {
    result = "Positive < Negative";
  } else {
    result = "Positive = Negative";
  }
  document.getElementById("showCompare").innerHTML = result;
}