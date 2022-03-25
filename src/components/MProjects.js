import React from 'react';
const projectsdata = [{ proj_title: "Amrit Ocean Resort", proj_link:"https://www.amritoceanresort.com/", proj_img:"../images/amrit-ocean-resort.png" },{ proj_title: "Etech Global Services", proj_link:"https://www.etechgs.com/", proj_img:"../images/etech.png" },{ proj_title: "Amrit Ocean Recidence", proj_link:"https://www.amritocean.com/", proj_img:"../images/amrit-ocean.png" },{ proj_title: "Qeval Pro", proj_link:"https://www.qevalpro.com/", proj_img:"../images/qeval.png"},{ proj_title: "Etech technology Solutions", proj_link:"https://www.etechtechnologysolutions.com/", proj_img:"../images/etsnetwork.png"},{ proj_title: "Madhav International visa", proj_link:"https://madhavinternational.co.in/", proj_img:"../images/madhav.png"}
];


const ProjectCard = (props) => (
     
    <div className="col-xl-4 col-md-6 design-1 proj-card">
     

      <div className="card content-overlay">
      
     <img src={props.proj_img} alt="Projects" />
     <div className="content-overlay">
  <div className="card-content">
    <a href={props.proj_link} target="_blank"  rel="noopener noreferrer">
      <p className="card-category">{props.proj_title}</p>
    </a>
  </div>
  </div>
</div>
    
    </div>
  );

function MProjects(props) {

    return (
        <div>
          <div className="proj-section" id="projects">
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
                    <div className="col-lg-12 text-right common-title">
                    <h1>Projects</h1>
                    <p>
                    Involved Business Websites (Amrit (Resort & Residences), ETech, Qevalpro, Etech Technology Solutions, Ayre, CMO and Projects VMS(Voter management system),TARAS WMS (management system), Vishwan And Dial Punch(Auto calling  operator system) and 25+ websites and Projects Design/Developing responsibility and implemented them using WordPress, Php, jQuery, HTML, CSS.
                        </p>
                    </div>
                    {projectsdata.map(info =>
                      <ProjectCard proj_title= {info.proj_title} proj_link={info.proj_link} proj_img={info.proj_img} />
                      )}
                    </div>
                  </div>
                </div>  
        </div>
        </div>
    );
}

export default MProjects;