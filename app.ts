function add(n1: number, n2: number, showresult: boolean) {
  // if(typeof(n1) !== "number" || typeof(n2) !== "number") {
  //     throw new Error("Incorrect input!")
  // }
  if (showresult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const num1 = 5;
const num2 = 7.4;
const printResult = true;

add(num1, num2, printResult)