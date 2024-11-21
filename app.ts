import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PetAccount } from './class/PetAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(15)
console.log(companyAccount)
const petAccount: PetAccount = new PetAccount('Sebastian',30);
console.log(petAccount);
petAccount.deposit(30)
peopleAccount.withdraw(10);
peopleAccount.withdraw(15);
companyAccount.getLoan(50);
petAccount.getBalance();