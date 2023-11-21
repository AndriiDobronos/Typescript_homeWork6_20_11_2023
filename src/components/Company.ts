import {IDepartment } from "../utils/departmentUtils.ts";
import {IPreHiredEmployee} from "../utils/preHiredEmployeeUtils.ts";
import {ICompany} from "../utils/companyUtils.ts";
import {TAllEmployeeList} from "../utils/companyUtils.ts"

export class Company implements ICompany {
    constructor(
        public name: string,
        public departmentList: IDepartment[],
        public preHiredEmployeeList: IPreHiredEmployee[],
        public allCompanyPersonnelList: TAllEmployeeList
    ){}
}