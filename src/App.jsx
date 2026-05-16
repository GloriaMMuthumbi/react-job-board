import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 min-h-[72px]" >
        <h1 className="font-semibold text-4xl">Find Your Next Opportunity</h1>
        <p className="text-lg text-[#6B7280]">Search thousands of jobs from around the world.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 mt-10">
        <SearchBar />
      </div>
    </div>
  );
}

export default App
