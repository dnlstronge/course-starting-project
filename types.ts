// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]

// } = {
//     name: "dan",
//     age: 37,
//     hobbies: ["football", "cooking"],
//     role: [1, "Surf"] // this is a TUPLE (array of fixed length and type but needs explicitly set as such above)

// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role{ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
  name: "dan",
  age: 37,
  hobbies: ["football", "cooking"],
  role: Role.AUTHOR
};
console.log(person.role) // expect 7
//person.role.push("running");
//person.role[1] = 5

// this is allowed as the type is an array w/ either number or string

// if you explicity set the type as a tuple TS should throw errors, try.....

/* Typscript allows enums =====> enum {NEW, OLD}  */
