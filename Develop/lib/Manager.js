// const employee
const Employee= require("./Employee")


//build manager
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber= officeNumber
    }

    getRole(){
        return "Manager"
    }


    getofficeNumber(){
        return this.officeNumber
    }
}



//export

module.exports= Manager;