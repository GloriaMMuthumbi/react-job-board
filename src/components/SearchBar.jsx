import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="flex gap-2 items-center mb-3">
            <div className="flex gap-y-2 items-center gap-3 border-2 border-[#1E1E1E] rounded-xl px-4 py-3 flex-1">
                <FaSearch className="text-[#111827] shrink-0" size={18}/>
                <input
                    type="text"
                    placeholder="Search position or company..."
                    className="w-full bg-transparent border-none outline-none text-[#111827] placeholder:text-[#6B7280] text-[15px]"
                />
            </div>
            <button
                onClick=""
                className="text-sm rounded-lg bg-[#2563EB] px-4.5 py-4 text-white font-medium"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar;