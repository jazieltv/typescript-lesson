## The three types of access modifiers in typescript are public, private, and protected.

-Public allows access from any location. If not specified TypeScript treats properties
and methods as public by default if no modifier is applied to them
class Employee {
public empCode: string;
empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";

## <------------------------------------------------------------------------------>

-Private allows access from within the same class. As shown below it would return
an error if you tryied to call out outside of the class where it was originally made
class Employee {
private empCode: number;
empName: string;
}

let emp = new Employee();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati";//OK

## <------------------------------------------------------------------------------>

-Protected allows access within the same class and subclasses
class Employee {
public empName: string;
protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }

}

class SalesEmployee extends Employee{
private department: string;

    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }

}

let emp = new SalesEmployee("John Smith", 123, "Sales");
emp.empCode; //Compiler Error

## <------------------------------------------------------------------------------>

The reasoning for using them is for added secruiurty and prevents them from
invalid use. Another case use for these is to allow a class to restrict access
to members (fields or functions). The idea is that the less one type is allowed
to access in another type, the less dependency can be created. This allows the
accessed object to be changed more easily without affecting objects that refer to it.
