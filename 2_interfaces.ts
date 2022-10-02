interface Rect {
    readonly id: string | number
    color?: string
    size: {
        large: number
        extraLarge: number
    }
}

const rect1: Rect = {
    id: "42",
    size: {
        large: 10,
        extraLarge: 40
    }
}
rect1.color = "black"

const rect2 = {} as Rect // теперь обьект rect принадлежит типу Rect

//*********************/

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect3: RectWithArea = {
    id: "123",
    size: {
        large: 20,
        extraLarge: 20
    },
    getArea(): number {
        return this.size.large * this.size.extraLarge
     },
}

interface IClock {
    time:Date
    setTime(date:Date):void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
      this.time = date
    }
    
}

//********************/

interface Styles {
    [key:string]:string | number
}

const css: Styles = {
    borderRadius: "2px",
    margin:"2px",
    f:10
}

