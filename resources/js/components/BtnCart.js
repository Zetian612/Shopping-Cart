import React from "react";
import ReactDOM from "react-dom";

const BtnCart = props => {
    const { cart } = props;

    return (
        <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1" />
            <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cart}
            </span>
        </button>
    );
};

export default BtnCart;


