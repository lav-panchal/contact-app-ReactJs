import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Addcontact from "./AddContact";
import Editcontact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import Footer from "./Footer";
const { uuid } = require("uuidv4");

function App() {
  const local = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const updateContactHandler = (contact1) => {
    const { id } = contact1;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...contact1 } : contact;
      })
    );
  };

  const removeContactHandler = (id) => {
    const newdata = contacts.filter((contacts) => {
      return contacts.id !== id;
    });
    setContacts(newdata);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(local));
    if (data) setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem(local, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <Addcontact {...props} AddContactHandler={AddContactHandler} />
              )}
            />

            <Route
              path="/edit"
              render={(props) => (
                <Editcontact
                  {...props}
                  updateContactHandler={updateContactHandler}
                />
              )}
            />

            <Route path="/contactdetail/:id" component={ContactDetail} />
          </Switch>

          {/* <Addcontact AddContactHandler={AddContactHandler} />
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          /> */}
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
