import cartTypes from './cart.types'

export const addProduct = (nextCartItems) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItems
})