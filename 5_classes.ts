class Car {
    readonly model: string
    constructor(theModel: string){
        this.model = theModel
    }
}

// Модификаторы 
class Animal {
    protected voice: string = '' // доступно внтури класса и для всех классов которые от него наследуються
    public color: string = "black"

    private go(){
        console.log('go') // доступно только в том классе где она обьявлена
    }
}

class Cat extends Animal{
    public setVoice(voice:string) {
        this.voice = voice
    }
}

const cat = new Cat()

//  абстрактные классы

abstract class Component {
    abstract render():void
    abstract info(value:string): string
}

class AppComponent extends Component {
    render(): void {
        
    }
    info(value:string): string {
        return value.toUpperCase()
    }
}