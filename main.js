const dobInput = document.querySelector("#dob");
const luckyNoInput = document.getElementById("lucky-no");
const checkLuckButton = document.getElementById("btn-check-luck");
const dobMessage = document.querySelector(".dob-msg");
const luckyNoMsg = document.querySelector(".lucky-no-msg");
const luckOutput = document.getElementById("result");

//today date
const todayDate = new Date();
//console.log(dobInput.value);
//2021-12-31

const deleteMessage = (element) => (element.innerText = "");

const showMessage = (element, text = "") => (element.innerText = text);

const calculateSum = (dateInput) => {
  let sum = 0;
  dateInput = dateInput.replaceAll("-", "");
  for (let digit of dateInput) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(
      luckOutput,
      `${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `
    );
  }
  showMessage(luckOutput, `${numberToCheck} is not that lucky 😕`);
};

checkLuckButton.addEventListener("click", () => {
  deleteMessage(dobMessage);
  deleteMessage(luckyNoMsg);
  deleteMessage(luckOutput);

  const noToCheck = Number(luckyNoInput.value);
  const dob = dobInput.value;
  if (true /*date validation*/) {
    if (noToCheck) {
      const sumOfDate = calculateSum(dob);
      checkIsNumberLucky(sumOfDate, noToCheck);
    } else {
      showMessage(luckyNoMsg, "Enter a valid number");
    }
  } else {
    showMessage(dobMessage, "Are you future kid?");
  }
});

//TO-DO
// validation of number 0
// validation of future dob
