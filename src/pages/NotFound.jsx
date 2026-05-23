import { IoArrowBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import PrimaryBtn from "../components/PrimaryBtn";

function NotFound() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-[calc(100vh-74px)] gap-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold text-[#2563EB] mb-4">404</h1>
                    <span className="text-3xl font-semibold text-[#111827] mb-3">Page Not Found</span>
                    <span className="max-w-105 text-center text-[#6B7280] text-sm">The page you are looking for does not exist or may have been moved.</span>
                </div>
                <PrimaryBtn label="Back to Jobs" preIcon={<IoArrowBack />} link={'/'} />
            </div>
        </div>
    );
}

export default NotFound;