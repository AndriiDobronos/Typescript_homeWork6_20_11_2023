import {IDepartment  } from "./departmentUtils.ts";
import {IPreHiredEmployee} from "./preHiredEmployeeUtils.ts";
import {IEmployee} from "./employeeUtils.ts";

type TAllEmployeeList = (IPreHiredEmployee | IEmployee)[] ;

export interface ICompany {
    name: string;
    departmentList: IDepartment[];
    preHiredEmployeeList: IPreHiredEmployee[];
    allCompanyPersonnelList: TAllEmployeeList;
}

export class Company implements ICompany {
    constructor(
        public name: string,
        public departmentList: IDepartment[],
        public preHiredEmployeeList: IPreHiredEmployee[],
        public allCompanyPersonnelList: TAllEmployeeList
    ){}
}