import {IEmployee} from "../interfaces/employee.interface.ts";
import {Department} from "./Department.ts";
import {IDepartment, TPaymentMethod, TStatus} from "../interfaces/department.interface.ts";
import {IAccountingDepartment } from "../interfaces/accountingDepartment.interface.ts";
import {Employee} from "./Employee";
import {IPreHiredEmployee} from "../interfaces/preHiredEmployee.interface";
import {PreHiredEmployee} from "./PreHiredEmployee";


export class AccountingDepartment extends Department implements IAccountingDepartment {
    constructor(public name: string, public domain: string, public budget: { debit: number; credit: number },
                public status: TStatus ,public paymentMethod: TPaymentMethod) {
        super(name, domain, budget,status,paymentMethod);
    }

    takeOnBalance(entity: IEmployee | IDepartment ): void {
        if(entity instanceof Employee && entity.status === "active") {
            entity.paymentMethod = "internal";
            this.budget.credit += entity.salary;
        } else if(entity instanceof Department && entity.status === "active") {
            entity.paymentMethod = "internal";
            this.budget.credit += entity.calculateBalance();
        }
    }

    removeFromBalance(entity: IEmployee | IDepartment): void {
        if(entity.status === "inactive") {
            entity.paymentMethod = "external"
        }
    }

    paySalaries(employee: IEmployee | IPreHiredEmployee): void {
        const date = new Date;
        if (employee instanceof Employee && date.getDate() === 20) {
            employee.department.budget.credit += employee.salary
        } else if (employee instanceof PreHiredEmployee && date.getDate() === 20) {
            this.budget.credit += employee.salary
        }
    }
}