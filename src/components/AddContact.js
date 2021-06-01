import React from "react";
import { Link } from "react-router-dom";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    mno: "",
  };
  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.mno === ""
    ) {
      alert("All fields are mendetory...!");
      return;
    }
    this.props.AddContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <div className="">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-center pt-3">Add Contact</h2>
            </div>

            <div className="col-lg-4">
              <Link to="/">
                <button class="btn btn-primary float-right mt-3 " type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 26 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                  View Contacts
                </button>
              </Link>
            </div>
          </div>

          <form onSubmit={this.add}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-journal-plus"
                viewBox="0 0 26 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddContact;
