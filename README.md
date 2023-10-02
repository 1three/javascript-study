# javascript-study

_【한글자막】 JavaScript 완벽 가이드 : 초급 + 고급 마스터 과정 **From Udemy**_
<br>

## 초기화 및 변수 선언

```javascript
const initialResult = 0;
let currentResult = initialResult;
```

## 함수 선언

_함수는 스크립트를 실행하기 전, 함수를 코드의 최상단에 등록하기 때문에 <br>
함수 선언은 **위치가 중요하지 않습니다**.<br><br>
따라서 조직에서 정한 규칙에 따라<br>
코드를 읽기 쉽고 유지보수하기 편한 위치에 배치하는 것을 습관화해야 합니다._

### 사용자 입력 가져오기 함수

```javascript
function getUserInput() {
  return parseInt(userInput.value);
}
```

### 결과 생성 및 출력 함수

```javascript
function displayCalculation(operator, prevNumber, inputNumber) {
  const calcDescription = `${prevNumber} ${operator} ${inputNumber}`;
  outputResult(currentResult, calcDescription);
}
```

### 두 수를 더하는 함수

```javascript
function add() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult + inputNumber;
  displayCalculation("+", prevResult, inputNumber);
}
```

### 두 수를 빼는 함수

```javascript
function subtract() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult - inputNumber;
  displayCalculation("-", prevResult, inputNumber);
}
```

### 두 수를 곱하는 함수

```javascript
function multiply() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult * inputNumber;
  displayCalculation("*", prevResult, inputNumber);
}
```

### 두 수를 나누는 함수

```javascript
function divide() {
  const inputNumber = getUserInput();
  const prevResult = currentResult;

  currentResult = prevResult / inputNumber;
  displayCalculation("/", prevResult, inputNumber);
}
```

## 문자열을 정수로 변환

_자바스크립트에서 문자열 변환 방법은 다양하게 있습니다.<br>
HTML의 input 요소는 사용자 입력을 항상 문자열로 받습니다.<br><br>
간단한 정수 변환 시<br>
`Number(), parseInt(), +, *1, /1`<br><br>
소수나 특정 반올림이 필요한 경우<br>
`parseFloat(), Math.floor(), Math.ceil(), Math.round()`을 고려합니다._

```javascript
function parseIntExample() {
  return parseInt("42"); // 결과: 42
}
```

## Alert 함수 사용

```javascript
function showAlert() {
  alert("알림 메시지");
}
```

## 이벤트 리스너

_이벤트 리스너를 등록할 때 사용되는 addEventListener 메서드는 세 개의 매개변수를 갖습니다.<br>_

1. type (이벤트 타입)<br>
   이벤트의 종류를 나타내는 문자열 `"click", "keydown", "mouseover"`

2. listener (리스너 함수)<br>
   이벤트가 발생했을 때 실행할 함수를 지정<br>
   `function() { /_ 코드 _/ }` 형태로 정의<br>
   이미 정의된 `(괄호)가 없는 함수명` 을 전달할 수 있습니다.

3. options (옵션 객체, 생략 가능)<br>
   `capture, once, passive 등`

```javascript
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
```
