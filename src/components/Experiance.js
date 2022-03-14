import React from 'react';

const expdata = [{ year: "2019-Current", exp_info:"Etech Global Services, Gujarat, Gandhinagar as UI/Web Developer/Frontend/Designer", key_1:"Involve as Frontend Developer and designer on Multiple projects Like Amrit Ocean, VMS (voter management system). using various tools, visual Studio Code and implemented them using PHP, jQuery, HTML, CSS.", key_2:"Involve as UI/Frontend Developer and Designer on Business Websites (Amrit (Resort & Residences), ETech,Qevalpro, Etech Technology Solutions, Ayre, CMO) and implemented them using WordPress, Php, jQuery, HTML, CSS.", key_3: "Design/Developed and Manage/Handle Websites (Amrit, Etech, Qevalpro, JimIyoob, Enterice, Etech DFDMart,BBC Technology, CMO) Responsibilities with Responsive UI" },

{ year: "2017-2018", exp_info:" MRR Hope Infotech Solutions Private Limited, Gujarat, Ahmedabad as UI/Web Developer/Designer", key_1:"Involved as Frontend Developer and designer on two software (Vishwan And Dial Punch). using various tools, phpstorm, visualStudio Code and implemented them using PHP, Vue.js, jQuery.", key_2:"Involve as UI Developer and Designer on Business Websites and implemented them using WordPress, Php, jQuery.", key_3: "Developed from Scratch to Websites with Responsive UI." },

{ year: "2015-2017", exp_info:"Kaizen Infocomm Private Limited, Gujarat, Ahmedabad as Junior UI/Web Developer/Designer", key_1:"Involved as Frontend Developer and designer on two software (products).using various tools, visual Studio, NetBeans and implementing them using PHP, C#, JQuery.", key_2 : "Involve as UI Developer on transportation Related Project and E-Commerce Website (Projects). using various tools, NetBeans and implemented them using PHP, jQuery.", key_3: "Developed Responsive UI" }];

const ExperianceBox = (props) => (

    <div className="col-lg-12 text-left info-box">
      
    <h3>{props.year}</h3>
    <h6>
    {props.exp_info}
    </h6>
   <div className="featur-keys">
       <ul>
           <li>{props.key_1}</li>
           <li>{props.key_2}</li>
           <li>{props.key_3}</li>
       </ul>
   </div>
  </div>



  );
  
function Experiance(props) {
    return (
        <div>
            <div className="expe-section" id="exeriance">
              <div className="container pos-relative">
                  <div className="scroll-strip">
                    <svg className="heart" viewBox="0 0 32 29.6">
                      <path
                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                      />
                    </svg>
                  </div>
                  <div className="custom-container py-5">
                    <div className="row">
                    <div className="col-lg-12 text-left common-title">
                    <h1>Experiance</h1>
                    </div>
                    {expdata.map(info =>
                      <ExperianceBox year= {info.year} exp_info={info.exp_info} key_1={info.key_1}  key_2={info.key_2}  key_3={info.key_3} />
                      )}
                    </div>
                  </div>
                </div>
        </div>
        </div>
    );
}

export default Experiance;