import {IEmployee} from "./employee.interface.ts";
import {IDepartment} from "./department.interface";
import {IPreHiredEmployee} from "./preHiredEmployee.interface";

export interface IAccountingDepartment {
    name: string;
    domain: string;
    budget: { debit: number; credit: number};
    takeOnBalance(entity: IEmployee | IDepartment): void;
    removeFromBalance(entity: IEmployee | IDepartment): void;
    paySalaries(employee: IEmployee | IPreHiredEmployee): void;
}