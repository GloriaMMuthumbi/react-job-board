import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FilterDropdown({ label, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    flex items-center text-[#111827] text-[15px] gap-2 px-3.5 py-1 border-2 rounded-lg bg-transparent text-lg font-medium text-[#1E1E1E] hover:bg-gray-50 transition-all ${ 
                        isOpen ? "border-[#2563EB]" : "border-[#1E1E1E]"}
                `}
            >
                <span>{selected || label}</span>

                <FaChevronDown
                className={`ml-2 h-3 w-3 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                }`}
                />
            </button>

            {isOpen && (
                <>
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsOpen(false)}
                ></div>

                <div className="absolute right-0 z-20  mt-1 w-full origin-top-right rounded-lg bg-white border-2 border-[#E5E7EB] shadow-lg overflow-hidden">
                    <div className="py-1">
                    {options.map((option) => (
                        <button
                        key={option.value}
                        onClick={() => {
                            setSelected(option.label);
                            setIsOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-[15px] text-[#1E1E1E] hover:bg-gray-100 transition-colors"
                        >
                        {option.label}
                        </button>
                    ))}
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default FilterDropdown;