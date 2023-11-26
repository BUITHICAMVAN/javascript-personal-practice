// Viết chương trình quản lý tuyển sinh
// Mô hình 3 khối
// Variables: admissionScore, mathScore, englishScore, physicScore, priorArea, priorCandidate, priorTotal
// Input: admissionScore, mathScore, englishScore, physicScore, priorArea, priorCandidate
// Process:
// - Điền vào tất cả input
//
// Output: totalScore, admissionStatus

function calcPriorArea(priorArea) {
  if (priorArea === "A") {
    return 2;
  } else if (priorArea === "B") {
    return 1;
  } else if (priorArea === "C") {
    return 0.5;
  } else {
    alert("Wrong Priority Area!!");
    return 0;
  }
}

function calcPriorCandidate(priorCandidate) {
  if (priorCandidate == 1) {
    return 2.5;
  } else if (priorCandidate == 2) {
    return 1.5;
  } else if (priorCandidate == 3) {
    return 1;
  } else {
    alert("Wrong Priority Candidate!!");
    return 0;
  }
}

function calcTotalScore() {
  var admissionScore = document.getElementById("admissionScore").value*1;
  var firstScore = document.getElementById("firstScore").value*1;
  var secondScore = document.getElementById("secondScore").value*1;
  var thirdScore = document.getElementById("thirdScore").value*1;
  var priorArea = document.getElementById("priorArea").value;
  var priorCandidate = document.getElementById("priorCandidate").value*1;
  var result = document.getElementById("admissionResult");

  var areaScore = calcPriorArea(priorArea);
  var candidateScore = calcPriorCandidate(priorCandidate);
  var totalScore = firstScore + secondScore + thirdScore + areaScore + candidateScore;

  if (totalScore >= admissionScore) {
    result.innerHTML = "Pass";
  } else {
    result.innerHTML = "Fail";
  }
}


// BÀI TẬP NỘP: TÍNH TIỀN ĐIỆN
function calcComsume() {
  var name = document.getElementById("name").value;
  var kwNumber = document.getElementById("kwNumber").value*1;
  var finalKwMoney = 0;

  if (kwNumber < 50) {
    finalKwMoney = kwNumber * 500;
  } else if (kwNumber < 100) {
    finalKwMoney = (50 * 500) + ((kwNumber - 50) * 650);
  } else if (kwNumber < 150) {
    finalKwMoney = (50 * 500) + (50 * 650) + ((kwNumber - 100) * 850);
  } else if (kwNumber < 200) {
    finalKwMoney = (50 * 500) + (50 * 650) + (50 * 850) + ((kwNumber - 150) * 1100);
  } else {
    finalKwMoney = (50 * 500) + (50 * 650) + (50 * 850) + (50 * 1100) + ((kwNumber - 200) * 1300);
  }

  var result = "<p>Tên khách hàng: " + name + "</p><p>Tiền điện: " + finalKwMoney + " VND</p>";
  document.getElementById("electricBill").innerHTML = result;
}


// TÍNH THUẾ THU NHẬP CÁ NHÂN
function calcTax() {
  var totalSalary = document.getElementById("totalSalary").value*1;
  var dependPeople = document.getElementById("dependPeople").value*1;
  var taxedSalaryNumber = totalSalary - 4000000 - dependPeople * 1600000;
  var taxCash = 0;

  if (taxedSalaryNumber <= 60000000) {
    taxCash = taxedSalaryNumber * (5 / 100);
  } else if (taxedSalaryNumber <= 120000000) {
    taxCash = taxedSalaryNumber * (10 / 100);
  } else if (taxedSalaryNumber <= 210000000) {
    taxCash = taxedSalaryNumber * (15 / 100);
  } else if (taxedSalaryNumber <= 384000000) {
    taxCash = taxedSalaryNumber * (20 / 100);
  } else if (taxedSalaryNumber <= 624000000) {
    taxCash = taxedSalaryNumber * (25 / 100);
  } else if (taxedSalaryNumber <= 960000000) {
    taxCash = taxedSalaryNumber * (30 / 100);
  } else {
    taxCash = taxedSalaryNumber * (35 / 100);
  }

  document.getElementById("taxResult").innerHTML = "Thuế thu nhập cá nhân: " + taxCash + " VND";
}


// TÍNH TIỀN CÁP
// Input: Mã khach hàng, Loại khách hàng, số kết nối, số kênh cao cấp
// Process:
// - Nhập input
// - Phân loại Nhà dân hoặc Doanh nghiệp

function exportCableReceipt() {
  var customerType = document.getElementById("customerType").value;
  var connectionNumber = parseInt(document.getElementById("connectionNumber").value);
  var channelNumber = parseInt(document.getElementById("channelNumber").value);
  var finalReceiptFee = 0;

  if (customerType === "Household") {
    finalReceiptFee = 4.5 + 20.5 * connectionNumber + 7.5 * channelNumber;
  } else if (customerType === "Bussiness") {
    if (connectionNumber <= 10) {
      finalReceiptFee = 15 + 75 * connectionNumber + 7.5 * channelNumber;
    } else {
      finalReceiptFee = 15 + 10 * 75 + (connectionNumber - 10) * 80 + 7.5 * channelNumber;
    }
  }

  document.getElementById("cableReceiptResult").innerHTML = "Tổng tiền cáp: " + finalReceiptFee + " USD";
}

