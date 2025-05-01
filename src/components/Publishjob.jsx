import React from 'react'
import { jobs } from './Joblisting'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Publishjob() {
        // State to hold the job details
        const[title, setTitle] = useState("");
        const[company, setCompany] = useState("");
        const[location, setLocation] = useState("");
        const[skills, setSkills] = useState("");
        const[description, setDescription] = useState("");
        const navigate = useNavigate();

        function handleChange(e){
                const {name, value} = e.target;
                switch(name){
                        case "title":
                                setTitle(value);
                                break;
                        case "company":
                                setCompany(value);
                                break;
                        case "location":
                                setLocation(value);
                                break;
                        case "skills":
                                setSkills(value);
                                break;
                        case "description":
                                setDescription(value);
                                break;
                        default:
                                break;
                }
        }

        function Publish(e){
                e.preventDefault();
                const newJob = {
                        title: title,
                        company: company,
                        location: location,
                        skills: skills.split(","),
                        description: description
                }
                jobs.push(newJob);

                console.log(jobs)
                
                navigate("/jobs");
                alert("Job Published Successfully!");

                
                setTitle("");
                setCompany("");
                setLocation("");
                setSkills("");
                setDescription("");
        }


     
    
return (
    <div>
            <div className="container mt-5" style={{ maxWidth: '80%' }}>
                    <div className='shadow p-3 bg-body rounded' style={{marginBottom: '200px'}}>
                    <h2 className="text-center mb-4">Publish Job</h2>
                    <form onSubmit={Publish}>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="title" className="form-label fw-bold" style={{width:"130px"}}>Job Title:    </label>
                                    <input type="text" className="form-control" name="title" required onChange={handleChange}/>
                            </div>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="company" className="form-label fw-bold" style={{width:"130px"}}>Company:    </label>
                                    <input type="text" className="form-control" name="company" required onChange={handleChange} />
                            </div>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="location" className="form-label fw-bold" style={{width:"130px"}}>Location:    </label>
                                    <input type="text" className="form-control" name="location" required onChange={handleChange} />
                            </div>
                            <div className="mb-3 d-flex flex-row">
                                    <label htmlFor="skills" className="form-label fw-bold" style={{width:"130px"}}>Skills:</label>
                                    <input type="text" className="form-control" name="skills" onChange={handleChange} required placeholder='Enter comma seperated values e.g React,Django' />
                            </div>
                            <div className="mb-3 d-flex flex-row ">
                                    <label htmlFor="description" className="form-label fw-bold" style={{width:"130px"}}>Description:    </label>
                                    <textarea className="form-control" onChange={handleChange} name="description" rows="3" required></textarea>
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