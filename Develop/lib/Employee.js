// TODO: Write code to define and export the Employee class
//define the class employee & what it requires
class Employee{
    constructor(name, id, email, role="Employee"){
        this.name=name,
        this.id=id,
        this.email=email,
        this.role=role
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }
}

//Export
module.exports= Employee