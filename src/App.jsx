import { useEffect, useState } from "react";
import FilterDropdown from "./components/Filters";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar";
import { fetchJobs } from "./services/jobsApi";

function App() {
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
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-4 px-6 lg:px-8 h-18 min-h-18" >
        <h1 className="font-semibold text-4xl">Find Your Next Opportunity</h1>
        <p className="text-lg text-[#6B7280]">Search thousands of remote jobs from around the world.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-5">
        <SearchBar />
        <div className="inline-flex gap-4">
          <FilterDropdown
            label="Job Type"
            options={jobTypeOptions}
          />
          <FilterDropdown
            label="Location"
            options={["Remote", "Onsite", "Hybrid"]}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-2 gap-4">
          {jobs.slice(0, 6).map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company_name}
              location={job.candidate_required_location}
              description={job.description}
              jobType={job.job_type}
              salary={job.salary}
            />
          ))}
        </div>
        <div className="flex max-w-full py-10 items-center justify-center">
          <nav aria-label="Page navigation">
            <ul className="flex -space-x-px text-sm">
              <li>
                <a href="#" className="flex items-center justify-center text-body box-border border-default-medium border border-[#E5E7EB] hover:bg-[#EFF6FF] px-3 py-1 rounded-tl-lg rounded-bl-lg">Previous</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center text-body box-border border-default-medium border border-[#E5E7EB] hover:bg-[#EFF6FF] px-3 py-1 rounded-tr-lg rounded-br-lg">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App
