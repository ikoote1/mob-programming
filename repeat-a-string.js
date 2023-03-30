function repeatStringNumTimes (str, num) {
  // write your code here
let output = "";

  for(let i=0; i<num;i++){
   output +=str;
  }

  return output;
}

module.exports = repeatStringNumTimes
