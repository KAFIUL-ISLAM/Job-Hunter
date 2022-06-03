import React, { useEffect, useState } from 'react';

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
            <div className='col-span-2 border'>
                <h1 className='text-center text-4xl font-bold uppercase'>this is home</h1>
            </div>
            <div className='col-span-4 px-8 space-y-4'>
                <h1 className='text-center text-4xl font-bold uppercase'>this is home</h1>
                {
                    jobs.map(job => <div key={job.id} className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{job.designation}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">details</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default Home;