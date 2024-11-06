import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, Navigate } from 'react-router-dom';
import './App.css';
import logo from './Assets/cj_g_famadico_accounting_audit_tax_and_advisory_services_cover-removebg-preview (1).png';
import Profile from './Profile';
import CareerAdvice from './CareerAdvice';
import ExploreCompany from './ExploreCompany';
import EmployeeSite from './EmployeeSite';
import JobApplicationFlow from './JobApplicationFlow';
import ApplicantInfo from './ApplicantInfo';
import KPIAssessment from './KPIAssessment';
import UploadDocuments from './UploadDocuments';
import AccountPage from './AccountPage'; // Adjust the path as necessary
import AdminWorkspace from './AdminWorkspace'; // Ensure the path is correct


// Job listings data
const jobListings = [
    { title: "Engagement Assistant", salary: "Competitive", need: 2, category: "audit" },
    { title: "Branch Booking", salary: "Competitive", need: 3, category: "accounting" },
    { title: "Warehouse Checker", salary: "Competitive", need: 1, category: "audit" },
    { title: "Warehouse Supervisor", salary: "Competitive", need: 2, category: "advisory" },
    { title: "Head Office Accounting", salary: "Competitive", need: 1, category: "accounting" },
    { title: "Business Associate for Creative Content", salary: "Competitive", need: 3, category: "advisory" },
];

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredJobs = selectedCategory === "all"
        ? jobListings
        : jobListings.filter(job => job.category === selectedCategory);

    const JobApplicationWrapper = () => {
        const { jobTitle } = useParams();
        const job = jobListings.find(job => job.title === jobTitle);
        
        return <JobApplicationFlow job={job} />; // Pass the selected job to the JobApplicationFlow
    };

    return (
        <div className="App">
            <header>
                <img src={logo} alt="Company Logo" className="logo" />
            </header>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/career-advice">Career Advice</Link></li>
                    <li><Link to="/explore-company">Explore Company</Link></li>
                    <li><Link to="/employee-site">Employee Site</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/career-advice" element={<CareerAdvice />} />
                <Route path="/explore-company" element={<ExploreCompany />} />
                <Route path="/employee-site" element={<EmployeeSite setIsAuthenticated={setIsAuthenticated} />} />
                <Route 
                    path="/" 
                    element={
                        <div>
                            <section className="filter-section">
                                <div>
                                    <label htmlFor="work-category">All Work: </label>
                                    <select id="work-category" onChange={handleCategoryChange}>
                                        <option value="all">All</option>
                                        <option value="accounting">Accounting</option>
                                        <option value="audit">Audit</option>
                                        <option value="tax">Tax</option>
                                        <option value="advisory">Advisory</option>
                                    </select>
                                </div>
                            </section>

                            <section className="job-listings">
                                <h2>List of Work</h2>
                                <div className="job-cards">
                                    {filteredJobs.map((job, index) => (
                                        <div className="job-card" key={index}>
                                            <h3>{job.title}</h3>
                                            <p>Salary: {job.salary}</p>
                                            <p>Remaining Need: {job.need} Employees</p>
                                            <Link to={`/apply/${job.title}`} className="apply-link">
                                                Apply Now
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    } 
                />

                <Route 
                    path="/apply/:jobTitle" 
                    element={<JobApplicationWrapper />} // Use JobApplicationWrapper for the full application process
                />

                <Route 
                    path="/kpi-assessment" 
                    element={<KPIAssessment />} // Add the KPIAssessment component
                />

                <Route 
                    path="/applicant-info" 
                    element={<ApplicantInfo />} // Add the ApplicantInfo component
                />

                <Route 
                    path="/upload-documents" 
                    element={<UploadDocuments />} // Add the UploadDocuments component
                />

                <Route 
                    path="/account" 
                    element={isAuthenticated ? <AccountPage /> : <Navigate to="/employee-site" />} // Redirect if not authenticated
                />

                {/* Route for the admin workspace */}
                <Route 
                    path="/admin-dashboard" 
                    element={isAuthenticated ? <AdminWorkspace setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/employee-site" />} // Redirect if not authenticated
                />
            </Routes>

            <footer>
                <p>Christopher John G. Famadico, CPA - Accounting, Audit, Tax, and Advisory Services</p>
            </footer>
        </div>
    );
}

// Wrap the entire application with Router here
const Root = () => (
    <Router>
        <App />
    </Router>
);

export default Root;
