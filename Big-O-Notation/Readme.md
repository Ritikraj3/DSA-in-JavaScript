

## 📘 Big O Notation – A JavaScript Developer’s Guide

Big O Notation is used to **describe the performance** of an algorithm:

* **Time Complexity** → How fast does the algorithm run?
* **Space Complexity** → How much memory does it use?

---

## 🕒 Time Complexity

### Measures how the runtime grows with input size `n`.

| Big O Notation | Name              | Example (JS)                                       | Description                          |
| -------------- | ----------------- | -------------------------------------------------- | ------------------------------------ |
| `O(1)`         | Constant Time     | `return arr[0]`                                    | Does not depend on input size        |
| `O(log n)`     | Logarithmic Time  | `Binary Search`                                    | Input is divided in half each step   |
| `O(n)`         | Linear Time       | `for (let i = 0; i < n; i++)`                      | Grows proportionally with input      |
| `O(n log n)`   | Linearithmic Time | `Merge Sort`, `QuickSort`                          | Divide and conquer with linear merge |
| `O(n^2)`       | Quadratic Time    | Nested loops: `for i -> for j`                     | Slow for large inputs                |
| `O(2^n)`       | Exponential Time  | Recursive Fibonacci without memoization            | Grows extremely fast                 |
| `O(n!)`        | Factorial Time    | Brute force permutations (e.g. traveling salesman) | Ultra slow                           |

---

### 🧠 Time Complexity – Examples in JavaScript

```js
// O(1) – Constant
function getFirst(arr) {
  return arr[0];
}

// O(n) – Linear
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// O(n^2) – Quadratic
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

---

## 💾 Space Complexity

### Measures how much additional memory is used as input grows.

| Operation Type               | Space Complexity |
| ---------------------------- | ---------------- |
| Using a few variables only   | `O(1)`           |
| Using an array of size `n`   | `O(n)`           |
| Recursive calls (call stack) | Depends on depth |

---

### 🧠 Space Complexity – Example in JavaScript

```js
// O(1) – Constant Space
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

// O(n) – Linear Space (due to output array)
function double(arr) {
  let result = [];
  for (let num of arr) {
    result.push(num * 2);
  }
  return result;
}
```

---

## 📌 Summary

* **Big O tells us** how scalable and efficient our code is.
* Always consider both **Time** and **Space** when evaluating algorithms.
* It helps you **compare two solutions** without needing to run them.

---

## ✅ Cheatsheet

| Complexity | Fast for Big `n`? | Use Case                      |
| ---------- | ----------------- | ----------------------------- |
| `O(1)`     | ✅ Yes             | Hash maps, index lookup       |
| `O(log n)` | ✅ Yes             | Binary search                 |
| `O(n)`     | ⚠️ Okay           | Looping through an array      |
| `O(n^2)`   | ❌ No              | Nested loops                  |
| `O(2^n)`   | ❌❌ Very slow      | Recursion without memoization |

---

Let me know if you want this as a markdown file or with code snippets formatted for GitHub!
