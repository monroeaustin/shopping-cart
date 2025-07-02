import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import CheckOutBag from "../Cart/Checkoutbag.jsx";
import CartModal from "../Cart/CartModal.jsx";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <>
      <header className="absolute top-2 left-0 w-full px-28 py-5 z-50 bg-transparent text-white flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer">Panto</div>

        <nav>
          <ul className="flex gap-10">
            <li>
              <a href="/" className="hover:text-blue-300 transition flex items-center gap-1 cursor-pointer">
                Furniture <RiArrowDropDownLine className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-blue-300 transition cursor-pointer">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-300 transition cursor-pointer">
                About Us
              </a>
            </li>
          </ul>
        </nav>

        <CheckOutBag onClick={handleCartClick} />
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Header;
