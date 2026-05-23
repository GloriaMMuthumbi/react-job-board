import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/NotFound";

function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
