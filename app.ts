type combinable = number | string;



function combine(
  input1: number | string,
  input2: number | string,
  converted: combinable
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    converted === "as_number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if(converted === "as_number") {
  // return + result
  // }
  // if(converted === "as_string") {
  //   return result.toString()
  // }
  return result;
}

const combinedStrings = combine(2, 5, "as_number");
console.log(combinedStrings);
const combinedboth = combine("2", "2", "as_number");
console.log(combinedStrings);
const combinedNums = combine(2, 3, "as_string");
console.log(combinedNums);
