// Task 1 - Customer Invoice Calculation

function calculateInvoice (subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount
    return `Total Invoice: $${total.toFixed(2)}`
} ;                                                                     // Creation of the function for invoce calculation

// Test Data
console.log (calculateInvoice(100, 0.08, 5)) ;                          // Output: Total Invoice: $103.00
console.log (calculateInvoice(500, 0.1, 20)) ;                          // Output: Total Invoice: $530.00


// Task 2 - Employee Hourly Wage Calculation 

function calculateHourlyWage (salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52)
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`
} ;                                                                     // Creating function to calcuate hourly wages

// Test Data
console.log (calculateHourlyWage(52000, 40)) ;                          // Output: Hourly Wage: $25.00
console.log (calculateHourlyWage(75000, 35));                           // Output: Hourly Wage: $41.21


// Task 3 - Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => {                   // Function for service fees calculation
    let discountPercentage ;
    if (years >= 5) {
        discountPercentage = 0.15
    } 
    else if (years >= 3) {
        discountPercentage = 0.10
    }
    else {
        discountPercentage = 0.05                                       // Metrics for percentages in fees
    } ;
    const discountedPrice = amount - (amount * discountPercentage)
    return `Discounted Price: $${discountedPrice.toFixed(2)}`
    } ;

// Test Data
console.log(calculateLoyaltyDiscount(100, 6));                          // Output: Discounted Price: $85.00
console.log(calculateLoyaltyDiscount(200, 2));                          // Output: Discounted Price: $190.00

// Task 4 - Product Shipping Cost Calculation

function calculateShippingCost (weight, location, expedited = false) {
    let base, lb, expeditedCost ;
    if (location === "USA") {
        base = 5 ;
         lb = 0.5 ;
         expeditedCost = expedited ? 10 : 0 ;
    } else if (location === "Canada") {
        base = 10 ;
         lb = 0.7 ;
         expeditedCost = expedited ? 10 : 0 ;      
    } else {
        return "Review your selection. Invalid location."               // Function will give back an error by not selecting the correct countries
    } ;
    let shippingCost = base + (weight * lb) + expeditedCost ;
    return `Shipping Cost: $${shippingCost.toFixed(2)}`
} ; 

console.log (calculateShippingCost(10, "USA", true)) ;                  // Output: Shipping Cost: $20.00
console.log (calculateShippingCost(5, "Canada", false)) ;               // Output: Shipping Cost: $13.50


//Task 5 - Business Loan Interest Calculation

function calculateLoanInterest (principal, rate, years) {
    interest = principal * rate * years
    return `Total Interest: $${interest.toFixed(2)}`                    // Function to calcualte loan interest
} ;

// Test Data
console.log(calculateLoanInterest(1000, 0.05, 3)) ;                     // Output: Total Interest: $150.00
console.log(calculateLoanInterest(5000, 0.07, 5)) ;                     // Output: Total Interest: $1750.00


// Task 6 - Filtering High-Value Transactions

let transactions = [500, 1200, 3000, 800, 2200] ;                       // Creation of array

const filterHighValueTransactions = (transctions, filterFunction) => {
    return `High-Value Transactions (filtered): ${transctions.filter(filterFunction)}`
} ;

// Test Data
console.log(filterHighValueTransactions(transactions, item => item > 1000));        // Output: High-Value Transactions (filtered): 1200,3000,2200


// Task 7 - Budget Tracker

function createBudgetTraker() {                               // Creation of the primary function
    let balance = 0 ; 
    return function(expense) {                                  // Creation of the secundary function
        balance -= expense ;
    return `Current Balance: -$${Math.abs(balance)}` ;
    } ;
}

let budget = createBudgetTraker();

// Test Data
console.log(budget(300));                                       // Output: Current Balance: -$300
console.log(budget(200));                                       // Output: Current Balance: -$200

