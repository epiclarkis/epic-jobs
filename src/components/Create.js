import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({user}) => {
    const [jobTitle, setJobTitle] = useState('')
    const [jobCompany, setJobCompany] = useState('')
    const [jobType, setJobType] = useState('')
    const [jobLocation, setJobLocation] = useState('')
    const [jobSalary, setJobSalary] = useState('')
    const [jobUrl, setJobUrl] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newJob = { jobTitle, jobCompany, jobType, jobLocation, jobSalary, jobUrl }

        await fetch('https://epic-jobs-api.onrender.com/api/jobs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newJob)
        }).then(() => {
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div className="create">
            <h2>post a new job</h2>
            {user ? 
                <form className="create-job" onSubmit={handleSubmit}>
                    <label htmlFor="title">title: </label>
                    <input 
                        id="title"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Technical Support Engineer" 
                    />
                    <label htmlFor="company">company: </label>
                    <input 
                        id="company"
                        type="text"
                        placeholder="ABC Company"
                        onChange={(e) => setJobCompany(e.target.value)} 
                    />
                    <label htmlFor="type">type: </label>
                    <input 
                        id="type"
                        type="text"
                        placeholder="Full-time"
                        onChange={(e) => setJobType(e.target.value)}
                    />
                    <label htmlFor="location">location: </label>
                    <input 
                        id="location"
                        type="text"
                        placeholder="Remote"
                        onChange={(e) => setJobLocation(e.target.value)} 
                    />
                    <label htmlFor="salary">salary: </label>
                    <input 
                        id="salary"
                        type="number"
                        placeholder="50000"
                        onChange={(e) => setJobSalary(e.target.value)} 
                    />
                    <label htmlFor="url">url: </label>
                    <input 
                        id="url"
                        type="url"
                        placeholder="https://abcompany.com/techsupportjobs"
                        onChange={(e) => setJobUrl(e.target.value)} 
                    />
                    <button type="submit">post job</button>
                </form>
                :
                <div><p>You must be logged in to post a new job</p></div>
            }
        </div>
    );
}
 
export default Create;