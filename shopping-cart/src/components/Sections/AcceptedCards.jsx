import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaApplePay, FaGooglePay } from "react-icons/fa";

function AcceptedCards() {
  return (
    <div className="flex items-center gap-4 text-3xl text-gray-600 mt-4">
      <FaCcVisa title="Visa" />
      <FaCcMastercard title="MasterCard" />
      <FaCcAmex title="American Express" />
      <FaCcDiscover title="Discover" />
      <FaApplePay title="Apple Pay" />
      <FaGooglePay title="Google Pay" />
    </div>
  );
}

export default AcceptedCards;
