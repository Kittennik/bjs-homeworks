function compareArrays(arr, arr2) {
    return arr.length == arr2.length && arr.every((cell, i) => cell === arr2[i])
  };
  
  
  function memoize(fn, limit) {
    const results = []; 
    return function () {
      let args = Array.from(arguments);
      let result = results.find(function (v,i) {
      return compareArrays(args, results[i].args);
      });   
      if (result == undefined) {
        total = fn(...args);
        results.push({args, total}); 
        console.log(`Новое вычисление ${total}`);
      } else {
        total = result.total;
        console.log(`Взято из памяти ${total}`);
      }
  
      if (results.length > (limit)) {
         results.splice(0, ((limit)-1));
      }
        return total;
    }
  }
  const sum = (a, b) => a + b;
  const mSum = memoize(sum, 4);
  
  mSum(3,4);
  mSum(1,2);
  mSum(3,4);
  mSum(4,3);
  mSum(1,2);
  mSum(5,1);
  mSum(3,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(7,2);
  mSum(3,4);
  mSum(3,4);
  mSum(2,1);
  mSum(2,2);
  mSum(7,2);
  mSum(7,2);
  mSum(2,1);