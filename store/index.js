import {cardSections} from "~/assets/data.js"

export const state = () => ({
    products: cardSections,
    inCart: []
})

export const mutations = {
    addItem(state, x) {
        let item = undefined;
        for (let i = 0; i < state.products.length; i++) {
            item = state.products[i].cards.find(product => product.id == x.id)
            if (item != undefined) break
        }
        let cartItem = state.inCart.find(product => product.id == x.id)
        let compareArray = true
        if (cartItem != undefined) {
            item.selectedIngredients.sort()
            cartItem.selectedIngredients.sort()
            for (let j = 0; j < item.selectedIngredients.length; j++) {
                if (item.selectedIngredients.length != cartItem.selectedIngredients.length || item.selectedIngredients[j] != cartItem.selectedIngredients[j]) {
                    compareArray = false
                    console.log(compareArray)
                    break 
                }  
            }
        }
        if (cartItem != undefined && item.id == cartItem.id && item.size == cartItem.size && compareArray) {
            cartItem.quantity += x.quantity
        }
        else {
            item.quantity = x.quantity
            state.inCart.push(JSON.parse(JSON.stringify(item)))
            item.quantity = 1
        }
    },
    sizeCheck(state, x) {
        for (let i = 0; i < state.products.length; i++) {
            const item = state.products[i].cards.find(product => product.id == x.id)
            if(item != undefined) {
                item.size = x.pizzaSize
                console.log(item.size);
                if (item.size == 33) {
                    item.price = 159;
                }
                if (item.size == 40) {
                    item.price = 219;
                }
                if (item.size == 50) {
                    item.price = 269;
                }
            } 
        }
    },
    ingredientsCheck(state, x) {
        for (let i = 0; i < state.products.length; i++){
            const item = state.products[i].cards.find(product => product.id == x.id)
            if(item !== undefined) {
                item.ingredientsPrice = x.pickedPizzaPrice * x.checkedIngredients.length;
                for (let j = 0; j < x.checkedIngredients.length; j++) {
                    item.selectedIngredients[j] = x.checkedIngredients[j];
                    console.log(item.selectedIngredients[j]);
                }
            }
        } 
    },
    subQuantity(state, id) {
        let cartItem = state.inCart.find(product => product.id == id)
            if (cartItem.quantity != 1) 
                cartItem.quantity--;
    },
    addQuantity(state, x) {
        let cartItem = state.inCart.find(product => product.id == x.id && () => {
          for (let i = 0; i < state.inCart.length; i++) {
            if (x.ing == state.inCart[i].checkedIngredients) {
              return true
            }
          }
        })
            cartItem.quantity++;
    },
    finalPriceMethod(state, id) {
        let cartItem = state.inCart.find(product => product.id == id)
        if (cartItem != undefined) {
            let sum = cartItem.price + cartItem.ingredientsPrice
            cartItem.totalSum = sum * cartItem.quantity
        }
    },
}

export const getters = {
    getCart: (state) => {
        return state.inCart
    },
    getProductById: (state) => (id) => {
        for (let i = 0; i < state.products.length; i++) {
            const element = state.products[i].cards.find(product => product.id == id)
            if (element != undefined) {
                return element
            }
        }
    }
}
