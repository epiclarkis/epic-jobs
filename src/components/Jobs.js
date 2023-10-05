import { useState } from "react";
import Job from "./Job";
import {
    LuSearch,
    LuArrowUpDown,
    LuCalendarClock,
    LuArrowUp,
    LuCircleDollarSign
} from 'react-icons/lu'

const Jobs = ({user}) => {
    const [search, setSearch] = useState('')

    return (
        <div className="all-jobs">
            <div className="filters">
                <div className="search">
                    <span>search job: </span>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="e.g., technical support"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <LuSearch />
                </div>
                <div className="sort">
                    <LuArrowUpDown title="sort" />
                    <div className="sort"> 
                        <div className="sort-date" title="sort by date">
                            <LuCalendarClock />
                            <LuArrowUp />
                        </div>
                        <div className="sort-salary" title="sort by salary">
                            <LuCircleDollarSign />
                            <LuArrowUp />
                        </div>
                    </div>
                </div>
            </div>
            <Job user={user} />
            <div className="pages">
                <div className="page">&larr; page 1 of 100 &rarr;</div>
            </div>
        </div>
    );
}
 
export default Jobs;