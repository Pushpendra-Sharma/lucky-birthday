const dobInput = document.querySelector("#dob");
const luckyNoInput = document.getElementById("lucky-no");
const checkLuckButton = document.getElementById("btn-check-luck");
const dobMessage = document.querySelector(".dob-msg");
const luckyNoMsg = document.querySelector(".lucky-no-msg");
const luckOutput = document.getElementById("result");

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
  if (noToCheck >= 0) {
    const sumOfDate = calculateSum(dob);
    checkIsNumberLucky(sumOfDate, noToCheck);
  } else {
    showMessage(luckyNoMsg, "Enter a valid number");
  }
});
