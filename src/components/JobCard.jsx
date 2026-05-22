import { FiExternalLink } from "react-icons/fi";
import JobTag from "./JobTag";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

function JobCard({ title, company, description, jobType, salary, id, logo, url, publicationDate }) {
    const formatLabel = (str) =>
        str
            .split("_")
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

    //date
    const getRelativeTime = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();

        const diffInMs = now - date;
        const diffInDays = Math.floor(
            diffInMs / (1000 * 60 * 60 * 24)
        );

        if (diffInDays === 0) return "Today";
        if (diffInDays === 1) return "1 day ago";

        return `${diffInDays} days ago`;
    }

    return (
        <div className="bg-white rounded-lg px-6 py-6 space-y-3">
            <div>
                <h2 className="font-semibold text-2xl truncate">{ title }</h2>
                <span className="flex items-center gap-1 text-[#6B7280] font-medium"><img className="h-4" src={logo} />{ company }</span>
            </div>
            <p className="line-clamp-3 md:text-clip">{ description.replace(/<[^>]+>/g, "") }</p>
            <div className="flex gap-2">
                <JobTag
                    label={formatLabel(jobType)}
                />
                {salary && <JobTag label={salary} />}
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[#6B7280] text-sm">
                    Posted {getRelativeTime(publicationDate)}
                </p>
                <div className="flex gap-4">
                    <PrimaryBtn label="View Details" link={`/job-details/${id}`} />
                    <SecondaryBtn label="Apply Now" icon={<FiExternalLink />} url={url} />
                </div>
            </div>
        </div>
    );
}

export default JobCard;