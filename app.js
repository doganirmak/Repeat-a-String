function repeatStringNumTimes(str, num) {
    let result = "";
    if (num > 0){
       for (; num >= 1; num--){
         result += str;
       }
       return result;
    }
    return "";
  }
  
  repeatStringNumTimes("abc", 3);