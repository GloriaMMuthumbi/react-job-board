function SecondaryBtn({ label, icon }){
    return(
        <div className="items-center rounded-lg gap-1 border-[#2563EB] border-2 px-3.5 h-10 inline-flex text-[#2563EB] font-medium text-sm">
            {label}
            {icon}
        </div>
    );
}

export default SecondaryBtn;