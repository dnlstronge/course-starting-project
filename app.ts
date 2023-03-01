const person: {
    name: string;
    age: number; 
    hobbies: string[];
    role: [number, string]

} = {
    name: "dan",
    age: 37,
    hobbies: ["football", "cooking"],
    role: [1, "Surf"] // this is a TUPLE (array of fixed length and type but needs explicitly set as such above)

}

person.role.push("running"); 
person.role[1] = 5 

// this is allowed as the type is an array w/ either number or string

// if you explicity set the type as a tuple TS should throw errors, try.....
