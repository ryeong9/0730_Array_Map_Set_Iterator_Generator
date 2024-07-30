// 배열의 메소드
let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450];

// map() => 각 요소를 순회하며, 조건에 맞게 바꾼 모든 요소를 새로운 배열로 반환
let newCarSales = carSales.map((sale) => sale + 50);
console.log(newCarSales);
console.log(carSales); // 변경 안됐음

// filter() => 각 요소를 순회하며, 조건에 맞는 요소만 새로운 배열로 반환
let highSales = carSales.filter((sale) => sale > 500);
console.log(highSales);

let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// 0부터 시작해서 짝수 번째 달을 호출하려면 나머지가 1
console.log(evenSales);

// find() => 요소를 돌면서 조건에 맞는 첫번째 요소만 출력
let firstSaleSix = carSales.find((sale) => sale > 600);
console.log(firstSaleSix);

// findIndex() => 조건에 맞는 첫번째 요소의 인덱스를 출력
let firstSaleSixIndex = carSales.findIndex((sale) => sale > 600);
console.log(firstSaleSixIndex);

// every() => 모든 요소가 조건에 맞는지 아닌지 불리언으로 출력
let allSaleSix = carSales.every((sale) => sale > 600);
console.log(allSaleSix);

// some() => 조건에 맞는 요소가 하나라도 있는지 없는지 불리언으로 출력
let anySaleSix = carSales.some((sale) => sale > 600);
console.log(anySaleSix);

// reduce() => 요소가 끝날 때까지 조건을 반복하여 하나의 값으로 출력
let sum = carSales.reduce((t1, t2) => t1 + t2, 0); // 초기값 = 0
console.log(sum);
let average = sum / carSales.length;
console.log(average);

let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));
console.log(highest);

// flat() => 배열의 안의 다른 배열을 풀어서 하나의 배열로
let flat = [1, [2, 3]].flat();
console.log(flat); // [1, 2, 3]

// flatMap() => 각 요소의 조건을 적용하고 그 결과를 풀어서 하나의 새로운 배열로 (flat + map)
let message = ["오늘은", "비가 옵니다."];
let words = message.flatMap((msg) => msg.split(""));
console.log(words);

// concat() => 두 개 이상의 배열을 병합해 새로운 배열로
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

let original = [1, 2, 3];
let newArray;
newArray = original.concat(4, 5);
newArray = original.concat([4, 5], [6, 7]);
console.log(newArray);

// push() => 배열의 끝에 요소 추가
let stack = [];
stack.push(1);
stack.push(2, 3);
console.log(stack);

// pop() => 배열의 끝에 요소를 반환하고 삭제
//const a = stack.pop(); => 삭제된 값을 반환하기에 할당할 수 있음
stack.pop();
console.log(stack);
stack.push(4);
console.log(stack); // [1, 2, 4]

// unshift() => 배열의 처음에 요소 추가
stack.unshift(1);
stack.unshift(2, 3);
console.log(stack); // [2, 3, 1]

// shift() => 배열의 처음 요소를 반환하고 삭제
stack.shift();
console.log(stack); // [3, 1]

// slice() => 원본 배열 변경 안함
let a = [1, 2, 3, 4, 5];
let b = a.slice(0, 2); // index 0부터 2개를 새로운 배열로 반환
let c = a.slice(1, -1); // index 1부터 왼쪽으로 1개를 새로운 배열로 반환
console.log(b);

// splice() => 원본 배열 변경함
let z = [1, 2, 3, 4, 5];
z.splice(0, 2); // index 0부터 2개 지우기
z.splice(2); // index 2부터 뒤로 다 지우기
z.splice(0, 2, 10, 20); // index 0부터 2개 지우고, 그 자리에 10,20을 추가
console.log(z);

// fill() =>
let j = new Array(5);
j.fill(0); // [0,0,0,0,0]
// j.fill(1, 1); // [0,1,1,1,1] => 1로 인덱스 1부터 다 채운다
j.fill(1, 1, -1); // [0,1,1,1,0]
// => value, start, end 순으로, -1 = 뒤에서부터 세서 0번째 지나, 1번째까지
console.log(j);

// indexOf()와 lastIndexOf()
let k = [0, 1, 2, 3, 2, 1, 0];
let s = k.indexOf(2); // 처음으로 등장한 2의 index
let m = k.lastIndexOf(2); // 뒤에서부터 처음 등장한 2의 index
let h = k.indexOf(5); // 찾지 못 해서 -1 반환
console.log(h);

// includes() => 지정된 값이 배열에 있는지 없는지 불리언 값으로 출력
let q = [0, true, 2, false, NaN];
let w = q.includes(true); // true
let r = q.includes(3); // false
console.log(r);

// sort() => 알파벳 순으로 정렬, 숫자는 함수로 지정
let t = ["apple", "cherry", "banana"];
let y = t.sort();
console.log(y);

let u = [22, 333, 212];
let d = u.sort(); // [121,22,333]
let e = u.sort((a, b) => a - b); // 작은 수부터 나열
let f = u.sort((a, b) => b - a); // 큰 수부터 나열
console.log(f);

// join() => 배열의 모든 요소를 문자열로 변환하여 결합
let o = [1, 2, 3];
let p = o.join();
console.log(p); // 1,2,3
let x = o.join("");
console.log(x); // 123
