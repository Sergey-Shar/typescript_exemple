interface Person {
    name: string
    age: number
} 

type PersonKeys = keyof Person // name | age

interface User {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type userKeysNotMeta = Exclude< keyof User , '_id' | 'createdAt'> // name | email
type userKeysNotMeta2 = Pick<User, "name" | "email"> // name | email