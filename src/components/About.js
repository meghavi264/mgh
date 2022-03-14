import React,{useState,useEffect} from "react";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import emaijs  from "emailjs-com";
import { faDownload } from "@fortawesome/fontawesome-free-solid";


const About = () => {
  // const {label,name,type,value} = props ;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [values, setValues] = useState({
    username:'',
    email:'',
    message:''
  });

const handleChange = (e) => {
  setValues(values => ({
  ...values,
    [e.target.name]: e.target.value
  }));
}

const [status,setstatus] =useState('');
  function handleSubmit(e){
    e.preventDefault();

emaijs.send('service_ubze9pz',
'template_popqyde',
values,
'W24cdjTd0UtG3BIgh').then(Response => {
  console.log('success....',Response );

  setValues({
  username:'',
  email:'',
  message:''

})

setstatus("Success");
}, error => {
  console.log("error.....",error);
}
);



};



useEffect(() =>{


  if(status  === "Success"){
    setTimeout(() => {
      setstatus('');
      handleClose();
    }, 4000);
  }
}


);



 
  return (
    <div>
         <div className="about-section" id="about">
        <div className="container pos-relative">
          <div className="scroll-strip"><svg className="heart" viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg> 


</div>
      <div className="custom-container">
     <div className="row">
       <div className="col-12 col-md-6">
        
         <div className="about-imgbox">
         <div className="right-img"><img src="../images/heart-block-bg.png" alt="Mgh Portfolio"></img></div>
         <div className="center-img"> <img src="../images/mgh.jpg"   alt="Mgh Portfolio"></img></div>
         <div className="left-img"><img src="../images/heart-block-bg.png"   alt="Mgh Portfolio"></img></div>
       </div>
       </div>
       <div className="col-12 col-md-6 about-cont-section">
         <div className="about-content text-right">
           <h2>Hi, I myself <span>Meghavi </span></h2>
           <h1> <span>Develop</span> & <span> Design</span> websites </h1>
           <p>I am UI/Frontend developer, who loves clean, simple & unique designing and developing. I also loves crafting brand identities and creative works that helps people's business to grow.</p>
           <button type="sumit" className="btn btn-mgh" onClick={handleShow}  >Get Resume  <FontAwesomeIcon icon={faDownload} size="1x" /></button>
         </div>
         </div>
       
     </div>
     </div>
       </div>

       <Modal show={show}  className="get-cv" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Keep In Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <AddForm handleChange={handleChange} handleSubmit={handleSubmit} username={values.username} email={values.email} message={values.message}  />
          {status && renderAlert()}
        </Modal.Body>
        <Modal.Footer>
          
         
         
        {status && pfdDownload()}
          <Button variant=""  className="btn-pop-cls" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );

  }

  const renderAlert = () =>(
    <div className="success-box text-center">
      <p className="px-2 py-2 my-4 text-center">Thank you</p>

    </div>
  );
  const pfdDownload =() =>(
    <a className="btn btn-mgh" href='../doc/Meghavi-resume.pdf' download>download</a>
  )
export default About;


