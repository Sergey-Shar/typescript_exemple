const logClass = (constructor: Function) => {
    console.log(constructor)
}

//@logClass

class User_3 {
    constructor(public name: string, public age:number) {}

    public getPass(): string {
        return `${this.name} ${this.age}`
    }

}