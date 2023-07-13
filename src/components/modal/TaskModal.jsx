import React from "react";
import Modal from "./Modal";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { CrossIcon } from "../../assets/icons/icons";
import dropDownIcon from "../../assets/icons/angle-down.svg";

const validationSchema = yup.object({
  chain: yup.string().required("Chain is required"),
  typeOfCompany: yup.string().required("Category is required"),
  developmentPhase: yup.string().required("Progress is required"),
});

function TaskModal(props) {

  const chain = [
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
    { label: "BSC", value: "BSC" },
  ];
  const typeOfCompany = [{ label: "Defi", value: "DEFI" }];
  const developmentPhase = [
    { label: "Mainnet", value: "MAINNET" },
    { label: "Testnet", value: "TESTNET" },
  ];
  const formik = useFormik({
    initialValues: {
      chain: "",
      typeOfCompany: "",
      developmentPhase: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });
  return (
    <Modal showModal={props.showModal}>
      <Formik enableReinitialize={true} onSubmit>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-between overflow-y-scroll no-scrollbar gap-4 p-[25px] border border-black dark:bg-secondary bg-lightSecondary focus:outline-none rounded-10 sm:min-w-[800px]">
            <div className="flex justify-between">
              <p className="text-20-600 dark:text-textSecondary text-textDark">
                Edit Details
              </p>
              <div
                className="cursor-pointer"
                onClick={() => props.showModal(false)}
              >
                <CrossIcon />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="dark:text-textQuad text-textGreyLight text-12-500">
                On what chain are you building?
              </label>
              <div className="relative dark:text-textSecondary text-textDark">
                <select
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                  name="chain"
                  value={formik.values.chain}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select a option</option>
                  {chain.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 flex items-center pr-4 pointer-events-none bottom-4">
                  <img src={dropDownIcon} alt="drop-down" />
                </div>
              </div>
              {formik.errors.chain && formik.touched.chain ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.chain}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="dark:text-textQuad text-textGreyLight text-12-500">
                What is the category of your startup?
              </label>
              <div className="relative dark:text-textSecondary text-textDark">
                <select
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                  name="typeOfCompany"
                  value={formik.values.typeOfCompany}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select a option</option>
                  {typeOfCompany.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 flex items-center pr-4 pointer-events-none bottom-4">
                  <img src={dropDownIcon} alt="drop-down" />
                </div>
              </div>
              {formik.errors.typeOfCompany && formik.touched.typeOfCompany ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.typeOfCompany}
                </p>
              ) : null}
              <div className="flex flex-col gap-[10px]">
                <label className="dark:text-textQuad text-textGreyLight text-12-500">
                  How far did you move in the development of your project?
                </label>
                <div className="relative dark:text-textSecondary text-textDark">
                  <select
                    className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                    name="developmentPhase"
                    value={formik.values.developmentPhase}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select a option</option>
                    {developmentPhase.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-0 flex items-center pr-4 pointer-events-none bottom-4">
                    <img src={dropDownIcon} alt="drop-down" />
                  </div>
                </div>
                {formik.errors.developmentPhase &&
                formik.touched.developmentPhase ? (
                  <p className="text-red-600 text-12-500 ">
                    {formik.errors.developmentPhase}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
              <button
                className="text-12-600 py-4 px-[30px] flex gap-[5px] dark:bg-tertiary bg-eventsColor rounded-10 dark:text-textSecondary text-textDark justify-center items-center min-w-[203px]"
                onClick={() => props.showModal(false)}
                type="button"
              >
                <p>Cancel</p>
              </button>
              <button
                className={`text-12-600 py-4 px-[30px] flex gap-[5px] ${
                  props.isStartUpPage
                    ? "bg-startUpThemeColor"
                    : "bg-textTertiary"
                } rounded-10 dark:text-primary text-lightPrimary justify-center items-center min-w-[203px]`}
                type="submit"
              >
                <p>Update</p>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}

export default TaskModal;
