import axios from "axios";

const BASE_URL = "https://remotive.com/api/remote-jobs";

export async function fetchJobs() {
    try {
        const response = await axios.get(BASE_URL);

        return response.data.jobs;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}