import { expect } from "chai";
import { Queue } from "./queue.js";

describe("queue", () => {
  it("Basic operations", () => {
    const q = new Queue();
    q.size = 1;
    q.enqueue(0);
    expect(q.pop()).to.equal(0);
    q.enqueue(1);
    q.enqueue(2);
    expect(q.pop()).to.equal(1);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.pop()).to.equal(2);
    expect(q.pop()).to.equal(3);
    expect(q.pop()).to.equal(4);
    q.enqueue(5);
    expect(q.pop()).to.equal(5);
    expect(q.pop()).to.equal(null);
  });

  it("stress test", () => {
    const MAX_ITER = 2 << (16 - 1);

    const q = new Queue();
    for (let i = 0; i < MAX_ITER; i++) {
      q.enqueue(i);
    }

    let test = true;
    for (let i = 0; i < MAX_ITER; i++) {
      test = q.pop() === i;
    }
    expect(test).is.ok;
  });
});
