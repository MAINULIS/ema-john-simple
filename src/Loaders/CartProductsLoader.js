import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart is in database, you have to use async await 
    const storedCart = getShoppingCart();
    const savedCart = [];

    console.log(storedCart)
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }

    }
    // javaScript function allows us to return only one thing.if we need to return more than one thing, then..
    /* option-1: return as an array
      return [products, savedCart]

      option-2: return as an object
      return {products, cart: savedCart}
     */
    return savedCart;
};

export default CartProductsLoader;