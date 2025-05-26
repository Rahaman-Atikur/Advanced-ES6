class vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("Its moving right!");
    }
}
class Bus extends vehicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log("London to Birmingham");
    }

}
class Truck extends vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
        
    }
}
