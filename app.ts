const person = {
    name: "dan",
    age: 37,
    hobbies: ["football", "cooking"],
    role: [1, "Surf"] // this is a TUPLE (array of fixed length and type)

}

person.role.push("running"); 
person.role[1] = 5 

// this is allowed as the type is an array w/ either number or string


