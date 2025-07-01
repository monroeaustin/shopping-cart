import { BsBagFill } from "react-icons/bs";
import { useState } from "react";
import useCartCount from "./utilties/CountCart.js";

function CheckOutBag() {
  const [cartVisible, setCartVisible] = useState(false);
  const count = useCartCount();

  return (
    <div className="relative w-fit">
      <button><BsBagFill className="text-2xl" /></button>
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {count}
      </span>
    </div>
  );
}

export default CheckOutBag;
