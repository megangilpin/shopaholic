export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    let amount = cartItem.item.price
    return tally + cartItem.quantity * amount;
  }, 0);
}
