// Ques 2 - rotate array by k
// Given an array, rotate the array by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3 -------->>>>>> Output: [5,6,7,1,2,3,4]

// Input: nums = [-1,-100,3,99], k = 2 -------->>>>>> Output: [3,99,-1,-100]

// discuss => https://leetcode.com/problems/rotate-array/solutions/

//* 1st Approach

function rotation(nums, k) {
  let size = nums.length;

  if (k > size) k = k % size;

  const rotated = nums.splice(size - k, k);

  nums.unshift(...rotated);

  console.log(nums);
}

rotation([1, 2, 3, 4, 5, 6, 7], 3);

//*optimized solution

function optimizedRotation(nums, k) {
  let size = nums.length;

  if (k > size) k = k % size;

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(optimizedRotation([-1, -100, 3, 99], 2));
