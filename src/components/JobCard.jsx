import { FiExternalLink } from "react-icons/fi";
import JobTag from "./JobTag";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { FaBuilding } from "react-icons/fa6";

function JobCard({ title, company, description, jobType, salary }) {
    const formatLabel = (str) =>
        str
            .split("_")
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

    return (
        <div className="bg-white rounded-lg px-6 py-6 space-y-3">
            <div>
                <h2 className="font-semibold text-2xl truncate">{ title }</h2>
                <span className="flex items-center gap-1 text-[#6B7280] font-medium"><FaBuilding />{ company }</span>
            </div>
            <p className="line-clamp-3 md:text-clip">{ description.replace(/<[^>]+>/g, "") }</p>
            <div className="flex gap-2">
                <JobTag
                    label={formatLabel(jobType)}
                />
                {salary && <JobTag label={salary} />}
            </div>
            <div className="flex justify-end h-full gap-4">
                <PrimaryBtn label="View Details" />
                <SecondaryBtn label="Apply Now" icon={<FiExternalLink />} />
            </div>
        </div>
    );
}

export default JobCard;