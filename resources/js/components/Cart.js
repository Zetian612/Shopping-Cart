import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Item } from "./Item";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"));
        if (items) {
            setCart(items);
        }
    }, []);

    useEffect(() => {
        const total = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        setTotal(total);
    }, [cart]);

    const removeFromLocalStorage = (id) => {
        const items = cart.filter((item) => item.id !== id);
        setCart(items);
        localStorage.setItem("cart", JSON.stringify(items));
    };

    return (
        <>
            {cart.length > 0 ? (
                cart.map((product, index) => (
                    <Item
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={(product.price * product.quantity).toFixed(2)}
                        total={product.total}
                    >
                        <div className="d-flex">
                            <input
                                className="form-control text-center me-4"
                                id="inputQuantity"
                                type="num"
                                value={product.quantity}
                                onChange={(e) => {
                                    const newCart = cart.map((item) => {
                                        if (item.id === product.id) {
                                            item.quantity = e.target.value;
                                        }
                                        return item;
                                    });
                                    setCart(newCart);
                                    localStorage.setItem("cart", JSON.stringify(newCart));
                                }}
                                style={{ maxWidth: "5rem" }}
                            />
                            <button
                                className="btn btn-outline-danger flex-shrink-0"
                                type="button"
                                onClick={() =>
                                    removeFromLocalStorage(product.id)
                                }
                            >
                                <i className="bi-trash-fill" />
                            </button>
                        </div>
                    </Item>
                ))
            ) : (
                <div className="alert alert-info" role="alert">
                    Your cart is empty. Please add some <a href="/" className="alert-link">products. </a> <br />
                </div>
            )}

            {cart.length > 0 ? (
                <div className="d-flex justify-content-between">
                    <h5 className="text-muted">Total:</h5>
                    <h5 className="text-muted">${total.toFixed(2)}</h5>
                </div>
            ) : null}
        </>
    );
};

export default Cart;

if (document.getElementById("cart")) {
    ReactDOM.render(<Cart />, document.getElementById("cart"));
}
