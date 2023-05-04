import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { useFormik } from "formik"; // this is a library to acces the data of user form and we're gonna validate it using this format
import styles from "../styles/Username.module.css";
import { resetPasswordValidation } from "../helpers/validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "dalia@12",
      confirmPassword: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false, // to validate the user info only when we click on the submit button
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "30%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new Password
            </span>
          </div>
          <form className="pt-10" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirmPassword")}
                className={styles.textbox}
                type="password"
                placeholder="Confirm Password"
              />
              <button className={styles.btn} type="submit">
                Reset
              </button>
              <span className={styles.errors} id="errors"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// why using <Link to=""> instead of <a href=""> ?
// --> when <a> is clicked the browser refreshes everytime and this is not how the browser works; as we want it to redirect directly to the pther page, so we use <link>
