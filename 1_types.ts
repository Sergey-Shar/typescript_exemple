const isFethcing:boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 4e54

const numberArrey : number[] = [1,1,2,3,5,8,13]
const numberArrey2 : Array<number> = [1,1,2,3,5,8,13] // дженерик тип

// Tuple
const contact: [string, number] = ['Sergey', +375445619067]

// Any
let variable:any = 42
variable = ""

// Function
const sayMeName = (name: string): void => console.log(name)

//Never например для бесконечного цикла
const infinite = ():never => {
    while (true) {

    }
}

type Login = string
const login:Login = "Admin"

type Id = string | number
let id: Id = 21
id = "21"