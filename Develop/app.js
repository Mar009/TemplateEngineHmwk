const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Arrays to push into for M,En,I
let employeeInformation= [];


// Questions: Starter User input, Shared info input (name, email, id), individual questions
const universalQuestions = [
    {
        type:"input", name: 'name', message: "Please enter the name of the employee: ",
    },

    {
        type:'input', name: 'email', message: "Please enter the Email of the employee: ",
    },

    {
        type:'input', name:'id', message:"Please enter the ID of the employee: ",
    }

];

//Intern questions
const questionsIntern=[
    ...universalQuestions, {type: 'input', name:'school', message:" Please enter the name of the school this Intern is attending: "},
]

//Engineer questions
const questionsEngineer=[
    ...universalQuestions, {type:'input',name:'github', message:"Please enter the Github username of the Engineer: "},
]

//Manager questions
const questionsManager=[
    ...universalQuestions, {type:'input', name:'officeNumber', message: "Please enter the Office Number of the Manager: "},
]



//Add employee
function additionalEmployee(){
    const addEmployeeQuestion=[{
        type:'list', 
        name:'choice',
        message: "What type of employee do you want to add? ",
        choices: ['Manager', 'Engineer', 'Intern', 'Done'],
    }]
    inquirer.prompt(addEmployeeQuestion)
        .then((answers)=>{
            if(answers.choice === 'Manager'){
                managerInformation();
            }
            if(answers.choice==='Engineer'){
                engineerInformation();
            }
            if(answers.choice==='Intern'){
                internInformation();
            }
            if(answers.choice==='Done'){
                createHTML();
            }
        })
}
// Manager, engineer, & Intern push 
function managerInformation(){
    inquirer.prompt(questionsManager).then((response)=>{
        const manager= new Manager(response.name, response.id, response.email, response.officeNumber);
        employeeInformation.push(manager);
        additionalEmployee();
    })
}

function engineerInformation (){
    inquirer.prompt(questionsEngineer).then((response)=>{
        const engineer= new Engineer(response.name, response.id, response.email, response.github);
        employeeInformation.push(engineer);
        additionalEmployee();
    })
}

function internInformation(){
    inquirer.prompt(questionsIntern).then((response)=>{
        const intern= new Intern(response.name, response.id, response.email, response.school);
        employeeInformation.push(intern);
        additionalEmployee();
    })
}

//output array
function createHTML(){
    try{
        const html=render(employeeInformation);
        fs.writeFileSync(outputPath, html);
    } catch (error) {console.log(error);}
}


additionalEmployee()