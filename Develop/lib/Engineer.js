// TODO: Write code to define and export the Engineer class.  
//HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName){
        super(name, id, email)
        this.gitHubUserName = gitHubUserName

    }
    getGithub(){
        return this.gitHubUserName
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer