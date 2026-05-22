import { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobsApi";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import FilterDropdown from "../components/Filters";

function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function loadJobs() {
        const data = await fetchJobs();
        setJobs(data);
        }
        loadJobs();
    }, []);

    const jobTypes = [
        ...new Set(jobs.map((job) => job.job_type).filter(Boolean))
    ];
    //formatted
    const formatLabel = (str) =>
        str
        .split("_")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const jobTypeOptions = jobTypes.map((type) =>({
        value: type,
        label: formatLabel(type)
    }))

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;
    const pages = Math.ceil(jobs.length / jobsPerPage);
    const pageNumbers = [...Array(pages).keys()].map((n) => n + 1);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;

    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div className="bg-gray-50 h-full">
            <Navbar />
            <div className="max-w-7xl mx-auto mt-4 px-6 lg:px-8 min-h-18" >
                <h1 className="font-semibold text-4xl">Find Your Next Opportunity</h1>
                <p className="text-lg text-[#6B7280]">Search thousands of remote jobs from around the world.</p>
                <div className="mt-5">
                    <SearchBar />
                    <div className="inline-flex gap-4">
                    <FilterDropdown
                        label="Job Type"
                        options={jobTypeOptions}
                    />
                        {/* <FilterDropdown
                            label="Location"
                            options={["Remote", "Onsite", "Hybrid"]}
                        /> */}
                    </div>
                </div>
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-4">
                    {currentJobs.map((job) => (
                        <JobCard
                        key={job.id}
                        title={job.title}
                        company={job.company_name}
                        location={job.candidate_required_location}
                        description={job.description}
                        jobType={job.job_type}
                        salary={job.salary}
                        id={job.id}
                        logo={job.company_logo_url}
                        url={job.url}
                        publicationDate={job.publication_date}
                        />
                    ))}
                    </div>
                    <div className="flex py-10 items-center justify-center">
                        <nav aria-label="Page navigation">
                            <ul className="flex -space-x-px">
                                <li>
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="flex bg-white items-center justify-center box-border border border-[#E5E7EB] hover:bg-[#EFF6FF] px-3 py-1 rounded-tl-lg rounded-bl-lg disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed">
                                            Previous
                                    </button>
                                </li>
                                {pageNumbers.map((page) => (
                                    <li key={page}>
                                        <button
                                            onClick={() => setCurrentPage(page)}
                                            className={`flex items-center justify-center border border-[#E5E7EB] px-3 py-1
                                            ${
                                                currentPage === page
                                                ? "bg-[#2563EB] text-white"
                                                : "bg-white hover:bg-[#EFF6FF]"
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button 
                                        onClick={() => setCurrentPage((next) => Math.min(next + 1, pages))}
                                        disabled={currentPage === pages || pages <= 1}
                                        className="flex bg-white items-center justify-center box-border border border-[#E5E7EB] hover:bg-[#EFF6FF] px-3 py-1 rounded-tr-lg rounded-br-lg disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed">
                                            Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;