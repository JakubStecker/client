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
            console.log(item.selectedIngredients.sort())
            cartItem.selectedIngredients.sort()
            console.log(cartItem.selectedIngredients.sort())
            for (let j = 0; j < item.selectedIngredients.length; j++) {
                console.log(item.selectedIngredients.length)
                console.log(cartItem.selectedIngredients.length)
                console.log(item.selectedIngredients[j])
                console.log(cartItem.selectedIngredients[j])
                if (item.selectedIngredients.length != cartItem.selectedIngredients.length || item.selectedIngredients[j] != cartItem.selectedIngredients[j]) {
                    compareArray = false
                    console.log(compareArray)
                    break 
                }  
            }
            console.log(cartItem)
            console.log(item.id)
            console.log(cartItem.id)
            console.log(item.size)
            console.log(cartItem.size)
            console.log(compareArray) 
        }
        if (cartItem != null && item.id == cartItem.id && item.size == cartItem.size && compareArray)
            cartItem.quantity = x.quantity
        else {
            item.quantity = x.quantity
            state.inCart.push(item)
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