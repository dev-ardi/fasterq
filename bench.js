import { Queue } from "./queue.js";
const t0 = performance.now();
const queue = new Queue();

const t1 = performance.now();
console.log(`Queue creation took ${t1 - t0} milliseconds.`);
for (let i = 0; i < queue.SIZE_0; i++) {
  queue.enqueue(i^42);
}
const t2 = performance.now();
console.log(`Queue filling took ${t2 - t1} milliseconds.`);
const t3 = performance.now();
queue.enqueue(42);
const t4 = performance.now();
console.log(`Queue overflow took ${t4 - t3} milliseconds.`);
const queue2 = new Queue();
for(let i = 0; i < 100_000; i++) {
  queue2.enqueue(i^42);
}
const t5 = performance.now();
console.log(`100k push ${t5 - t4} milliseconds.`);
for(let i = 0; i < 100_000; i++) {
  queue2.pop();
}
const t6 = performance.now();
console.log(`100k pop ${t6 - t5} milliseconds.`);