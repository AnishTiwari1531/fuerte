import React from "react";
import axios from "axios";
import "../Styles/style.css";

class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            profileImage: "",
            formDisabled: false,
        };
    }
    handleFormSubmit(event) {
        const { firstName, lastName, email, password, profileImage } = this.state;
        event.preventDefault();

        this.setState({
            formDisabled: true,
        });
        axios
            .post("http://localhost:4000/register", {
                firstName,
                lastName,
                email,
                password,
                profileImage,
            })
            .then((response) => {
                console.log("response", response);
                this.setState({
                    formDisabled: false,
                });
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    profileImage: "",
                });
                alert("Registration Successful!");
            });
    }
    render() {
        return (
            <center><div>
                <h1>REGISTRATION FORM </h1>
                <form
                    onSubmit={(event) => this.handleFormSubmit(event)}
                    style={{
                        padding: "40px",
                        backgroundColor: "#eee",
                    }}
                >

                    <div className="mb-3">
                        <label>FirstName</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="enter your first name"
                            required={true}
                            value={this.state.firstName}
                            onChange={(e) => {
                                this.setState({
                                    firstName: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="name" className="form-label">
                            LastName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="enter your last name"
                            required={true}
                            value={this.state.lastName}
                            onChange={(e) => {
                                this.setState({
                                    lastName: e.target.value,
                                });
                            }}
                        />
                    </div>


                    <div className="mb-3">
                        <label for="name" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="enter your email"
                            required={true}
                            value={this.state.email}
                            onChange={(e) => {
                                this.setState({
                                    email: e.target.value,
                                });
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="enter your password"
                            required={true}
                            value={this.state.password}
                            onChange={(e) => {
                                this.setState({
                                    password: e.target.value,
                                });
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            id="name"
                            value={this.state.profileImage}
                            onChange={(e) => {
                                this.setState({
                                    profileImage: e.target.value,
                                });
                            }}
                        />
                    </div>

                    <button
                        disabled={this.state.formDisabled}
                        type="submit"
                        className="btn btn-primary mb-3"
                    >
                        Submit
                    </button>

                    {this.state.formDisabled && (
                        <p> Form is being submitted please wait.....</p>
                    )}
                </form>
                <br />
                <br />
            </div>
            </center>
        );
    }
}

export default RegistrationForm;
