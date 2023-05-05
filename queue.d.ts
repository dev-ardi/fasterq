export declare class Queue<T> {
  readonly SIZE_0 = 128;
  private size;
  content: T[];
  private head;
  private tail;
  enqueue(x: T): void;
  pop(): T | null;
  get peek(): T;
}
