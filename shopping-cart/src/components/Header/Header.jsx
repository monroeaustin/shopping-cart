import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import CheckOutBag from "../Cart/Checkoutbag.jsx";
import CartModal from "../Cart/CartModal.jsx";
import { Link } from "react-router-dom";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-18 py-5 z-[100] bg-black/15 backdrop-blur-md text-white flex items-center justify-between shadow-md">
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="/" className="hover:text-orange-500
 transition flex items-center gap-1 cursor-pointer">
            Panto
          </Link>
        </div>

        <nav>
          <ul className="flex gap-10">
            <li>
              <Link to="/" className="hover:text-orange-500
 transition flex items-center gap-1 cursor-pointer">
                Furniture <RiArrowDropDownLine className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-orange-500
 transition cursor-pointer">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500
 transition cursor-pointer">
                About Us
              </Link>
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
