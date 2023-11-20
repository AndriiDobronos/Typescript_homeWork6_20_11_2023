export interface IPreHiredEmployee {
    firstName: string;
    lastName: string;
    salary: number;
    bankAccountNumber: string;
}

export class PreHiredEmployee implements IPreHiredEmployee {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number,
        public bankAccountNumber: string
    ) {}
}