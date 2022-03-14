import React from 'react';

const edudata = [{edu_id:"1", edu_degree:"Master of Education(Computer Science Engineering)",edu_inf:"Indrashil Institute of Science and Technology Kadi- Rajpur, Gujarat in 2017; Secured 8.14 CGPA.", proj_info:"VRCS (voice interaction computer system with aiml chat bot)",
duration:"4th Semester", technologies: ".NET, MSSQL"},
{ edu_id:"2", edu_degree:"Bachelor of Education(Computer Science Engineering)",edu_inf:"Indrashil Institute of Science and Technology Kadi- Rajpur, Gujarat in 2015; Secured 7.36 CGPA.", proj_info:"Locate Them (Location Tracking Application)",
duration:"7th -8th Semester", technologies: "C#.NET, MSSQL, Android"  },
{  edu_id:"3", edu_degree:"Diploma of Education(Computer Science Engineering)",edu_inf:" Indrashil Institute of Science and Technology Kadi- Rajpur, Gujarat in 2015; Secured 7.36 CGPA.", proj_info:"I-Gaming (Online Gaming Web Application)",
duration:"6th Semester ", technologies: "C#, .NET, MSSQL "},


];

const EducationBox = (props) => (

    <div className="col-lg-12 text-left">
      
      <div className="accordion"  id="">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="true" aria-controls="collapseOne">
       {props.edu_degree}
      
      </button>
    </h2>
    <div id="" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="">
      <div className="accordion-body">
       <p><strong>Institute: </strong>{props.edu_inf}</p>
       <p><strong>Project: </strong> {props.proj_info}</p>
       <p><strong>Duration: </strong> {props.duration}</p>
       <p><strong>Technology: </strong> {props.technologies} </p>
      </div>
    </div>
  </div>
  </div>
  
  </div>
  );
  

function Education(props) {
    return (
        <div>
            <div className="edu-section" id="education">
              <div className="container pos-relative">
                  <div className="scroll-strip">
                    <svg className="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </div>
                  <div className="custom-container pt-5 pt-5">
                    <div className="row">
                    <div className="col-lg-12 text-left common-title">
                    <h1>Education</h1>
                    </div>
                    {edudata.map(info =>
                      <EducationBox edu_degree= {info.edu_degree} edu_inf={info.edu_inf} proj_info={info.proj_info} duration={info.duration} technologies={info.technologies} edu_id={info.edu_id} />
                      )}
                    </div>
                  </div>
                </div>
        </div>
        </div>
    );
}

export default Education;