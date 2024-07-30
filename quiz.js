// Quiz.1 => document write로 37, 32 출력하기
let numbers = [20, 37, -21, 32, -2];
document.write(numbers[1] + ",");
document.write(numbers[3] + "<hr>");

// Quiz.2 => 각 요소를 for문과 for...of문으로 출력하기
let scores = [67, 82, 97, 100, 92];

for (let i = 0; i < scores.length; i++) {
  document.write(scores[i] + "<br>");
}
document.write("<br>");
for (let i of scores) document.write(i + "<br>");

document.write("<hr>");
// Quiz.3 => 문자열 010-1234-5678로 변환하기
let tel = ["010", "1234", "5678"];
let result = tel.join("-");
document.write(result);

document.write("<hr>");
// Quiz.4 => 노랑, 파랑, 주황 / 빨강 으로 바꾸기
let colors = ["빨강", "노랑", "파랑", "주황"];
let a = colors.shift();
document.write(colors + "/");
document.write(a);

document.write("<hr>");
// Quiz.5 => 3명의 학생의 4과목 성적의 합과 평균 구하기
let arr = [
  [83, 90, 70, 87],
  [87, 93, 62, 83],
  [98, 90, 77, 97],
];
let sum, average;
for (let i = 0; i < 3; i++) {
  sum = 0;
  for (let j = 0; j < 4; j++) {
    sum += arr[i][j];
  }
  average = sum / 4;
  document.write(
    i + "번 째 학생의 합계는 " + sum + "이고, 평균은 " + average + "<br>"
  );
}

document.write("<hr>");
// Quiz.6 => 다음 성적의 합계와 평균 구하기
let mathScores = [90, 85, 70, 86, 97];
let sum2 = mathScores.reduce((a, b) => a + b);
let average2 = sum2 / 5;
document.write(sum2 + "<br>");
document.write(average2);

document.write("<hr>");
// Quiz.7 => 0보다 작은 수 중에 가장 첫 번째 숫자
let tempNumbers = [7, -24, -8, 10, 17, -18];
let result1 = tempNumbers.find((item) => item < 0);
document.write(result1);

document.write("<hr>");
// Quiz.9 => 두 배열의 요소 값이 같은 것만 새로운 배열로 반환
let k = [12, 0, 2, 5, 4];
let s = [0, 2, 3, 12, 8];
let result2 = [];
for (let i = 0; i < s.length; i++) {
  if (k.includes(s[i]) === true) {
    result2.push(s[i]);
  }
}
console.log(result2);

// Quiz.10 => 10,30,50으로 변환
let num = [1, 3, 5];
let answer = num.map((item) => item * 10);
document.write(answer);

document.write("<br>" + "<br>");
document.write("<hr>");

// Set과 Map Quiz
// Quiz.1 => 요소의 개수 구하기
const set = new Set("I am a student");
document.write(set.size); // 10 (a 중복 제외)

// Quiz.2 => Map을 이용하여 세 과목 성적의 합계와 평균 구하기
const map = new Map([
  ["국어", 85],
  ["영어", 90],
  ["수학", 95],
]);
let sum3 = 0;
let average3 = 0;
map.forEach(function (value) {
  sum3 += value;
});
average3 = sum3 / map.size;
console.log(sum);
console.log(average3);

document.write("<hr>");
// Quiz.3 => Map 의 forEach()로 만들기
const map1 = new Map([
  ["title", "유럽 책방 문화 탐구"],
  ["author", "한미화"],
  ["price", "23000"],
]);
let text = "";
map1.forEach(function (value, key) {
  text += key + ": " + value + "<br>";
});
document.write(text);

// Quiz.4 => Set을 이용하여 중복 요소 제거하기
let numbers1 = [3, 7, 12, 3, 12, 3];
const set7 = new Set(numbers1);
console.log(set7);
