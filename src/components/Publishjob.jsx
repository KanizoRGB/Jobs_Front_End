import React from 'react'
import { jobs } from './Joblisting'


function Publishjob() {

    function Publish(e) {
        e.preventDefault();
        // Get the values from the input fields

        title=document.getElementById("title").value;
        company=document.getElementById("company").value;
        location=document.getElementById("location").value;
        skills=document.getElementById("skills").value;
        description =document.getElementById("description").value;

        jobs.push({title:title, company:company, location:location, skills:skills.split(","), description:description});
        // Log the jobs array to see the new job added
        console.log(jobs);
        // Logic to publish a job
        console.log("Job published!");
        alert("Job published successfully!");
    }

     
    
return (
    <div>
            <div className="container mt-5" style={{ maxWidth: '80%' }}>
                    <div className='shadow p-3 bg-body rounded' style={{marginBottom: '200px'}}>
                    <h2 className="text-center mb-4">Publish Job</h2>
                    <form onSubmit={Publish}>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="title" className="form-label fw-bold" style={{width:"130px"}}>Job Title:    </label>
                                    <input type="text" className="form-control" id="title" required />
                            </div>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="company" className="form-label fw-bold" style={{width:"130px"}}>Company:    </label>
                                    <input type="text" className="form-control" id="company" required />
                            </div>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="location" className="form-label fw-bold" style={{width:"130px"}}>Location:    </label>
                                    <input type="text" className="form-control" id="location" required />
                            </div>
                            <div className="mb-3 d-flex flex-row">
                                    <label htmlFor="skills" className="form-label fw-bold" style={{width:"130px"}}>Skills:</label>
                                    <input type="text" className="form-control" id="skills" required placeholder='Enter comma seperated values e.g React,Django' />
                            </div>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="description" className="form-label fw-bold" style={{width:"130px"}}>Description:    </label>
                                    <textarea className="form-control" id="description" rows="3" required></textarea>
                            </div>
                            
                            <div className='text-center'>
                                    <button type="submit" className="btn btn-primary form-control" >Publish</button>
                            </div>
                            
                    </form>
                    </div>
            </div>
    </div>
)
}

export default Publishjob