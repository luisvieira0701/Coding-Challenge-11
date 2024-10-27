const productSelector = document.getElementById('product-selector')
const quantityInput = document.getElementById('quantity')
const totalPriceElement = document.getElementById('total-price')
const orderSummary = document.getElementById('order-summary')

//Task 3- Function to calculate and update total price based on product and quantity
function updateTotalPrice () {
    const productPrice = parseFloat(productSelector.value)
    const quantity = parseInt(quantityInput.value)
    const totalPrice = productPrice * quantity

    totalPriceElement.textContent=totalPrice.toFixed(2)
}

//Task 2- Add Event Listener for Product Selection
productSelector=addEventListener('change', updateTotalPrice)
quantityInput=addEventListener('input', updateTotalPrice)