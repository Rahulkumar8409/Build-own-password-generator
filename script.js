const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwqyz";
const number = "1234567890";
const symbols = "!@#$%^&*()-*/+";

const getRondomData = (Data) => {
  return Data[Math.floor(Math.random() * Data.length)];
};
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const totalInput = document.getElementById("total-char");
const passBox = document.getElementById("pass-box");

const genraterPassword = (password = "") => {
  if (upperInput.checked) {
    password += getRondomData(upperCase);
  }
  if (lowerInput.checked) {
    password += getRondomData(lowerCase);
  }
  if (numberInput.checked) {
    password += getRondomData(number);
  }
  if (symbolsInput.checked) {
    password += getRondomData(symbols);
  }
  if (password.length < totalInput.value) {
    return genraterPassword(password);
  }
  console.log(password);
  passBox.innerText = truncateString(password, totalInput.value);
};
genraterPassword();

document.getElementById("btn").addEventListener("click", function () {
  genraterPassword();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subString = str.substring(0, num);

    return subString;
  } else {
    return str;
  }
}
