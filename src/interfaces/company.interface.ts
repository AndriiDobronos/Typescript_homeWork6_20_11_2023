import {IDepartment  } from "./department.interface.ts";
import {IPreHiredEmployee} from "./preHiredEmployee.interface.ts";
import {IEmployee} from "./employee.interface.ts";

export type TAllEmployeeList = (IPreHiredEmployee | IEmployee)[] ;

export interface ICompany {
    name: string;
    departmentList: IDepartment[];
    preHiredEmployeeList: IPreHiredEmployee[];
    allCompanyPersonnelList: TAllEmployeeList;
}