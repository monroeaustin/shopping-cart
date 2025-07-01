import { BsBagFill } from "react-icons/bs";
import { useState } from "react";

function CheckOutBag() {
const [cartVisible,setCartVisibile] = useState(false)

  return (
    <div className="relative w-fit">
      <button><BsBagFill className="text-2xl" /></button>
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        4
      </span>
    </div>
  );
}

export default CheckOutBag;
