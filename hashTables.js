
// create objeect literal of car

const car = {}
// a honda costs $25,000
car['Honda'] = 25000
// a lexus costs $50,000
car['Lexus'] = 50000
// a toyota costs $25,000
car['Toyota'] = 25000

console.log(car)

// create object literal of people who have made a payment
const paid = {}

// write a method that checks who has and hasnt made a payment
let checkPayment = name => {
  // first time the name passes through
  // check if it is inside of the object
  if (paid[name]){
    console.log(paid)
    console.log(`Thank you very much for your payment, ${name}`)
  } else {
    // if not, add name to paid obj and assign it to true 
    // so it will return the first part
    // of conditional statement
    paid[name] = true
    console.log(`Hey, ${name}, you still need to make your payment`)
  }
}

checkPayment('Penelope')
console.log(paid)
checkPayment('Grayce')
checkPayment('Penelope')
console.log(paid)