import {Employee, IEmployee} from "./employeeUtils.ts";
import {IDepartment} from "./departmentUtils.ts";
import {Department} from "./departmentUtils.ts"

export interface IAccountingDepartment {
    name: string;
    domain: string;
    budget: { debit: number; credit: number};
    takeOnBalance(entity: IEmployee | IDepartment): void;
    removeFromBalance(entity: IEmployee | IDepartment): void;
    paySalaries(): void;
}

export class AccountingDepartment extends Department implements IAccountingDepartment {
    constructor(public name: string, public domain: string, public budget: { debit: number; credit: number },
                public status:"active" | "inactive" | "unpaid leave",public paymentMethod:"internal" | "external") {
        super(name, domain, budget,status,paymentMethod);
    }

    takeOnBalance(entity: IEmployee | IDepartment ): void {
        if(entity.status === "active") {
            entity.paymentMethod = "internal"
        }
    }

    removeFromBalance(entity: IEmployee | IDepartment): void {
        if(entity.status === "inactive") {
            entity.paymentMethod = "external"
        }
    }

    paySalaries(): void {
        const date = new Date;
        if (date.getDate() === 20) {
            this.budget.credit += 200
        }
    }
}