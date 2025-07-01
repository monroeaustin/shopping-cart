import { MdArrowRightAlt } from "react-icons/md";
function InfoCard({ title, description }) {
  return (
    <div className="text-center max-w-[260px]">
      <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {description}
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center text-[#E58411] text-sm mt-4 font-medium hover:underline"
      >
        More Info
        <MdArrowRightAlt className="ml-1 w-5 h-5" />
      </a>
    </div>
  );
}
export default InfoCard;