import { FiSearch } from "react-icons/fi";

function SearchBar() {

    return (
        <div className="mt-8 flex items-center backdrop-blur-md bg-white/15 border border-white/60 rounded-full px-4 py-2 w-full max-w-[344px] mx-auto">
            <input
                type="text"
                placeholder="Search furniture"
                className="flex-grow bg-transparent outline-none text-white placeholder-white/80 text-sm md:text-base pr-3"
            />
            <div className="bg-orange-500 rounded-full p-2 flex items-center justify-center">
                <FiSearch className="text-white text-xl" />
            </div>
        </div>
    )
}

export default SearchBar;