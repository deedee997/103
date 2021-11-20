function Employee (name, DoB, rule){
this.name=name;
this.DoB=DoB;
this.rule=rule;
}

Employee.prototype.calcAge = function (){
    console.log(2021-this.DoB);
}

let emp1=new Employee("mohd",1998,"programer");
emp1.calcAge();