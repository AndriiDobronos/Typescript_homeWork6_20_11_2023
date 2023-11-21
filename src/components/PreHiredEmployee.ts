import {IPreHiredEmployee } from "../utils/preHiredEmployeeUtils.ts";

export class PreHiredEmployee implements IPreHiredEmployee {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number,
        public bankAccountNumber: string
    ) {}
}