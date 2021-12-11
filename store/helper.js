getCartItem = (state, x) => {
    console.log(x)
    let cartItem = undefined
    x.ing.sort()
    for (let i = 0; i < state.inCart.length; i++) {
        if (x.size == state.inCart[i].size) {
            if (state.inCart[i].selectedIngredients.length > 0 && x.id == state.inCart[i].id) {
                state.inCart[i].selectedIngredients.sort()
                for (let j = 0; j < x.ing.length; j++) {
                    if (x.ing.length == state.inCart[i].selectedIngredients.length && x.ing[j] == state.inCart[i].selectedIngredients[j]) {
                        cartItem = state.inCart[i]
                        break
                    }
                }
            }
            else {
                cartItem = state.inCart.find(item => item.id == x.id && item.size == x.size)
            }
        }
    }
    return cartItem
}

module.exports = {
    getCartItem
}