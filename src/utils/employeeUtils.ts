import {IDepartment, TPaymentMethod, TStatus} from "./departmentUtils";
import {IPreHiredEmployee } from "./preHiredEmployeeUtils.ts";

export interface IEmployee extends IPreHiredEmployee {
    paymentMethod: TPaymentMethod;
    status: TStatus;
    department: IDepartment;
}
