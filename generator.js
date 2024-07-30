function* generate() {
  console.log("제너레이터 실행");
  console.log("1생성");
  yield 1; // yield는 이터레이터의 next()메서드가 호출될 때 값을 반환
  console.log("2생성");
  yield 2;
  console.log("3생성");
  yield 3;
}
let gen = generate();
let result = gen.next();
// result = gen.next();

// while문 사용
while (!result.done) {
  console.log(result.value);
  result = gen.next();
}
// for...of문 사용
for (let ge of gen) console.log(gen);

// [Symbol.iterator]() 메서드 사용 => 이터레이터 가져올 수 있음
let iterator = gen[Symbol.iterator]();
console.log(iterator);

function* Sequence(from = 0, to = Infinity, interval = 1) {
  let next = from;
  while (next <= to) {
    yield next;
    next += interval;
  }
}
// 짝수만 호출하는 제너레이터
let evenSeq = Sequence(2, 20, 2);
for (let seq of evenSeq) console.log(seq);

// 홀수만 호출하는 제너레이터
let oddSeq = Sequence(1, 20, 2);
for (let seq of oddSeq) console.log(seq);
