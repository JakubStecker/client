import { cardSections } from "~/assets/data.js"
import { carousels } from "~/assets/data.js"
import { navLinks } from "~/assets/data.js"

const {getCartItem} = require('./helper')

export const state = () => ({
    products: cardSections,
    carousel: carousels,
    navLink: navLinks,
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
            if (item != undefined) {
                item.size = x.pizzaSize
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
        for (let i = 0; i < state.products.length; i++) {
            const item = state.products[i].cards.find(product => product.id == x.id)
            if (item !== undefined) {
                item.ingredientsPrice = x.pickedPizzaPrice * x.checkedIngredients.length;
                for (let j = 0; j < x.checkedIngredients.length; j++) {
                    item.selectedIngredients[j] = x.checkedIngredients[j];
                }
            }
        }
    },
    subQuantity(state, x) {
        let cartItem = getCartItem(state, x)
        if (cartItem != undefined) {
            cartItem.quantity--;
            if (cartItem.quantity == 0) state.inCart.splice(state.inCart.indexOf(cartItem))
        }

    },
    addQuantity(state, x) {
        let cartItem = getCartItem(state, x)
        if (cartItem != undefined)
            cartItem.quantity++;
    },
    finalPriceMethod(state, x) {
        let cartItem = getCartItem(state, x)
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
    getCarousel: (state) => () => {
        return state.carousel
    },
    getProducts: (state) => () => {
        return state.products
    },
    getNavLinks: (state) => () => {
        return state.navLink
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
