import React, { useEffect, useState } from 'react';
import Job from './Job';

const Home = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://refertest.pythonanywhere.com/job/openings', {
            Headers: {
                "tid": 3441
            }
        })
            .then(response => response.json())
            .then(data => setJobs(data.data));
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-6 border-2 gap-2'>
            <div className='col-span-2 border bg-slate-200'>
                <h1 className='text-center text-4xl font-bold uppercase'>this is home</h1>
            </div>
            <div className='col-span-4 p-8 space-y-4'>
                <h1 className='text-center text-4xl font-bold uppercase text-slate-600 mb-8'>Job Openings</h1>
                <div className='max-h-screen overflow-y-scroll space-y-2'>
                    {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;