// 'use strict';
// // function fruitProcessor(apples,oranges){
// //     console.log(apples,oranges);
// //     const juice=  `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // console.log(fruitProcessor(5,1));

// // function declarion
// function calcAge(birthYear){
//     return 2037-birthYear;
// }
// const firstAge=calcAge(2000);


// //function expression or annonymous is function without name
// const calcAge2=function  (birthYear){
// return 2037-birthYear;
// };
// const secondAge= calcAge2(2000);

// // Arrow Function
// const calcAge3=birthYear=>2037-birthYear;
// const thirdAge=calcAge3(2000);
// console.log(firstAge,secondAge,thirdAge);

// const yearsUntilRetirement=(birthYear,firstName)=>{
//     const age=2037-birthYear;
//     const retairement=65-age;
//     // return retairement;
//     return `${firstName} retaires in ${retairement} years`;
// }
// console.log(yearsUntilRetirement(2000,'abdalla'));
// // function callin in other function
// const cutFruitPieces= fruit=>fruit*4;
// function fruitProcessor(apples,oranges){
//     const applePieces=cutFruitPieces(apples);
//     const orangePieces=cutFruitPieces(oranges);
//     const juice=  `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(3,4))

// const calcAverage= (a,b,c)=>(a+b+c)/3;

// const dolphinsScore=calcAverage(85,54,41);
// const koalasScore=calcAverage(23,34,27);

// console.log(dolphinsScore,koalasScore);

// const checkWinner= function (avgDolphins,avgKoalas){
//     if(avgDolphins >= 2*avgKoalas){
//         console.log(`dolphins Won ${avgDolphins} points`)
//     }else if(avgKoalas >= 2*avgDolphins){
//         console.log(`Koals won ${avgKoalas} points`)
//     }else{
//         console.log(`no team wins`)
//     }
// }
// console.log(checkWinner(dolphinsScore,koalasScore));
// // array methods we use PUSH to add data at the end of array 
// const friends=['Abdalla', 'Sakariye','Mustafe'];
// friends.push('siciid');
// console.log(friends);
// // UNSHIFT Method we use to add data at the beginning of an array
// friends.unshift('mohamed');
// console.log(friends);
// // POP Method is used to remove the last element of an array
// friends.pop();
// console.log(friends); 
// // SHIFT Methos is used to remove first element of an array
// friends.shift();
// console.log(friends);
// // to know index number of an element use indexOf
// console.log(friends.indexOf('Abdalla'));
// // si aad u ogaato inuu elelment ka tirsan yahay arraygaaga use includes Method
// console.log(friends.includes('Abdsalla'));
// if (friends.includes('Sakariye')){
//     console.log('You have freind called Sakariye')
// }
// const calcTip =function(bills){
//     return bills>=50 && bills <= 300 ? bills *0.15: 
//     bills * 0.2;
// }
// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,totals);
// // objects
// const abdalla= {
//     firstNameOf: 'abdalla',
//     lastName:'Mohamed',
//     age:2037-1999,
//     job:'teacher',
//     friend:['Mohamed','ahmed','mustafe']
// };
// console.log(abdalla);
// console.log(abdalla.lastName);
// console.log(abdalla['lastName']);
// const nameKey='NameOf';
// console.log(abdalla['first' + nameKey]);
// const nameKey2= 'Name'
// console.log(abdalla['last' + nameKey2]);

// // const interestedIn=prompt('What do you want to know about Abdalla? Choose between firstName,lastName,age,job and friends');
// // console.log(abdalla[interestedIn]);

// abdalla.location='Hargeisa';
// abdalla['facebook']='abdallaMoh';
// console.log(abdalla);
// console.log(abdalla.location);
// console.log(abdalla['facebook']);
// console.log(`${abdalla.firstNameOf} has ${abdalla.friend.length} friends ,his best friend is called ${abdalla.friend[0]}`);


// const jonas={
//     firstName: 'Jonas',
//     lastName: 'sool',
//     birthYear:1990,
//     job:'driver',
//     friends:['ahmed', 'Mustafe','Ali', 'Mohamed'],
//     hasDriversLicense:true,

//     calcAge: function (birthYear){
        
//         return 2037-this.birthYear;
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge}`;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.getSummary());

// const marksBmi={
//     fullName:'Mark Miller',
//     mass:78,
//     height:1.69,
    
//     calcBMI: function(){
//         this.BMI= this.mass / this.height ** 2;
//     this.mass / (this.height*this.height);
        
//         return this.BMI;
//     }
// };
// const johnBmi={
//     fullName:'John Smith',
//     mass:92,
//     height:1.95,
    
//     calcBMI: function(){
//         this.BMI= this.mass / this.height ** 2;
//     this.mass / (this.height*this.height);
        
//         return this.BMI;
//     }
// };
// marksBmi.calcBMI();
// johnBmi.calcBMI();
// if (marksBmi.BMI > johnBmi.BMI){
//     console.log(`${marksBmi.fullName}'s BMI ${marksBmi.BMI} is higher than ${johnBmi.BMI}! `);
// }else if (johnBmi.BMI > marksBmi.BMI){
//     console.log(`${johnBmi.fullName}'s BMI ${johnBmi.BMI} is higher than ${marksBmi.BMI}! `);
// }else{
//     console.log('they hava same')
// }

const years=[1991,2007,1969,2020];
const ages=[];
for (let i=0; i<years.length; i++){
   ages[i]=2037-years[i];
}
console.log(ages)
