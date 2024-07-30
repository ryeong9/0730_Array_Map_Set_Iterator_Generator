// 이터레이터 객체 구하기
let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();
console.log(iterator);

// 이터레이션 결과 구하기(객체로 나옴)
let result = iterator.next();
console.log(result); // { value: 1, done: false }

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

// 배열 초기화
let copy = [...iterator];
console.log(copy);

class Sequence {
  constructor(from = 0, to = Infinity, interval = 1) {
    this.from = from;
    this.to = to;
    this.interval = this.interval;
  }
  [Symbol.iterator]() {
    let next = this.from;
    return {
      next: () => {
        if (next <= this.to) {
          let result3 = { value: next, done: false };
          next += this.interval;
          return result3;
        }
        return { value: undefined, done: true };
      },
    };
  }
}
let evenNumbers = new Sequence(2, 10, 2);
let iterator2 = evenNumbers[Symbol.iterator]();
let result3 = iterator2.next();
console.log(result3);

// 요소의 값 출력 (while문 사용)
while (!result3.done) {
  console.log(result3.value);
  result3 = iterator2.next();
}
// for...of문 사용 가능
for (let num of evenNumbers) console.log(num);

let arr2 = [...evenNumbers];
console.log(arr2);
