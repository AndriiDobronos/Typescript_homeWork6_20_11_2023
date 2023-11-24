import {IEmployee} from "./employee.interface.ts";
import {IPreHiredEmployee} from "./preHiredEmployee.interface.ts";

export type TStatus = 'active' | 'inactive' | 'unpaid leave';

export type TPaymentMethod = 'external' | 'internal';

export type TBudget = {debit: number, credit: number};

export interface IBudget {
    budget: TBudget
}

export interface IDepartment extends IBudget {
    name: string;
    domain: string;
    employees: IEmployee[];
    status: TStatus;
    paymentMethod: TPaymentMethod;
    calculateBalance(): number;
    addEmployee(employee: IEmployee): void;
    convertPreHiredToEmployee(preHiredEmployee: IPreHiredEmployee): IEmployee;
    removeEmployee(employee: IEmployee): void;
}