// let num =2;
// for (let i = num; i < 10; i++) {
//     console.log(i);ṇ
// }


// let i = 21 ;
// do {
//     console.log("do-while", i)
//     i++;
// } while (i<10);


// let num =2;
// if(num > 5){
//     console.log("Number less than 5 ");
// }else if (num >10) {
//     console.log("numberlessthan 10");
    
// } else {
//     console.log("number");
    
// }

// const arr =[1,2,4,4];
// for(let i=0;i<arr.length;i++){
//     console.log("array",arr);
// }

// let j = 20 ;
// do{
//     console.log(j);
//     j++;
// }while(j<30);


// const person = {
//     age: 30,
//     name: "john",
//     occupation:"developer",
// };

// console.log(person.name);
// for( let a in person){
//     console.log(person.age);
// }
// for( let a in person){
//     console.log(a, person[a]);
// }

// const array = [1,2,3,4,5];
// for(let a = 0; a<array.length;a++){
//     console.log(array[a]);
// }

// for (let a of array){
//     console.log(a);
// }

// let num = 2;
// switch(num){
//     case 1 :
//         console.log("one");
//         break;
//     case 2 :
//         console.log("two");
//         break;
//     case 3 :
//         console.log("three");
//         break;
// }

// let number = 3 ;
// for(let i = 0;i<10; i++){
//     if (i ==number){
//         break;
//     }else{
//         console.log(i);
//     }
// }


// let number = 3;
// for(let i = 0;i<10; i++){
//     if (i == number){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1,
//     },
//     isVisible: true,
//     draw: function(){
//         console.log("draw");
//     },
// };
// circle.location.x;
// // circle.draw();


// function createcircle(radius){
//     return{
//         radius ,
//         draw (){
//                 console.log("draw");
//         },
//     };
// }

// const circle1 = createcircle(20);
// console.log(circle1.draw());
// circle1.draw();
// circle1.radius;


// function arearectangle(x,y){
//     return{
//     area(){
//         let area = x*y;
//         console.log("area of rectangle is",area);
//  },
// };
// }

// const rectangle = arearectangle (2,4);
// rectangle.area();

// var library =[
//     {
//     author: "ansh",
//     title: "best",
//     readingstatus: "true",
//     price: "200",
//     }
// ];

// for(let i = 0; i<library.length;i++){
//     console.log(library[i].author);
// }

// for(let i = 0; i<library.length;i++){
//     if (library[i].price<300){
//         console.log(library[i].author);
//     }
// };

//const array = [1,2,3,1,4];
//console.log(array.indexOf(3));
//console.log(array.indexOf(1,2));
//console.log(array.lastIndexOf(1));

// console.log(array.indexOf(1)!= -1);
// console.log(array.includes(1));

//console.log(array[4]);
//array.push(5);
// array.unshift(0);
// array.pop();
// array.shift();
// for(let i = 0;i<array.length;i++){
//     console.log(array[i]);
// }


// const array = [1,2,4,-1,];

// for(let i = 0;i<array.length;i++){
//     if(array.includes(-1 * array[i])){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// const courses = [
//     {id: 1, name:"a"},
//     {id:2, name:"b"},
// ]

// const index1 = courses.indexOf((courses) => {
//     return courses.name ==="a"
// })

// const first = [1,3,4];
// const second = [2,3,4];
// const final = first.concat(second);
// const sl = final.slice(1,6);
// console.log(final);
// console.log(sl);
// const combined = [...first,'a',...second,'b'];
// console.log(combined);

// const arr = [1,2,3];
// const Joined = arr.join("...");
// console.log(Joined);

// const string = " this is my last message";
// const parts = string.split(" ");
// const jj = string.join("-");
// console.log(jj);
// console.log(parts);

// const arr2 = [1,2,3,4];
// arr2.sort();
// console.log(arr2);
// arr2.reverse();
// console.log(arr2);

// var arr = [1,2,3,4,5,6];
// arr = arr.map((val) => val* 10);
// console.log(arr);

const person = {
    age: 30,
    name: "john",
    occupation:"developer",
};

const{age , name , occupation} = person;
console.log(person);
