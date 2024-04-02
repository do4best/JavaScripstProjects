class Beverage{
    consume(){

    }
}
class Tea extends Beverage{
    consume(){
        console.log("This is Tea")
    }
}
class Coffee extends Beverage{
    consume(){
        console.log("This is Coffee")
    }
}
class Serap extends Beverage{
    consume(){
        console.log("Let 's make Jaam Sheerin")
    }
}

let coffee = new Coffee();
let serap = new Serap();
serap.consume()
coffee.consume()