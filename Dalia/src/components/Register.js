import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { useFormik } from "formik"; // this is a library to acces the data of user form and we're gonna validate it using this format
import styles from "../styles/Username.module.css";
import { registerValidation } from "../helpers/validate";
import convertToBase64 from "../helpers/convert";

export default function Register() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false, // to validate the user info only when we click on the submit button
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });
  // Formik doesn't support file upload so we're creating this function
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "45%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center">
              <label htmlFor="profile">
                <img
                  className={styles.profile_img}
                  src={file || avatar}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                name="profile"
                id="profile"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("passowrd")}
                className={styles.textbox}
                type="password"
                placeholder="Password*"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
              <span className={styles.errors} id="errors"></span>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already have an account?{" "}
                <Link className="text-red-500" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// why using <Link to=""> instead of <a href=""> ?
// --> when <a> is clicked the browser refreshes everytime and this is not how the browser works; as we want it to redirect directly to the pther page, so we use <link>
