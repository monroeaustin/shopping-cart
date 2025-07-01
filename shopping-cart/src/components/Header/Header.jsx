import { RiArrowDropDownLine } from "react-icons/ri";
import { BsBagFill } from "react-icons/bs";
import { useContext } from 'react';
import CheckOutBag from "../Cart/Checkoutbag.jsx";
function Header() {
    return (
        <header className="absolute top-2 left-0 w-full px-28 py-5 z-[1000] bg-transparent text-white flex items-center justify-between">
            <div className="text-2xl font-bold">Panto</div>

            <nav>
                <ul className="flex gap-30">
                    <li>
                        <a href="/" className="hover:text-blue-300 transition flex items-center gap-1">
                            Furniture
                            <RiArrowDropDownLine className="text-2xl" />
                        </a>
                    </li>
                    <li>
                        <a href="/shop" className="hover:text-blue-300 transition">
                            Shop
                        </a>
                    </li>
                    <li>
                        <a href="/cart" className="hover:text-blue-300 transition">
                            About Us
                        </a>
                    </li>
                </ul>
            </nav>

            <CheckOutBag />
        </header>
    );
}

export default Header;
