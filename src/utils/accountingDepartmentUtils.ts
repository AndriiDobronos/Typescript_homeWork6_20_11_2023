import {IEmployee} from "./employeeUtils.ts";
import {IDepartment} from "./departmentUtils";
import {IPreHiredEmployee} from "./preHiredEmployeeUtils";

export interface IAccountingDepartment {
    name: string;
    domain: string;
    budget: { debit: number; credit: number};
    takeOnBalance(entity: IEmployee | IDepartment): void;
    removeFromBalance(entity: IEmployee | IDepartment): void;
    paySalaries(employee: IEmployee | IPreHiredEmployee): void;
}