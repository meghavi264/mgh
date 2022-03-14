// import { data } from "jquery";
import React  from "react";
import {  CircularProgressbar,buildStyles,} from "react-circular-progressbar";
import { easeQuadInOut } from 'd3-ease';

  import AnimatedProgressProvider from "./AnimatedProgressProvider";


import "react-circular-progressbar/dist/styles.css";



const carddata = [{ percentage: "70", lang_name:"Javascript, ", lang_name_2:"Jquery", lang_info:"Expertise in building unique and effective websites using Jquery/Javascript" },
{ percentage: "75", lang_name:"HTML", lang_info:"Master in html to built up standard structure websites" },

{ percentage: "80", lang_name:"CSS, ",lang_name_2:"SCSS,", lang_name_3:"BOOTSTRAP", lang_info:"mastery of carving and styling web pages using CSS/SCSS " },
{ percentage: "70", lang_name:"WORDPRESS", lang_info:"Great in develop quick and efficient CMS based Websites" },
{ percentage: "45", lang_name:"ReactJS", lang_info:"Good in build-up fast and flexibile Websites" },
{ percentage: "70", lang_name:"Photoshop, ", lang_name_2:"figma, ", lang_name_3:"coreldraw", lang_info:"Love to crafting and carving  with unique design idea " }];



const Skillcard = (props) => {

  return(
  <div className="col-xl-4 col-md-6 design-1">
    <div className="card" >
      <div className="card-title">
        <div className="vertical-strip">
          <svg className="heart" viewBox="0 0 32 29.6">
            <path  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </div>
        <h5>
        {props.lang_name}
        {props.lang_name_2}
        {props.lang_name_3}
        </h5>
      </div>
   
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={props.percentage}
        duration={1.4}
        easingFunction={easeQuadInOut}
        
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#fbf7ff",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent" })}
            />
          );
        }}
      </AnimatedProgressProvider>
  
      <p>
      {props.lang_info}
      </p>
    </div>
  </div>
  
);
      }

function skill(props) {
  return (
    <div>
   
      <div>
              <div className="skill-section" id="skill">
                <div className="container pos-relative">
                  <div className="scroll-strip">
                    <svg className="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </div>
                  <div className="custom-container pt-5">
                    <div className="row">
                      <div className="col-lg-12 text-right common-title">
                        <h1>MY Special SKills </h1>
                        <p>
                        Intermediate knowladge about programming language C, C#, .NET, PHP also familiar with MySQL and PostgreSQL.
                        </p>
                        <p><h6>Tools</h6>
                        Flexible to any frontend editor however most familiar to Visual Studio Code, Sublime, WebStorm,In addtion, used to with Common development like Visual Studio, NetBeans, Dream Viewer, Figma, CorelDraw, Photoshop, GIT (version management system), WebStorm, flexible for any OS system however used to with Windows, Linux.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container pos-relative ">
                  <div className="skill-card ">
                  <div className="scroll-strip">
                    <svg className="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </div>
                  <div className="row py-lg-5 pt-0 pb-5">
                 
                  {carddata.map(info =>
                      <Skillcard percentage= {info.percentage} lang_name={info.lang_name} lang_info={info.lang_info} lang_name_2={info.lang_name_2}  lang_name_3={info.lang_name_3}/>
                      )}
                  
                    </div>
                  </div>
                </div>
              </div>
              </div>
  
    </div>
  );
}

export default skill;