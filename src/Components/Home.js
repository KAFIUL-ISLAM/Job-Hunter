import React, { useEffect, useState } from 'react';
import Job from './Job';

const Home = ({user}) => {

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
        <div className='grid grid-cols-1 md:grid-cols-7 border-2 gap-2'>
            <div className='col-span-2'>
                <h1 className='text-center text-4xl font-bold uppercase mt-8'>Welcome!</h1>
                <div className='text-center p-12 space-y-4'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.pictureUrl} alt="user" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold font-mono'>{user.name}</h1>
                        <h2 className='text-lg font-semibold'>{user.college}</h2>
                    </div>
                </div>
            </div>
            <div className='col-span-5 p-8 space-y-4'>
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