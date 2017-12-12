import { IData } from './IData';
export class Data implements IData {
    number1: number;
    number2: number;

    constructor(num1:number, num2:number)
    {
        this.number1 = num1;
        this.number2 = num2;
    }
}
 