import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { useFormik } from "formik"; // this is a library to acces the data of user form and we're gonna validate it using this format
import styles from "../styles/Username.module.css";
import { passwordValidate } from "../helpers/validate";

export default function Password() {
  const formik = useFormik({
    initialValues: {
      password: "dalia@12",
    },
    validate: passwordValidate,
    validateOnBlur: false, // to validate the user info only when we click on the submit button
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by Connecting with us!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
              <span className={styles.errors} id="errors"></span>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{" "}
                <Link className="text-red-500" to="/recovery">
                  Click here
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
