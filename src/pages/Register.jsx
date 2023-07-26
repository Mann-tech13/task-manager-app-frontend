import React from "react";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { AuthSVG } from "../assets/icons/icons";
import { Link, useNavigate } from "react-router-dom";
import {registerAPI} from "../apis/Auth/AuthAPI";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Register() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const result = await registerAPI(values);
      if(result?.status === 200){
        navigate("/login")
      }
    },
  });
  return (
    <div className="secure-wrapper h-screen py-28 px-5">
      <Formik enableReinitialize={true} onSubmit>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex items-start mx-auto shadow-md md:max-w-4xl max-w-md h-[420px] secure-container bg-primary/30 rounded-10 border-2 border-solid border-primary/20">
            <div className="w-full pl-3 md:block hidden">
              <AuthSVG />
            </div>

            <div className="w-full mt-7 px-6 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-textGreyLight text-12-500">
                  Enter your name
                </p>
                <input
                  type="text"
                  className="block w-full p-3 appearance-none text-12-500 focus:outline-none rounded-10 border-theme border-b-2 bg-primary"
                  name="name"
                  placeholder="Smith"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-600 text-12-500">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-textGreyLight text-12-500">
                  Enter your email
                </p>
                <input
                  type="email"
                  className="block w-full p-3 appearance-none text-12-500 focus:outline-none rounded-10 border-theme border-b-2 bg-primary"
                  name="email"
                  placeholder="planify@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600 text-12-500">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-textGreyLight text-12-500">Enter Password</p>
                <input
                  type="password"
                  className="block w-full p-3 appearance-none text-12-500 focus:outline-none rounded-10 border-theme border-b-2 bg-primary"
                  name="password"
                  placeholder="Enter strong password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="text-red-600 text-12-500">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-8 items-center text-15-500">
                <button
                  className={`text-14-600 py-3 mt-5 px-7 flex gap-[5px] hover:bg-themeHover bg-theme rounded-10 text-primary justify-center items-center w-full`}
                  type="submit"
                >
                  <p>Register</p>
                </button>
                <div>
                  Alredy have an account? <Link to="/login"><span className="text-linkLine underline cursor-pointer">Login here</span>
                </Link></div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
