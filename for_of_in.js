// for...of 문 =>  of 뒤에 이터러블
let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450];
let sum = 0;
for (let sale of carSales) sum += sale; // >각각의 요소를 sale로 받겠다< 지정
let average = sum / carSales.length;
console.log(average);

let roundedAverage = average.toFixed(2); // 소수점 두자리까지 출력
console.log(roundedAverage);

// entries() 메서드 => 인덱스와 값을 한 번에 가져올 수 있다.
let sum2 = 0;
for (let [index, sale] of carSales.entries()) {
  if (index % 2 === 0) {
    sum2 += sale;
  }
}
let average2 = sum2 / (carSales.length / 2);
console.log(sum2);
console.log(average2);

// for...of => 배열의 모든 요소 값이 출력
let list = [4, 5, 6];
for (let i of list) {
  console.log(i); //
}

// for...in => 배열의 모든 값의 인덱스가 출력됨(키의 목록)
for (let i in list) {
  console.log(i);
}

// 일반 객체는 이터러블이 아니라서 for...of는 에러 뜸
//for...in은 출력됨
const car = {
  maker: "BMW",
  color: "red",
  year: "2012",
};
for (let prop in car) {
  console.log(prop); // maker, color, year
}
for (let prop of car) {
  console.log(prop);
}
