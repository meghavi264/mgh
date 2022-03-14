import React from "react";
import { Container } from "react-bootstrap";



const  AddForm = (props)  => {

  
const {handleChange,handleSubmit,username,email,message} =props;


  return (
    <div>
         <Container>
         <form id="contact_form" onSubmit={handleSubmit}  >
      <div className="mb-3 pt-0">
        <label className="form-lbl" htmlFor="nam" >Name</label>
        <input
          type="text"
          placeholder="Name"
          name="username"
        value={username}
          onChange={handleChange}
         
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-1  outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label className="form-lbl" htmlFor="email" >Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange ={handleChange}
         
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-1 outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label className="form-lbl" htmlFor="message" >Message</label>
        <textarea
          placeholder="Message..."
          name="message"
          value={message}
          onChange={handleChange}
        
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-1 outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
  <button className="btn btn-pop" type="submit" >submit</button>
    </form>
  
      </Container>
    </div>
  );
}

export default AddForm;

    