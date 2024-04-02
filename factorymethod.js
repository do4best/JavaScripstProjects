class Customer{
    constructor(first,last){
        this.first = first;
        this.last = last;

    }
    toString(){
        return `${this.first}, ${this.last}`
    }
}
class ForignCustomer{
    static fullName(firstName,lastName){
        return new Customer(firstName,lastName)
    }
    static email(firstName,lastName,email){
        return `${new Customer(firstName,lastName)} and his email is ${email}`
    }
}
const Customer1 = ForignCustomer.fullName("Meer","Afzal")
const Customer2 = ForignCustomer.email("Meer","Afzal","do4best@gmail.com")
console.log(Customer1)
console.log(Customer2)