import React from 'react'
import { Link } from 'react-router-dom';

export const jobs = [
  {title: 'Software Engineer', company: 'Tech Corp', location: 'New York', skills:['JavaScript', 'React', 'Node.js'], description: 'Develop and maintain web applications.'},
  {title: 'Data Analyst', company: 'Data Inc', location: 'San Francisco', skills:['Python', 'SQL', 'Excel'], description: 'Analyze and interpret complex data sets.'},
  {title: 'Product Manager', company: 'Product Co', location: 'Remote', skills:['Agile', 'Scrum', 'Communication'], description: 'Lead product development and strategy.'},
  {title: 'UX Designer', company: 'Design Studio', location: 'Los Angeles', skills:['Figma', 'Sketch', 'User Research'], description: 'Create user-friendly designs and prototypes.'},
  {title: 'DevOps Engineer', company: 'Cloud Solutions', location: 'Austin', skills:['AWS', 'Docker', 'CI/CD'], description: 'Manage and optimize cloud infrastructure.'},
  {title: 'Marketing Specialist', company: 'Marketing Agency', location: 'Chicago', skills:['SEO', 'Content Marketing', 'Social Media'], description: 'Develop and execute marketing strategies.'},
];

function Joblisting() {

  function publishJob() {
    // Logic to publish a job
    console.log("Job published!");
  }

    

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Available Jobs</h2>
      <div className="row">
        {jobs.map((job, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.company}</p>
                <p className="text-muted">{job.location}</p>
                <p>Skills: {job.skills.join(', ')}</p>
                <button className="btn btn-outline-primary">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/publish-job" className="btn btn-primary mt-4 mb-4" onClick={publishJob}>Publish a Job</Link>
      </div>
    </div>
  );
}

export default Joblisting