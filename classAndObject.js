class product{
    constructor(name,brand,price){
        this.name=name;
        this.brand=brand;
        this.price=price;
    }
    owner="Atikur"
    details(){
        console.log("That is perfectly fine");
    }
}
const iphone = new product("Samsung","Apple","1500");
console.log(iphone);
