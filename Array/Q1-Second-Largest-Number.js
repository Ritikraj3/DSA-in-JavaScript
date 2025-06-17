//Ques 1 - Second Largest Number
// Given an integer array nums, return the second largest number in the array.
// discuss => https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/3304436/second-largest-digit-in-a-string/?orderBy=most_votes

// Input: [12, 35, 1, 10, 34, 1]  -------->>>>>> Output: 34

// Input: [10, 5, 10]             -------->>>>>> Output: 5

function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => b - a);

  if (uniqueArr.length > 1) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([12, 35, 1, 10, 34, 1]));

//* 2nd Approach

const secondLargest2 = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log (secondLargest2([12, 35, 1, 0, 23 34, 1]));