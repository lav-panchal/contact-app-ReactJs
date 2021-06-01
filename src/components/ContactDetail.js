import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const { name, email, mno } = props.location.state.contact;
  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <h6 className="card-text">Mobile No. : {mno}</h6>
          <p className="card-text">Email : {email}</p>
        </div>
      </div>
      <div className="mt-3 text-center">
        <Link to="/">
          <button className="btn btn-primary ">Back to Contactlist</button>
        </Link>
      </div>
    </>
  );
};

export default ContactDetail;
