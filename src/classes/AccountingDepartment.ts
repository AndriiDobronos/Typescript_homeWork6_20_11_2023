import {IEmployee} from "../interfaces/employee.interface.ts";
import {Department} from "./Department.ts";
import {IDepartment, TBudget, TPaymentMethod, TStatus} from "../interfaces/department.interface.ts";
import {IAccountingDepartment } from "../interfaces/accountingDepartment.interface.ts";
import {Employee} from "./Employee";
import {IPreHiredEmployee} from "../interfaces/preHiredEmployee.interface";
import {PreHiredEmployee} from "./PreHiredEmployee";

function isIEmployee(value: IEmployee | IDepartment):value is IEmployee {
    return value instanceof Employee;
}

function isIPreHiredEmployee(subject: IPreHiredEmployee |  IEmployee):subject is IPreHiredEmployee {
    return subject instanceof PreHiredEmployee;
}

export class AccountingDepartment extends Department implements IAccountingDepartment {
    constructor(public name: string, public domain: string, public budget: TBudget,
                public status: TStatus ,public paymentMethod: TPaymentMethod) {
        super(name, domain, budget,status,paymentMethod);
    }

    takeOnBalance(entity: IEmployee | IDepartment ): void {
        if(isIEmployee(entity) && entity.status === "active") {
            entity.paymentMethod = "internal";
            this.budget.credit += entity.salary;
        } else   if(!isIEmployee(entity) && entity.status === "active") {
            entity.paymentMethod = "internal";
            this.budget.credit += entity.calculateBalance();
        }
    }

    removeFromBalance(entity: IEmployee | IDepartment): void {
        if(entity.status === "inactive") {
            entity.paymentMethod = "external"
        }
    }

    paySalaries(employee:IPreHiredEmployee |  IEmployee): void {
        const date = new Date;
        if (isIPreHiredEmployee(employee) && date.getDate() === 20) {
            this.budget.credit += employee.salary;
        } else if(employee instanceof Employee && date.getDate() === 20) {
            employee.department.budget.credit += employee.salary
        }
    }
}