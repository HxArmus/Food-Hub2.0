import React, { createContext, useEffect, useState } from "react";

import { food_list } from "../assets/assets";
    

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartitems] = React.useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartitems(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartitems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

   const removeFromCart = (itemId) => {
        setCartitems(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId] -= 1;
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
    };
    useEffect(() => {
        console.log(cartItems);
    }), [cartItems];

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
