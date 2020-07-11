
//Employee required
const Employee= require("./Employee")


//build intern
class Intern extends Employee{
    constructor(name, id, email, school){
        super(id,name,email);
        this.school=school
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

//export
module.exports=Intern;