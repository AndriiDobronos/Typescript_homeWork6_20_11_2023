import {IDepartment  } from "./departmentUtils.ts";
import {IPreHiredEmployee} from "./preHiredEmployeeUtils.ts";
import {IEmployee} from "./employeeUtils.ts";

export type TAllEmployeeList = (IPreHiredEmployee | IEmployee)[] ;

export interface ICompany {
    name: string;
    departmentList: IDepartment[];
    preHiredEmployeeList: IPreHiredEmployee[];
    allCompanyPersonnelList: TAllEmployeeList;
}