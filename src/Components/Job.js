import React from 'react';

const Job = ({ job }) => {

    const { designation, location, skills, company, min_experience } = job;

    return (
        <div className="card bg-base-100 border w-2/3 mx-auto">
            <div className="card-body">
                <span className='font-serif text-slate-600'>{company}</span>
                <h2 className="card-title text-2xl">{designation}</h2>
                <div>
                    <p className='mb-2'>Job Location: <span className='font-semibold'>{location}</span></p>
                    <p>{min_experience === 0 ? 
                        <span>Opening for <span className='text-red-500 font-semibold'>Fresher </span></span>
                        :
                        <span>Minimum <span className='font-semibold'>{min_experience} </span> years of experience required</span>
                    }</p>
                </div>
                <div className='mt-3'>
                    {
                        skills.map(skill => <div className="badge mr-2">{skill}</div>)
                    }
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary mt-4">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Job;