import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import BtnCart from "./BtnCart";
import { Item } from "./Item";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    /* Calling the getProducts function when the component mounts. */
    useEffect(() => {
        getProducts();
    }, []);


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"));
        if (items) {
            setCart(items);
        }
    }, []);


    /**
     * GetProducts is an async function that fetches the data from the api/products endpoint, and then
     * sets the data to the products state.
     */
    const getProducts = async () => {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
    };

    const addToCart = (id) => {
        const product = products.find((product) => product.id === id);
        if (product) {
            if (cart.find((product) => product.id === id)) {
                setCart(
                    cart.map((product) => {
                        if (product.id === id) {
                            product.quantity++;
                            localStorage.setItem("cart", JSON.stringify(cart));
                            
                        }
                        return product;
                    })
                );
            } else {
                setCart([...cart, { ...product, quantity: 1 }]);
                localStorage.setItem("cart", JSON.stringify([...cart, { ...product, quantity: 1 }]));
            }
            
        }
        
    };


    return (
        <>
            {ReactDOM.createPortal(
                <BtnCart cart={cart.length} />,
                document.getElementById("btn-cart")
            )}

            {products.map((product, index) => (
                <Item
                    key={index}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                >
                    <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product.id)}
                    >
                        Add to Cart
                    </button>
                </Item>
            ))}

        </>
    );
};

export default Products;

if (document.getElementById("products")) {
    ReactDOM.render(<Products />, document.getElementById("products"));
}
