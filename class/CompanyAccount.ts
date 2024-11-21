import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (ammount: number): void => {
    this.deposit(ammount);
    console.log(`Voce pegou um empréstimo de ${ammount} para a conta ${this.getName()}`)
  }
}
