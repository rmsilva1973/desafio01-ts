export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit(ammount: number): void {
    if(this.validateStatus()){
      this.balance += ammount
      console.log(`Você depositou ${ammount} na conta ${this.name}`)
    }
  }
  
  withdraw = (ammount: number): void => {
    if(this.validateStatus()){
      if (this.balance >= ammount) {
        this.balance -= ammount;
        console.log(`Você sacou ${ammount} da conta ${this.name}`)
      } else {
        console.log(`Saldo insuficiente para sacar ${ammount} da conta ${this.name}`)
      }
    }
  }

  getBalance = (): void => {
    console.log(`Saldo da conta ${this.name}: ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
