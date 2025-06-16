// question 1 = Palindrome number
// An integer is a palindrome when it reads the same backward as forward.

// Input: x = 121
// Output: true

// Input: x = 10
// Output: false

const isPalindrome = (x) => {
    return x < 0 ? false : (x.toString() === x.toString().split('').reverse().join('')); 

}

const res = isPalindrome(121);
console.log(res);

//converts to string => 121 =>'121'
//split => ['1', '2', '1']
//reverse => ['1', '2', '1']
//join => '121'
