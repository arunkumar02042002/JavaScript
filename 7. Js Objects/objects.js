let user = {
    name:"Arun",
    address:{
        city:"FBD",
        state:"HR",
    },
    courses:["html", "css", "js"]
}

let {name:Useraname, address: {city}} = user;
console.log(Useraname, city)