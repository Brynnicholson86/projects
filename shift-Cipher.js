// Wrpte a Cipher Algorithm

class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }
  encrypt(str){
    let cipherX = [];
    let solution = '';
    const upperStr = str.toUpperCase(); // converts to uppercase
    console.log(upperStr);
    for(let i = 0; i < str.length; i++){
      if(upperStr.charCodeAt(i) < 64){
      cipherX.push(upperStr.charCodeAt(i)); // converts string to code list
      console.log(cipherX);
      } else if(upperStr.charCodeAt(i) + this.shift <= 90){
        cipherX.push(this.shift + upperStr.charCodeAt(i)); // converts string to code list
        console.log(cipherX);
      }
      else if(upperStr.charCodeAt(i) + this.shift >= 90){
        cipherX.push(upperStr.charCodeAt(i) + this.shift - 26); // converts string to code list
        console.log(cipherX);
      }
    }
    function loopFunc(x){
      solution += String.fromCharCode(x); // adds encrypted text to new string
    }
    cipherX.forEach(loopFunc)
    console.log(solution);
    return solution; // returns new string
  }

  decrypt(str){
    let cipherZ = [];
    let solution = '';
    const lowerStr = str.toUpperCase(); // converts to lowercase
    console.log(lowerStr);
    for(let i = 0; i < str.length; i++){
      if(lowerStr.charCodeAt(i) - this.shift >= 65){
        cipherZ.push(lowerStr.charCodeAt(i) - this.shift); // loops alphabet if needed
        console.log(cipherZ);
      } else if(lowerStr.charCodeAt(i) - this.shift <= 64){
        cipherZ.push(lowerStr.charCodeAt(i) + 26 - this.shift); // converts string to code list
        console.log(cipherZ);
      } 
      else if(lowerStr.charCodeAt(i) < 64){
      cipherZ.push(lowerStr.charCodeAt(i)); // converts string to code list
      console.log(cipherZ);
      }
    }   
    function loopFunc(x){
      solution += String.fromCharCode(x); // adds encrypted text to new string
    }
    cipherZ.forEach(loopFunc);
    let finalSolution = solution.toLowerCase();
    console.log(finalSolution);
    return finalSolution; // returns new string
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('A love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K NQXG VQ EQFG!'); // returns it back


/* Program Planning:
1. Split?
2. Convert to unicode
3. Caps?
4. Convert back
5. Rejoin

Note: Figured out I needed to add + this.shift to the if qualifier statement instead of sorting it out later!!!
*/