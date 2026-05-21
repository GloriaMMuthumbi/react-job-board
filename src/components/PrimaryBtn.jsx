import { Link } from "react-router-dom";

function PrimaryBtn({ label, preIcon, postIcon, link }){
    return(
        <Link
            to={link}
            className="items-center text-sm rounded-lg gap-1 bg-[#2563EB] px-3.5 h-10 inline-flex text-white font-medium"
        >
            {preIcon}
            {label}
            {postIcon}
        </Link>
    );
}

export default PrimaryBtn;