

function getSolutions(a, b, c) {

    let dis = Math.pow(b, 2) - 4 * a * c;
    let x1 = ((-b + Math.sqrt(dis)) / (2 * a));
    let x2 = ((-b - Math.sqrt(dis)) / (2 * a));
    
    if (dis < 0) 
    return {D: dis};
        
    else if (dis == 0) 
    return {roots: [x1], D: dis};
        
    else if (dis > 0) 
    return {roots: [x1,x2], D: dis};
};  
    
getSolutions(1, 3, -5);

    
function showSolutionsMessage(a, b, c) {
    let result;
    result = getSolutions(a, b, c);
    
    document.write(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    document.write(`Значение дискриминанта: ${result.D}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) { 
        console.log(`Уравнение не имеет вещественных корней`);
        document.write(`Уравнение не имеет вещественных корней`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
        document.write(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
        document.write(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
};

showSolutionsMessage(1, 3, -5);


let data = {
    algebra: [5,4,5,3,4,5,3],
    geometry: [4,3,5,5,4],
    russian: [5,5,5,4,5,5],
    physics: [4,4,5,4,3,5],
    music: [5,5,5],
    english: [4,4,3,5,4],
    poetry: [5,5,5,5],
    chemistry: [3,4],
    french: [4,4,5],
};

function getAverageMark(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
      };
  let average = sum / marks.length;
  console.log(average);
  return average;
};

function getAverageScore(data) {
  let marksAverage = 0;
  let dataLength = 0;
  for (let averageMark in data) {
    
    let marks = data[averageMark];
    data[averageMark] = getAverageMark(marks); 
    
    marksAverage = marksAverage + data[averageMark];
    dataLength++;
  }

  data.average = marksAverage / dataLength;
  return data;
};
getAverageScore(data);
console.log(data);


function getPersonData( secretData ) {
    if (secretData.aaa === 0 && secretData.bbb === 0) {
      return secretData = {firstName: "Родриго", lastName: "Родриго"};
    } 
    else if (secretData.aaa === 1 && secretData.bbb === 1) {
      return secretData = {firstName: "Эмильо", lastName: "Эмильо"};
    }
    else if (secretData.aaa === 0 && secretData.bbb === 1) {
      return secretData = {firstName: "Родриго", lastName: "Эмильо"};
    } 
    else if (secretData.aaa === 1 && secretData.bbb === 0) {
      return secretData = {firstName: "Эмильо", lastName: "Родриго"};
    } 
  };
  
  
  console.log(getPersonData({aaa: 0, bbb: 0}));
  console.log(getPersonData({aaa: 1, bbb: 0}));
  console.log(getPersonData({aaa: 0, bbb: 1}));
  console.log(getPersonData({aaa: 1, bbb: 1}));

  