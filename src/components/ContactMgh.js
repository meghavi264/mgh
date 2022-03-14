import React  from "react";
import emaijs from "emailjs-com";
// const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactMgh = () => {
//   const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e){
    e.preventDefault();

emaijs.sendForm("service_ubze9pz",
"template_l855rek",
e.target,
"user_W24cdjTd0UtG3BIgh").then(res=>{
    console.log("thank you" + res);
    
}).catch(err=> console.log("erroe"+err));
  }

  return (
    
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
             <h1>Keep In Touch</h1>
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
         

          <div className="row">
          <div className="col-md-6">
          <h4>Contact</h4>
<div className="contact-box py-4 ">
    <h5><i classNameName="fa fa-spinner fa-spin"></i><a href='tel:9714720415'>9714720415</a></h5>
    <h5><a href='email:megha.p265@gmail.com'>megha.p265@gmail.com</a></h5>
</div>
          </div>
<div className="col-md-6">
    <div className="cont-form">
<form onSubmit={handleSubmit}  >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <input type="submit" value="Message" />
      </div>
    
    </form>
</div>
</div>
</div>
      </div>
    
  );

  };
export default ContactMgh;