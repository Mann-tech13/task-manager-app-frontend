import React from "react";
import Modal from "./Modal";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { CrossIcon } from "../../assets/icons/icons";
import dropDownIcon from "../../assets/icons/angle-down.svg";

const validationSchema = yup.object({
  task: yup.string().required("Task is required"),
  project: yup.string().required("Project Name is required"),
  priority: yup.string().required("Priority is required"),
});

function TaskModal(props) {
  const priority = [
    { label: "P1", value: "P1" },
    { label: "P2", value: "P2" },
    { label: "P3", value: "P3" },
  ];

  const formik = useFormik({
    initialValues: {
      task: "",
      project: "",
      priority: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });
  return (
    <Modal showModal={props.showModal}>
      <Formik enableReinitialize={true} onSubmit>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-between overflow-y-scroll no-scrollbar gap-4 p-[25px] border border-black dark:bg-secondary bg-lightSecondary focus:outline-none rounded-10 sm:min-w-[600px]">
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
                Write your Task
              </label>
              <div className="relative dark:text-textSecondary text-textDark">
                <input
                  type="text"
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                  name="task"
                  placeholder="Build UI for onboarding flow"
                  value={formik.values.task}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.task && formik.touched.task ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.task}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="dark:text-textQuad text-textGreyLight text-12-500">
                Write your project name
              </label>
              <div className="relative dark:text-textSecondary text-textDark">
                <input
                  type="text"
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                  name="project"
                  placeholder="WorkOS"
                  value={formik.values.project}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.project && formik.touched.project ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.project}
                </p>
              ) : null}
              <div className="flex flex-col gap-[10px]">
                <label className="dark:text-textQuad text-textGreyLight text-12-500">
                  Set your priority
                </label>
                <div className="relative dark:text-textSecondary text-textDark">
                  <select
                    className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                    name="priority"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select a option</option>
                    {priority.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-0 flex items-center pr-4 pointer-events-none bottom-4">
                    <img src={dropDownIcon} alt="drop-down" />
                  </div>
                </div>
                {formik.errors.priority &&
                formik.touched.priority ? (
                  <p className="text-red-600 text-12-500 ">
                    {formik.errors.priority}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
              <button
                className="text-14-600 py-4 px-[30px] flex gap-[5px] dark:bg-tertiary hover:bg-lightGreyHover bg-lightGrey rounded-10 dark:text-textSecondary text-textDark justify-center items-center min-w-[203px]"
                onClick={() => props.showModal(false)}
                type="button"
              >
                <p>Cancel</p>
              </button>
              <button
                className={`text-14-600 py-4 px-[30px] flex gap-[5px] hover:bg-themeHover bg-theme rounded-10 dark:text-primary text-lightPrimary justify-center items-center min-w-[203px]`}
                type="submit"
              >
                <p>Add</p>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}

export default TaskModal;
