import React from "react";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { AuthSVG } from "../assets/icons/icons";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../apis/Auth/AuthAPI";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../redux/action";

const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const result = await loginAPI(values);
      if (result?.status === 200) {
        console.log(result);
        dispatch(setAccessToken(result?.data?.accessToken));
        navigate("/", { replace: true });
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

            <div className="w-full mt-8 px-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-textGreyLight text-12-500">
                  Enter your email
                </p>
                <input
                  type="email"
                  className="block w-full p-4 appearance-none text-textDark text-12-500 focus:outline-none rounded-10 border-theme border-b-2 bg-primary"
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
                  className="block w-full p-4 appearance-none text-12-500 text-textDark focus:outline-none rounded-10 border-theme border-b-2 bg-primary"
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
                  className={`text-14-600 py-4 mt-5 px-[30px] flex gap-[5px] hover:bg-themeHover bg-theme rounded-10 text-primary justify-center items-center w-full`}
                  type="submit"
                >
                  <p>Login</p>
                </button>
                <div>
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span className="text-linkLine underline cursor-pointer">
                      Create here
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
