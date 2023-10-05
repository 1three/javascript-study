const initialResult = 0;
let currentResult = initialResult;
let logEntries = [];

/**
 * 사용자가 입력한 수를 가져오는 함수
 * @returns {number} 사용자 입력값을 정수로 반환
 */
function getUserInput() {
  return parseInt(userInput.value);
}

/**
 * 직전 계산 결과를 생성하고 화면에 출력하는 함수
 * @param {string} operator - 수식 연산자
 * @param {number} prevNumber - 이전 숫자
 * @param {number} inputNumber - 입력된 숫자
 */
function displayCalculation(operator, prevNumber, inputNumber) {
  const calcDescription = `${prevNumber} ${operator} ${inputNumber}`;
  // vendor.js에 정의한 함수 호출
  outputResult(currentResult, calcDescription);
}

/**
 * 지난 모든 계산 결과를 생성하고 화면에 출력하는 함수
 */
function displayLog(operator, prevResult, inputNumber, curResult) {
  const logEntry = {
    operator: operator,
    prevResult: prevResult,
    inputNumber: inputNumber,
    curResult: curResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

/**
 * 두 수를 더하는 함수
 */
function add() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult + inputNumber;
  displayCalculation("+", prevResult, inputNumber);
  displayLog("+", prevResult, inputNumber, currentResult);
}

/**
 * 두 수를 빼는 함수
 */
function substract() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult - inputNumber;
  displayCalculation("-", prevResult, inputNumber);
  displayLog("-", prevResult, inputNumber, currentResult);
}

/**
 * 두 수를 곱하는 함수
 */
function multiply() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult * inputNumber;
  displayCalculation("*", prevResult, inputNumber);
  displayLog("*", prevResult, inputNumber, currentResult);
}

/**
 * 두 수를 나누는 함수
 */
function divide() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult / inputNumber;
  displayCalculation("/", prevResult, inputNumber);
  displayLog("/", prevResult, inputNumber, currentResult);
}

// 이벤트 리스너 등록 from vendor.js
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
