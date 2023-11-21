import {IPreHiredEmployee} from "../interfaces/preHiredEmployee.interface.ts";
import {IEmployee} from "../interfaces/employee.interface.ts";
import {Employee} from "./Employee.ts";
import {IDepartment, TPaymentMethod, TStatus} from "../interfaces/department.interface.ts";

export class Department implements IDepartment {
    public employees: IEmployee[] = [];

    constructor(
        public name: string,
        public domain: string,
        public budget: { debit: number; credit: number },
        public status: TStatus,
        public paymentMethod: TPaymentMethod,
    ) {}

    calculateBalance(): number {
        return this.budget.debit - this.budget.credit;
    }

    addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }
    convertPreHiredToEmployee(preHiredEmployee: IPreHiredEmployee): IEmployee {
        const convertedEmployee = new Employee(
            preHiredEmployee.firstName,
            preHiredEmployee.lastName,
            preHiredEmployee.salary,
            preHiredEmployee.bankAccountNumber,
            'internal',
            'active',
            this
        );
        return convertedEmployee;
    }

    removeEmployee(employee: IEmployee): void {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }
}
