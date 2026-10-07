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

/* function countVowels(str) {
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
console.log(countVowels("aeiou"));      // 5 */

/* function multiplicationTable(n) {
  // TODO: your code here
  list = []
  for (let i = 1; i <  n+1 ; i++){
      for (let h = 1; h< n+1; h++){
        list.push(i*h)
      }
      list.push("/n")
    }
  return list
  }

console.log(multiplicationTable(3));
// "1 2 3\n2 4 6\n3 6 9"
console.log(multiplicationTable(5)); */

/* function bowlingCalc(repeat){
  score = 0
  for (let i= 0; i < 17; i+=2){
    if (repeat[i] + repeat[i+1]===10){
      score += 20 + repeat[i+2]
    }
    else {
      score += repeat[i] + repeat[i+1]
    }
  }
  if (repeat[18]===10){
    score += 20
  }
  else if (repeat[18]+repeat[19]===10){
    score += 10 + repeat[20]
  }  
  return score
}

console.log(bowlingCalc([10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10])) */

/* function foodline(N,M,x){
  x.sort((a,b)=> a-b)
  track = []
  for (let h=1; h<M;h++){
    z = parseInt(Math.min(...x)+1)
    track.push(Math.min(...x))
    x.shift((Math.min(...x)))
    x.push(z)
  }
  track.push((Math.min(...x)))
  for (let g = 0; g < track.length; g++){
    console.log(track[g])
  }
}
foodline(5,3,[2,2,3,3,3]) */


/* function slotMachines(a,b,c,x){
  count = 0
  while (x>0){
    if (x>0){
      a++
      x--
      count++
      if (a===35){
        x+=30
        a=0
      }
    }
    if (x>0){
      b++
      x--
      count++
      if (b===100){
        x+=60
        b=0
      }
    }
    if (x>0){
      c++
      x--
      count++
      if (c===10){
        x+=9
        c=0
      }
    }    
  }
  return `Martha plays ${count} before going broke.`
}
console.log(slotMachines(4,9,3,77)) */


function alpaca (n,x){
  list = []
  for (i=1; i <= n; i++){
    list.push(i)
  }
  n=false
  while (n===false){
    z=0
    for (g=0;g<list.length;g++){
      if ((list[g]+list[g+1])%2===0){
        z++
        
      }
    }
    if((list[list.length]+list[0])%2===0){
      z++
    }
    if (x===z){
      n=true
    }
    if (n===false){
      list.push(list[0]+1)
      list.push(list[1])
      list.shift()
      list.shift()
    }
  }
  return list
}
console.log(alpaca(6,3))