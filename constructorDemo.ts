class ConstructorDemo{
    private userName:string;
    private luckyNumber:number;

    constructor(userName: string, num: number){
        this.userName = userName;
        this.luckyNumber = num;
    }

    getMessage():string{
        return `Hi ${this.userName} your Lucky Number is: ${this.luckyNumber}`
    }
}

