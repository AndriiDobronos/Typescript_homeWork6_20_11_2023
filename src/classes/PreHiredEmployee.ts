import {IPreHiredEmployee } from "../interfaces/preHiredEmployee.interface.ts";

export class PreHiredEmployee implements IPreHiredEmployee {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number,
        public bankAccountNumber: string
    ) {}
}