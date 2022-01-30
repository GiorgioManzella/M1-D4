/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/
function print(text) {
    return (console.log(`------------------${text}----------------`))

}
/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let numbers = [1,2,3,4,5]

//console.log (numbers[3])
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

//array style 
let myData = {
    name : 'Giorgio',
    surname : 'Manzella',
    email : 'Giorgio@gmail.it',
    address : 'via aldeberan 123',
    age : 27,
    
}



/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

myData.drivingLicense = true


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

 delete myData.age
 //myData.pop (age)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

 let myData2 = {
    name : 'Angela',
    surname : 'Rossi',
    email : 'Angelarossi@gmail.com',
    address : '123 casablanca',
    age : 27,
}
if (myData.address != myData2.address)  {
     console.log ('the address is not the same.')   
}
else {
     console.log ('the address is the same.')
}
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 100

//SOLUTION 1


//let checkout =(totalShoppingCart)
/*if (totalShoppingCart >= 50) {
    checkout = totalShoppingCart
}
else { checkout = (totalShoppingCart + 10)
}*/

//----------------------------------

let checkout = 0
checkout = (totalShoppingCart >=50) ? (checkout = totalShoppingCart) : (checkout = totalShoppingCart+10)

console.log(totalShoppingCart)
console.log(checkout)

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFriday = true
checkout = blackFriday ? (checkout *0.80) : (checkout)



console.log (checkout)
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = {
    brand : 'fiat',
    model : 'punto',
    licensePlate : 'ab12345' ,
}
let car2 = {
    brand : 'fiat',
    model : 'punto',
    licensePlate : 'ab46345' ,
}
let car3 = {
    brand : 'fiat',
    model : 'punto',
    licensePlate : 'rt12455' ,
}
let car4 = {
    brand : 'fiat',
    model : 'punto',
    licensePlate : 'iu12345' ,
}
let car5 = {
    brand : 'fiat',
    model : 'punto',
    licensePlate : 'qw12345' ,
}


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [ car1,car2,car3,car4,car5 ]

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop (car1)
carsForRent.pop (car5)



/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log (carsForRent)


/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = []
carsForSale.push (car2)
carsForSale.push (car4)
carsForSale.push (car3)

let totalCars = [carsForRent.length+carsForSale.length]
console.log (totalCars)
console.log (carsForSale)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log ('-----------------------EXERCISE N 13--------------------')

 

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
print('EX-X-1')
let list=[2,5,8]

list.reverse()

console.log(list)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
print('EX-X-2')
list=[4,8,20,7]
 
let r = Math.max(...list)

console.log(r)
/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

print('EX-X-3')

r = Math.min(...list)
console.log(r)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
print('Ex-X-4')

let eve= [1,4,7,23]
let result = eve.filter((i)=>i%2===1)
console.log(result)


/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

print('EX-X-5')

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */


console.log ('---------------------------------')


