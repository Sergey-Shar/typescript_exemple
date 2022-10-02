const arrayOfNumbers: Array<number> = [1,1,2,3,5,8,13]
const arrayOfString: Array<string>  = ['Hello', 'Sergey']

// EC5 
function revers<T>(arr: T[]): T[] {
    return arr.reverse()
}

//EC6

const getter = <T>(data: T): T => data

getter(10)
getter("string")

revers(arrayOfNumbers)
revers(arrayOfString)

// тут мы указываем два типа дженериков и тепрь аргументы могут быть разных типов

class User_1<T, K> {
    constructor(public name: T, public age:K) {}

    public getPass(): string {
        return `${this.name} ${this.age}`
    }
}


// здесь мы явно указали что второй тп будет только число
class User_2<T, K extends number> {
    constructor(public name: T, public age:K) {}

    public getPass(): string {
        return `${this.name} ${this.age}`
    }

    public getSecret(): number {
        return this.age**2
    }
}

const yauhen = new User_1('Yauhen', '24')
const matvey = new User_1(10, '10')

yauhen.getPass()

matvey.getPass()