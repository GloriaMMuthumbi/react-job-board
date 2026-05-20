import { FiExternalLink } from "react-icons/fi";
import JobTag from "./JobTag";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

function JobCard(/*This is where the paramaters for the job card will go*/) {
    return (
        <div className="bg-white rounded-lg px-6 py-6 grid space-y-3">
            <div>
                <h2 className="font-semibold text-2xl">Frontend Developer</h2>
                <span className="text-[#6B7280] text-sm">Company • County, Country</span>
            </div>
            <p className="line-clamp-3 md:text-clip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusc egestas libero elit, vitae lacinia lacus malesuada non. Sed tempor dui mauris, sit amet ullamcorper nisi dapibus et. Sed eget ex et neque varius commodo in in leo. Vestibulum tincidunt porttitor imperdiet. Pellentesque dapibus ut erat in condimentum. Donec tortor ex, gravida at facilisis a, ornare non lectus. Sed velit risus, elementum ut purus vel, elementum posuere mi. In ac dictum eros. Pellentesque dignissim nec ligula eu mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vel vulputate lacus. Sed sit amet sapien facilisis, ullamcorper sapien vel, luctus ligula.</p>
            <div className="flex gap-2">
                <JobTag 
                    label="Hyrbid"
                />
                <JobTag 
                    label="KES 100,000"
                />
            </div>
            <div className="flex justify-end h-full gap-4">
                <PrimaryBtn label="View Details" />
                <SecondaryBtn label="Apply Now" icon={<FiExternalLink />} />
            </div>
        </div>
    );
}

export default JobCard;