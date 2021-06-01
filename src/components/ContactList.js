import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const Contactlist = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactsList = props.contacts.map((contact) => {
    return (
      <>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </>
    );
  });
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-center pt-3">Contact List</h2>
          </div>

          <div className="col-lg-4">
            <Link to="/add">
              <button
                className="btn btn-primary float-right mt-3 "
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-journal-plus"
                  viewBox="0 0 26 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
                Add Contact
              </button>
            </Link>
          </div>
        </div>
        {renderContactsList}
      </div>
      <div className="mt-5"></div>
    </>
  );
};

export default Contactlist;
