/* function getNumbersInRange(start, end) {
  // TODO: your code here
  result = []
  let highest = Math.max(start,end);
  for (let i = start; i <= highest; i++){
    result.push (i)
  }
  return result
}

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10));  
console.log(getNumbersInRange(3, 8)); */

/* function sumRange(start, end) {
  // TODO: your code here
  total = 0; 
  for (let i = start; i <= end; i++){
    total += i
  }
  return total 
}

console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4 */

/* function countdown(n) {
  // TODO: your code here
  while (n > 0) {
  console.log("Countdown: " + n);  
  n--;
  
   // subtract 1 each time
}
console.log("Blast off!");
}

countdown(5); // [5, 4, 3, 2, 1]
countdown(1); // [1]
countdown(8); // [8, 7, 6, 5, 4, 3, 2, 1,] */

function countVowels(str) {
  // TODO: your code here
  x = str.length
  y = 0
    while (x>=0){
      if (String(str[x]) === "a" || String(str[x]) === "e" || String(str[x]) === "i" || String(str[x]) === "o" || String(str[x]) === "u" ){
        y++;
      }
      x--;
    }
  return y
}

console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5