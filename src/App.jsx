import FilterDropdown from "./components/Filters";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 min-h-18" >
        <h1 className="font-semibold text-4xl">Find Your Next Opportunity</h1>
        <p className="text-lg text-[#6B7280]">Search thousands of jobs from around the world.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-5">
        <SearchBar />
        <FilterDropdown
          label="Job Type"
          options={["Remote", "Onsite", "Hybrid"]}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto px-6 lg:px-8 mt-8">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default App
