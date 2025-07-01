import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const [cart,setCart] = useState(null);
