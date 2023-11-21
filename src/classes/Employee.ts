import {IDepartment, TPaymentMethod, TStatus} from "../interfaces/department.interface.ts";
import {PreHiredEmployee} from "./PreHiredEmployee.ts";
import {IEmployee } from "../interfaces/employee.interface.ts";

export class Employee extends PreHiredEmployee implements IEmployee {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number,
        public bankAccountNumber: string,
        public paymentMethod: TPaymentMethod ,
        public status: TStatus,
        public department: IDepartment
    ) {
        super(firstName, lastName, salary, bankAccountNumber);
    }
}