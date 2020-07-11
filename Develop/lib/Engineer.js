
//Const is employee
const Employee= require("./Employee");


//build the engineer id, name, email, github
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, github);
        this.github = github
    }
    //Establishing role
    getRole(){
        return "Engineer";
    }

    //establishing github
    getGithub(){
        return this.github
    }
}



//export the engineer
module.exports= Engineer;