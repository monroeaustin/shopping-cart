import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AcceptedCards from "./AcceptedCards";

function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-[#4D4D4D] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left">
        
        {/* Column 1 – Branding */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1C1C1C]">Panto</h2>
          <p className="text-gray-500 max-w-xs mx-auto lg:mx-0">
            The advantage of hiring a workspace with us is that it gives you
            comfortable service and all-around facilities.
          </p>
          <p className="text-xs text-gray-400">Copyright © 2024</p>
        </div>

        {/* Column 2 – Services */}
        <div>
          <h4 className="text-[#E58411] font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#">Email Marketing</a></li>
            <li><a href="#">Campaigns</a></li>
            <li><a href="#">Branding</a></li>
          </ul>
        </div>

        {/* Column 3 – Furniture */}
        <div>
          <h4 className="text-[#E58411] font-semibold mb-4">Furniture</h4>
          <ul className="space-y-2">
            <li><a href="#">Beds</a></li>
            <li><a href="#">Chair</a></li>
            <li><a href="#">All</a></li>
          </ul>
        </div>

        {/* Column 4 – Follow Us */}
        <div>
          <h4 className="text-[#E58411] font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 flex flex-col items-center lg:items-start">
            <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
            <li className="flex items-center gap-2"><FaTwitter /> Twitter</li>
            <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
          </ul>
        </div>
          <div className="text-2xl text-neutral-700 hover:text-black transition-all">
      <AcceptedCards/>
      </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-200 mt-6 py-6 text-center text-sm text-gray-500 flex justify-center gap-8">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <span>Created by <b>Monroe Ramon Austin; Inspired via </b> <a href="https://www.figma.com/design/UwnEhV3RrXZZmuKJ1uXaAZ/Panto---Furniture-Landing-Page-Design--Community-?node-id=1-2&t=jC9N5xXr522HclSS-0"> <i>Figma Layout</i></a></span>
      </div>

  
    </footer>
  );
}

export default Footer;
