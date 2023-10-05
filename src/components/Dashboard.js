import { Link } from "react-router-dom";
import Job from "./Job";
import useFetch from "../useFetch";

const Dashboard = () => {
    const { isLoading } = useFetch('https://epic-jobs-api.onrender.com/api/jobs')
    return (
        <div className="dashboard">
            <div className="hero">
                <div className="banner">
                    <h1>remote cx jobs</h1>
                    <h2>lorem, ipsum dolor sit amet consectetur adipisicing elit. in, exercitationem mollitia incidunt, magnam impedit accusamus quam similique quidem debitis ex saepe vero eaque. cumque, voluptatibus eaque. excepturi laboriosam officia nobis.</h2>
                </div>
            </div>
            <div className="latest-jobs">
                <Job />
            </div>
            {!isLoading && 
                <div className="more">
                    <Link to={"/jobs"}>See more jobs &rarr;</Link>
                </div>
            }
        </div>
    );
}
 
export default Dashboard;