import React from "react";
import { Link } from "react-router-dom";
class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, mno } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
      mno,
    };
  }
  edit = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.mno === ""
    ) {
      alert("All fields are mendetory...!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "", mno: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <div className="">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-center pt-3">Edit Contact</h2>
            </div>

            <div className="col-lg-4">
              <Link to="/">
                <button
                  className="btn btn-primary float-right mt-3 "
                  type="submit"
                >
                  View Contacts
                </button>
              </Link>
            </div>
          </div>

          <form onSubmit={this.edit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile No.</label>
              <input
                type="text"
                name="mno"
                value={this.state.mno}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => this.setState({ mno: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default EditContact;
