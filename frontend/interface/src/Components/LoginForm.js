import React from "react";
import axios from "axios";
import "../Styles/style.css";
import { redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            formDisabled: false,
        };
    }
    handleFormSubmit(event) {
        const { email, password } = this.state;
        event.preventDefault();

        this.setState({
            formDisabled: true,
        });
        axios
            .post("http://localhost:4000/login", {
                email,
                password,
            })
            .then((response) => {
                console.log("response", response);
                this.setState({
                    formDisabled: false,
                });
                this.setState({
                    email: "",
                    password: "",
                    isLoggedIn: true,
                });
                alert("Login Successful!");
            });

    }
    render() {
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            return redirect('/postsCaption');
        }
        return (
            <div>
                <h1>LOGIN FORM </h1>
                <form
                    onSubmit={(event) => this.handleFormSubmit(event)}
                    style={{
                        padding: "40px",
                        backgroundColor: "#eee",
                    }}
                >
                    <div className="mb-3">
                        <label for="name" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="your email"
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
                            placeholder="your password"
                            value={this.state.password}
                            onChange={(e) => {
                                this.setState({
                                    password: e.target.value,
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
                        <p> Form is being submitted please wait...</p>
                    )}
                </form>
                <br />
                <br />
            </div>
        );
    }
}

export default LoginForm;
