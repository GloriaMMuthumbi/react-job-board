import { IoArrowBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import PrimaryBtn from "../components/PrimaryBtn";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobsApi";
import JobTag from "../components/JobTag";
import { FiExternalLink } from "react-icons/fi";

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState();

    useEffect(() => {
        async function loadJob() {
            const data = await fetchJobs();

            const foundJob = data.find(
                (j) => String(j.id) === String(id)
            );

            setJob(foundJob);
        }
        loadJob();
    }, [id]);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading job...
            </div>
        );
    }
    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto mt-4 px-6 lg:px-8 min-h-18">
                <PrimaryBtn label="Back to Jobs" preIcon={<IoArrowBack />} link={'/'} />
                <div className="grid grid-cols-1 md:grid-cols-3 mt-6 w-full gap-6 ">
                    <div className="col-span-2">
                        <h1 className="text-2xl font-semibold">Job Description</h1>
                        <div
                            className="mt-2.5 mb-4 prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                    </div>
                    <div className="col-span-1 bg-white shadow-2xl p-6 max-h-fit rounded-2xl">
                        <h2 className="font-bold text-xl">{ job.title }</h2>
                        <span className="flex items-center gap-1 text-[#6B7280] font-medium text-sm"><img className="h-4" src={job.company_logo_url} />{ job.company_name }</span>
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {job.tags.map((tag) => (
                                <JobTag
                                    label={tag.charAt(0).toUpperCase() + tag.slice(1)}
                                />
                            ))}
                        </div>
                        <div className="mt-5 flex justify-end">
                            <PrimaryBtn label="Apply Now" postIcon={<FiExternalLink />} link={job.url}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;