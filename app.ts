function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedStrings = combine("meagles", "ducks");
console.log(combinedStrings);
const combinedNums = combine( 2, 3)
console.log(combinedNums)
