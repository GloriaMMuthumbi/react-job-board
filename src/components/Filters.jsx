function Filter({label, options}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div className="relative<ChevronDown className="{" inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-48 px-4 py-2.5 border-2 border-[#E5E7EB] rounded-xl bg-transparent text-lg font-medium text-[#1E1E1E] hover:bg-gray-50 transition-all"
            >
                `ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180': ''}`}
                />
            </button>
        </div>
    );
}