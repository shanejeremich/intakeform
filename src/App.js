import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions } from "./config/schema";
import axios from "axios";

import SuccessAlert from "./SuccessAlert";

function App() {
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const url = "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users";
  const [successfull, setSuccessfull] = useState(false);

  function onSubmit(data) {
    const json = JSON.stringify(data);

    axios
      .post(url, json)
      .then(
        res => {
          if (res.status === 200 || 201) {
            setSuccessfull(true);
          }
          console.log(res);
          reset();
        }
        // console.log(res.status);
      )
      .catch(err => {
        if (err.res) {
          console.log(err.res);
          setSuccessfull(false);
        } else if (err.req) {
          console.log(err.req);
          setSuccessfull(false);
        } else {
          console.log("Something wrong within the app");
          setSuccessfull(false);
        }
      });
  }

  return (
    <div className="container-sm mt-5">
      <div className="card p-5">
        <h5 className="card-header bg-transparent pl-1">Contact Us</h5>
        <div className="containercard-body">
          <form onSubmit={handleSubmit(onSubmit)} id="formData">
            <div className="form-group">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  type="text"
                  {...register("name")}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group p-1">
                <label>Date of Birth</label>
                <input
                  name="dob"
                  type="date"
                  {...register("dob")}
                  className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.dob?.message}</div>
              </div>
            </div>
            <div className="form-group form-check">
              <input
                name="emailConsent"
                type="checkbox"
                {...register("emailConsent")}
                className={`form-check-input ${errors.emailConsent ? "is-invalid" : ""}`}
              />
              <label htmlFor="emailConsent" className="form-check-label">
                I agree to be contacted via email.
              </label>
              <div className="invalid-feedback">{errors.emailConsent?.message}</div>
            </div>
            <div className="form-group">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setSuccessfull(false);
                }}
                className="btn btn-secondary mr-1">
                Clear
              </button>
              <button type="submit" className="btn btn-dark" disabled={successfull}>
                Submit
              </button>
            </div>
            {successfull ? <SuccessAlert /> : ""}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
