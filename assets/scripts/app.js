const initialResult = 0;
let currentResult = initialResult;

/**
 * 사용자가 입력한 수를 가져오는 함수
 * @returns {number} 사용자 입력값을 정수로 반환
 */
function getUerInput() {
  return parseInt(userInput.value);
}

/**
 * 계산 결과를 생성하고 화면에 출력하는 함수
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
 * 두 수를 더하는 함수
 */
function add() {
  const inputNumber = getUerInput();
  const prevResult = currentResult;

  currentResult = prevResult + inputNumber;
  displayCalculation("+", prevResult, inputNumber);
}

/**
 * 두 수를 빼는 함수
 */
function substract() {
  const inputNumber = getUerInput();
  const prevResult = currentResult;

  currentResult = prevResult - inputNumber;
  createAndWriteOutput("-", prevResult, inputNumber);
}

/**
 * 두 수를 곱하는 함수
 */
function multiply() {
  const inputNumber = getUerInput();
  const prevResult = currentResult;

  currentResult = prevResult * inputNumber;
  createAndWriteOutput("*", prevResult, inputNumber);
}

/**
 * 두 수를 나누는 함수
 */
function divide() {
  const inputNumber = getUerInput();
  const prevResult = currentResult;

  currentResult = prevResult / inputNumber;
  createAndWriteOutput("/", prevResult, inputNumber);
}

// 이벤트 리스너 등록
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
