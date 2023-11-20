import {IPreHiredEmployee } from "./preHiredEmployeeUtils.ts";
import {IDepartment} from "./departmentUtils.ts";
import {PreHiredEmployee} from "./preHiredEmployeeUtils.ts";

export interface IEmployee extends IPreHiredEmployee {
    paymentMethod: 'external' | 'internal';
    status: 'active' | 'inactive' | 'unpaid leave';
    department: IDepartment;
}

export class Employee extends PreHiredEmployee implements IEmployee {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number,
        public bankAccountNumber: string,
        public paymentMethod: 'external' | 'internal',
        public status: 'active' | 'inactive' | 'unpaid leave',
        public department: IDepartment
    ) {
        super(firstName, lastName, salary, bankAccountNumber);
    }
}