import React from "react";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });
  return (
    <div>
      <Formik enableReinitialize={true} onSubmit>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <div>
              <p>Enter your email</p>
              <input
                type="email"
                name="email"
                placeholder="planify@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-600 text-12-500 ">{formik.errors.email}</p>
            ) : null}
            </div>
            <div>
              <p>Enter Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter strong password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-600 text-12-500 ">{formik.errors.password}</p>
            ) : null}
            </div>
            <div>
                
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
