# FasterQ

FasterQ is a fast queue for any purpose. It's extremely fast due to its simplicity and lack of features, but most of the time you only need a basic FIFO.

It's designed to handle large amounts of data, growing in size as needed in an efficient way.

## Usage

```typescript
import { Queue } from "fasterq";
const myQueue = new Queue<string>();
myQueue.enqueue("Hello");
myQueue.enqueue("World");
console.log(myQueue.peek()); // World
console.log(myQueue.pop()); // World
console.log(myQueue.pop()); // Hello

for (let i = 0; i < 100_000; i++) {
  myQueue.enqueue("Hello: i");
}
```
