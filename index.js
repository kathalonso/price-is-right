function calculateItemTotal(item) {
  const unformattedTotal = item.price * (1 - item.discount) * item.quantity
  const total = parseInt(unformattedTotal * 100) / 100

  return { ...item, total }
}

function calculateTotal(items) {
  return items.map(calculateItemTotal)
}

module.exports = calculateTotal
