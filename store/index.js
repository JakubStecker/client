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
        let cartItem = state.inCart.find(item => item.id == x.id)
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
        if (cartItem != null && item.id == cartItem.id && item.size == cartItem.size && compareArray) {
            cartItem.quantity += x.quantity
            console.log("It is true")
            console.log(cartItem.size)
        }
        else {
            state.inCart.push(item)
            console.log("It is false")
        }
    },
    sizeCheck(state, x) {
        for (let i = 0; i < state.products.length; i++) {
            const item = state.products[i].cards.find(product => product.id == x.id)
            if(item != undefined) {
                item.size = x.pizzaSize
                console.log(item.size);
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
}

export const getters = {
    getProductById: (state) => (id) => {
        for (let i = 0; i < state.products.length; i++) {
            const element = state.products[i].cards.find(product => product.id == id)
            if (element != undefined) {
                return element
            }
        }
    }
}
