import { DioAccount } from "./DioAccount";

export class PetAccount extends DioAccount{
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (ammount:number): void => {
        super.deposit(ammount+10);
    }
}