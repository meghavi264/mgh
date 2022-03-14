import { data } from "jquery";
import React, { Component } from "react";
import {  CircularProgressbar,buildStyles,} from "react-circular-progressbar";
import { easeQuadInOut } from 'd3-ease';
 import { Animated,useSpring, config,interpolate } from "react-spring";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import Animate from 'react-animate.css';

import "react-circular-progressbar/dist/styles.css";



const carddata = [{ percentage: "70", lang_name:"Javascript,", lang_name_2:"Jquery", lang_info:"  Lorem Ipsum is simply dummy text of the printing andtypesetting industry.Lorem Ipsum is simply dummy text of the" },
{ percentage: "75", lang_name:"HTML", lang_info:" Lorem Ipsum is simply dummy text of the printing andtypesetting industry.Lorem Ipsum is simply dummy text of the" },
{ percentage: "80", lang_name:"CSS,",lang_name_2:"SCSS", lang_info:" Lorem Ipsum is simply dummy text of the printing andtypesetting industry.Lorem Ipsum is simply dummy text of the" },
{ percentage: "70", lang_name:"WORDPRESS", lang_info:" Lorem Ipsum is simply dummy text of the printing andtypesetting industry.Lorem Ipsum is simply dummy text of the" },
{ percentage: "45", lang_name:"ReactJS", lang_info:" Lorem Ipsum is simply dummy text of the printing andtypesetting industry.Lorem Ipsum is simply dummy text of the" },
{ percentage: "70", lang_name:"Photoshop,", lang_name_2:"figma,", lang_name_3:"coreldraw", lang_info:" Lorem Ipsum is simply dummy text of the printing andtypesetting industry.Lorem Ipsum is simply dummy text of the" }];

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Skillcard = (props) => {
  const [set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}));
  const [set] = useSpring(() => ({xys:[0, 0, 1],config:{mass:10,tension:200,friction:50} }));
  return(
  <div class="col-xl-4 col-md-6 design-1">
    <div class="card"  onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}>
      <div class="card-title">
        <div class="vertical-strip">
          <svg class="heart" viewBox="0 0 32 29.6">
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
class Skill extends Component {
  render() {
  
    return (
      <div>
              <div class="skill-section" id="skill">
                <div class="container pos-relative">
                  <div class="scroll-strip">
                    <svg class="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </div>
                  <div class="custom-container pt-5">
                    <div class="row">
                      <div class="col-lg-12 text-right common-title">
                        <h1>Skills</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries, but
                          also the leap into electronic typesetting, remaining
                          essentially
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container pos-relative pb-5">
                  <div class="scroll-strip">
                    <svg class="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </div>
                  <div class="row">
                  <Animate
    animationEnter="bounceIn"
    animationLeave="bounceOut"
    durationEnter={1000}
    durationLeave={1000}
    component="ul" >
                  {carddata.map(info =>
                      <Skillcard percentage= {info.percentage} lang_name={info.lang_name} lang_info={info.lang_info} lang_name_2={info.lang_name_2}  lang_name_3={info.lang_name_3}/>
                      )}
                  
                    </Animate>
                  </div>
                </div>
              </div>
              </div>
    );
  }
}

export default Skill;
