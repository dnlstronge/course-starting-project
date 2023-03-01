
const storedF = function add(n1: number, n2: number, showresult: boolean, phrase: string) {
  // if(typeof(n1) !== "number" || typeof(n2) !== "number") {
  //     throw new Error("Incorrect input!")
  // }
  if (showresult) {
    console.log(`${phrase} ${n1 + n2} `);
  } else {
    return n1 + n2;
  }
}

const n_1 = 5;
const n_2 = 7.4;
const show = true;
const result_phrase = "And the result is: "

storedF(n_1, n_2, show, result_phrase)