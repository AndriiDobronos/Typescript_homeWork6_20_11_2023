import {IDepartment, TPaymentMethod, TStatus} from "./department.interface";
import {IPreHiredEmployee } from "./preHiredEmployee.interface.ts";

export interface IEmployee extends IPreHiredEmployee {
    paymentMethod: TPaymentMethod;
    status: TStatus;
    department: IDepartment;
}
