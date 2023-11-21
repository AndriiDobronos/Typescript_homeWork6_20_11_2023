import {IDepartment, TPaymentMethod, TStatus} from "../utils/departmentUtils.ts";
import {PreHiredEmployee} from "./PreHiredEmployee.ts";
import {IEmployee } from "../utils/employeeUtils.ts";

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