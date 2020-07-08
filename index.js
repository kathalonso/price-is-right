function calculation(items) {
    let total = items.price * (1-items.discount) * items.quantity
    total = parseInt(total * 100) / 100

    return {...items, total}
}

function calculateTotal(items){
    items = items.map(calculation)
    return items
}

module.exports = calculateTotal