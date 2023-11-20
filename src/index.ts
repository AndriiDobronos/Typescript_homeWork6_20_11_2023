//У вас є сутність - Компанія, яка має назву, список департаментів, список
// попередньо найнятого персоналу, а також список усього персоналу
// компанії - співробітники всіх департаментів і попередньо найняті.
//
// Сутність Департамент - має назву, доменну область, список своїх
// співробітників і бюджет, що складається з дебіту і кредиту.
//
// Так само у неї існують методи для обчислення балансу виходячи з поточного
// бюджету, додавання нових співробітників і перетворення з Попередньо
// найнятого на Співробітника або видалення Співробітника з минулого відділу.
//
// Сутність Попередньо найнятого співробітника має ім'я, прізвище,
// зарплата та номер банківського рахунку.
//
// Сутність Співробітника - ім'я, прізвище, платіжну інформацію,
// зарплату, статус (активний, неактивний, у неоплачуваній відпустці)
// і знання про департамент, до якого він прикріплений.
//
// Так само у нас є сутність Бухгалтерія, яка є департаментом і має
// властивість баланс, а також методи для взяття на баланс співробітника
// або департаменту, зняття з балансу і виплати зарплати для всього персоналу.
//
// Попередньо найняті співробітники отримують зарплату за допомогою
// зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.


import {IEmployee } from "./employeeUtils.ts";
import {IDepartment } from "./departmentUtils.ts";
import {IPreHiredEmployee} from "./preHiredEmployeeUtils.ts";
import {AccountingDepartment } from "./accountingDepartmentUtils.ts";
import {Employee} from "./employeeUtils.ts";
import {PreHiredEmployee} from "./preHiredEmployeeUtils.ts";

const accountingDepartment = new AccountingDepartment(
    "IT accountingDepartment",
    ".ua",
    {debit:1000,credit:500},
    "active",
    "internal"
);
console.log(accountingDepartment,accountingDepartment.paySalaries())

const employee = new Employee(
    "John",
    "James",
    200,
    "777",
    "internal",
    "active",
    accountingDepartment,
);
console.log(employee);

const preHiredEmployee = new PreHiredEmployee(
    "Jan",
    "Jin",
    300,
    "888"
);
console.log(preHiredEmployee)
