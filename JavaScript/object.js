// const person ={
//     name: 'Nithin',
//     age:24,
//     greet: function(){
//         console.log(`Hello, my name is ${this.name},age is ${this.age}`);
//     }
// };

// person.greet();

// function createBook(title, author){
//     return {
//         title: title,
//         author: author,
//         describe: function(){
//             console.log(`${this.title} by ${this.author}`);
//         }
// }
// }
// const book1 =createBook('1994','George Orwell');
// const book2 =createBook('Brave New World','Aldous Huxley');
// book1.describe();
// book2.describe();


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let j=0
// while (j<10){
//     console.log(j);
//     j++;
// }

// let k=0
// do{
//     console.log(k);
//     k++;
//     }while(k<10);

// let person={naem:'john',age:30,city:"New York"};
// for (let key in person){
//     console.log(`key+":"+person[key]`);
// }


// let arr=[10,20,30];
// for (let value of arr){
//     console.log(value);
// }

// let car = {
//      brand: "Suzuki",
//      model:"Celerio",
//      year: 2015
// };
// console.log(car);


// let person=[];

// person.firstname="Pushpa";
// person.lastname="Raj";
// person.age=30;

// delete person.age;
// console.log(person);

// let book={
//     title: "1984",
//     author: "George Orwell"
// };

// function hasProperty(obj,key){
//     return key in obj;
// }
// console.log(hasProperty(book, "title"));
// console.log(hasProperty(book, "Year"))


// let user1={
//     name:"ganesh",
//     age:25
// }

// let user2={
//     name:"Satya",
//     age:25
// }

// let user3=Object.assign({},user1,user2)

// console.log(user3)