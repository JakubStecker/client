import {cardSections} from "~/assets/data.js"
import {carousels} from "~/assets/data.js"
import {navLinks} from "~/assets/data.js"

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
    subQuantity(state, x) {
        let cartItem = undefined
        x.ing.sort()
        for (let i = 0; i < state.inCart.length; i++) {
            if (x.size == state.inCart[i].size) {
                console.log("size");
                if (state.inCart[i].selectedIngredients.length > 0 && x.id == state.inCart[i].id) {
                    console.log(x.id);
                    console.log(state.inCart[i].id); 
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
        if (cartItem != undefined) {
            cartItem.quantity--;
            if (cartItem.quantity == 0) {
                console.log(state.inCart.indexOf(cartItem));
                state.inCart.splice(state.inCart.indexOf(cartItem))
            }
        }
            
    },
    addQuantity(state, x) {
        let cartItem = undefined
        x.ing.sort()
        for (let i = 0; i < state.inCart.length; i++) {
            if (x.size == state.inCart[i].size) {
                console.log("size");
                if (state.inCart[i].selectedIngredients.length > 0 && x.id == state.inCart[i].id) {
                    console.log(x.id);
                    console.log(state.inCart[i].id);
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
        if (cartItem != undefined) 
            cartItem.quantity++;    
    },
    finalPriceMethod(state, x) {
        console.log(x.id);
        let cartItem = undefined
        x.ing.sort()
        for (let i = 0; i < state.inCart.length; i++) {
            if (x.size == state.inCart[i].size) {
                console.log("size");
                if (state.inCart[i].selectedIngredients.length > 0 && x.id == state.inCart[i].id) {
                    console.log(x.id);
                    console.log(state.inCart[i].id);
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
