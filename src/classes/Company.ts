import {IDepartment } from "../interfaces/department.interface.ts";
import {IPreHiredEmployee} from "../interfaces/preHiredEmployee.interface.ts";
import {ICompany} from "../interfaces/company.interface.ts";
import {TAllEmployeeList} from "../interfaces/company.interface.ts"

export class Company implements ICompany {
    constructor(
        public name: string,
        public departmentList: IDepartment[],
        public preHiredEmployeeList: IPreHiredEmployee[],
        public allCompanyPersonnelList: TAllEmployeeList
    ){}
}