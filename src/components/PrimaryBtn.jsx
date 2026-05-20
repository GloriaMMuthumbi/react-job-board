function PrimaryBtn({ label, icon: Icon }){
    return(
        <div className="items-center text-sm rounded-lg gap-1 bg-[#2563EB] px-3.5 h-10 inline-flex text-white font-medium">
            {Icon && <Icon />}
            {label}
        </div>
    );
}

export default PrimaryBtn;