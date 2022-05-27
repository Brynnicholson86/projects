/* // Write function below
function subLength(string, char) {
  let charCount = 0;
  for(let i = 0; i < string.length; i++){
    if(char === string.charAt(i)){  
      charCount++;
      let a = string.indexOf(string.charAt(i))
      for(let j = 0; j < string.length; j++){
        if(a === string.charAt(j)){
          let b = string.indexOf(string.charAt(j));
          charCount = string.indexOf(b) - str.indexOf(a);
        }
      }
      //string.indexOf(char) - str.indexOf('b')) == 3)
    }
  }
  if (2 <= charCount){
    return charCount;
  } else {
    return 0;
  }
};

console.log(subLength('Saturday', 'a'));
console.log(subLength('digitize', 'i'));
console.log(subLength('computation', 'o'));
*/

// Write function below
const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};
