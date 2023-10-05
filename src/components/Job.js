import useFetch from "../useFetch";
import moment from "moment";
import { Link } from "react-router-dom";
import { 
    LuBriefcase,
    LuBuilding,
    LuTimer,
    LuMapPin,
    LuCircleDollarSign,
    LuCalendarClock,
    LuArrowUpRightSquare
} from 'react-icons/lu'
import { useState } from "react";

const Job = ({user}) => {
    const apiUrl = 'https://epic-jobs-api.onrender.com/api/jobs'
    const {data: jobs, isLoading, error} = useFetch(apiUrl)
    const [editMode, setEditMode] = useState(false)

    const handleDelete = async (id) => {
            console.log(id)
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            })
            .then(res => {
                console.log('job was successfully deleted!')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    console.log(`editMode before edit: ${editMode}`)

    const handleEdit = () => {
        setEditMode(true)
        console.log(`editMode after saving: ${editMode}`)
        if (editMode) {
            document.getElementById('title').contentEditable = true
        }
    }

    const handlePatch = async (id) => {

        const title = document.getElementById('title').innerHTML
        title.split('</svg>').pop()

        const content = {
            jobTitle: title
        }

        await fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        })
        .then(res => {
            console.log('job was successfully updated!')
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="job-roll">
            {isLoading && <p className="fetching">Fetching jobs...</p>}
            {!isLoading && jobs.map(job => (
                <div className="jobs" key={job._id}>
                    <span className="logo">
                        <img src="https://placehold.co/100x100/lightgray/teal?text=epic" alt="" />
                    </span>
                    <p contentEditable="false" suppressContentEditableWarning="true" id="title"><LuBriefcase className="job-icon" /> {job.jobTitle}</p>
                    <p><LuBuilding className="job-icon" /> {job.jobCompany}</p>
                    <p><LuTimer className="job-icon"/> {job.jobType}</p>
                    <p><LuMapPin className="job-icon" /> {job.jobLocation}</p>
                    <p><LuCircleDollarSign className="job-icon" /> ${job.jobSalary}</p>
                    <p><LuCalendarClock className="job-icon" /> {moment(job.createdAt).calendar()}</p>
                    <Link className="btn-apply" to={job.jobUrl} target="_blank">apply <LuArrowUpRightSquare /></Link>
                    {user && 
                        <div className="btn-mod-container">
                            <button className="btn-mod btn-mod-delete" onClick={(_id) => handleDelete(job._id)}>delete</button>
                            <button className="btn-mod btn-mod-edit" onClick={handleEdit}>edit</button>
                            <button className="btn-mod btn-mod-save"  onClick={(_id) => handlePatch(job._id)}>save</button>
                        </div>
                    }
                </div>
            ))}
            {error && <p>Error fetching jobs.</p>}
        </div>
    );
}
 
export default Job;