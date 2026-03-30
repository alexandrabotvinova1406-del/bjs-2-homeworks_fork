function getArrayParams(...arr) {

  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
