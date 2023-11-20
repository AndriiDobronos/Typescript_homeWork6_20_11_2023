import {IPreHiredEmployee } from "./preHiredEmployeeUtils.ts";
import {IEmployee } from "./employeeUtils.ts";
import {Employee} from "./employeeUtils.ts";

export interface IDepartment {
    name: string;
    domain: string;
    employees: IEmployee[];
    budget: {
        debit: number;
        credit: number;
    };
    status: 'active' | 'inactive' | 'unpaid leave';
    paymentMethod: 'external' | 'internal',
    calculateBalance(): number;
    addEmployee(employee: IEmployee): void;
    convertPreHiredToEmployee(preHiredEmployee: IPreHiredEmployee): IEmployee;
    removeEmployee(employee: IEmployee): void;
}

export class Department implements IDepartment {
    public employees: IEmployee[] = [];

    constructor(
        public name: string,
        public domain: string,
        public budget: { debit: number; credit: number },
        public status: 'active' | 'inactive' | 'unpaid leave',
        public paymentMethod: 'external' | 'internal',
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
