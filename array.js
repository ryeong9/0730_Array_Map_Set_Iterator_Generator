const me = [1, 2, 3, 4, 5];
console.log(me);

// 새로운 배열 생성
let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450];
console.log(carSales);

// 새로운 배열 생성2
let carSales2 = new Array(
  300,
  350,
  400,
  450,
  500,
  600,
  650,
  620,
  580,
  620,
  500,
  450
);
console.log(carSales2);

// 배열 복사 => 기존의 배열을 복사해 새로운 배열로
let copy = Array.from(carSales1);
console.log(copy);

// 확산 연산자 사용하여 새로운 배열 생성
let concat = [0, ...carSales, 300, 500];
console.log(concat);

// 확산연산자 + ""
let numbers = [..."123456789"];
console.log(numbers); // ['1', '2', '3', ... '9' ]

// 배열 요소에 접근하기
let may = carSales[4];
console.log(may);

let june = carSales["5"]; // JS의 특성 => string 타입이지만 number 자동 변환됨
console.log(june);

// 배열에 없는 요소 추가하기
carSales[12] = -50;
console.log(carSales);

// 배열의 길이 확인
let a = [1, 2, 3, 4, 5];
let len = a.length;
console.log(len);

// 배열의 요소 삭제하기
a.length = 0;
console.log(a); // [] 빈 배열 출력

// 각 요소 대입 후, 나머지 요소 한 번에 rest로 대입
let jan, fab, mar, rest;
[jan, fab, mar, ...rest] = carSales;
console.log(jan, fab, mar);
console.log(rest);
