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
        if (cartItem != null && item.id == cartItem.id)
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
                item.ingredientsPrice = x.pickedSize * x.checkedIngredients.length;
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