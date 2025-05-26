const person = {
  name: "Mike",
  action: function () {
    console.log(this.name);
  },
  sleep(){
    console.log(`${this.name} sleep at 10 pm`);
  }
};
person.action();

console.log(person.name);
person.sleep();
class humanBeing {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let Joe = new humanBeing("MIKE",35);
console.log(Joe);
