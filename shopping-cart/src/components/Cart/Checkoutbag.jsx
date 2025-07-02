import { BsBagFill } from "react-icons/bs";
import useCartCount from "./utilties/CountCart.js";

function CheckOutBag({ onClick }) {
  const count = useCartCount();

  return (
    <button
      onClick={onClick}
      className="relative w-fit focus:outline-none cursor-pointer"
    >
      <BsBagFill className="text-2xl" />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {count}
      </span>
    </button>
  );
}

export default CheckOutBag;
