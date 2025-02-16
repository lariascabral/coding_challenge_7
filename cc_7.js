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