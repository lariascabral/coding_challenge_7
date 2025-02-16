// Task 1 - Customer Invoice Calculation

function calculateInvoice (subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount
    return `Total Invoice: $${total.toFixed(2)}`
} ;

// Test Data
console.log (calculateInvoice(100, 0.08, 5)) ;                          // Output: Total Invoice: $103.00
console.log (calculateInvoice(500, 0.1, 20)) ;                          // Output: Total Invoice: $530.00