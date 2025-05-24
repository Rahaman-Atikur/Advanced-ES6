let newArray =[];
for (let i = 0; i < numbers.length; i++) {
  const newNumbers = numbers[i] + 1;
  newArray.push(newNumbers);
}
console.log(newArray);

const newArray = numbers.map(value=>value+1);
console.log(newArray);

const newArray = numbers.map((numbers) => {
   return numbers + 1;
});
const numbers = [1, 2, 3, 4, 5, 6];
const squareArray = numbers.map((element) => element * element);
console.log(squareArray);
const friends = ["rahim", "karim", "naim"]
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
}
const newFriends = friends.map((element,index)=>{
    return element;
})
 console.log(newFriends);