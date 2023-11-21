import {IEmployee} from "./employeeUtils.ts";
import {IPreHiredEmployee} from "./preHiredEmployeeUtils.ts";

export type TStatus = 'active' | 'inactive' | 'unpaid leave';

export type TPaymentMethod = 'external' | 'internal';

export interface IDepartment {
    name: string;
    domain: string;
    employees: IEmployee[];
    budget: {
        debit: number;
        credit: number;
    };
    status: TStatus;
    paymentMethod: TPaymentMethod;
    calculateBalance(): number;
    addEmployee(employee: IEmployee): void;
    convertPreHiredToEmployee(preHiredEmployee: IPreHiredEmployee): IEmployee;
    removeEmployee(employee: IEmployee): void;
}