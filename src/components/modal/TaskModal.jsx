import React, { useEffect } from "react";
import Modal from "./Modal";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { CrossIcon } from "../../assets/icons/icons";
import dropDownIcon from "../../assets/angle-down.svg";
import { addNewTaskAPI, deleteTaskAPI, updateTasksAPI } from "../../apis/TaskPlaning/TaskAPI";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  projectName: yup.string().required("Project Name is required"),
  priority: yup.string().required("Priority is required"),
  description: yup.string().required("Description is required"),

});

function TaskModal({ showModal, showDetails, isType, data }) {
  const priority = [
    { label: "P1", value: "P1" },
    { label: "P2", value: "P2" },
    { label: "P3", value: "P3" },
  ];

  useEffect(() => {
    if (showDetails) {
      // console.log(data);
      formik.setFieldValue("title", data?.title);
      formik.setFieldValue("projectName", data?.projectName);
      formik.setFieldValue("priority", data?.priority);
      formik.setFieldValue("description", data?.description);

    }
  },);

  const formik = useFormik({
    initialValues: {
      title: "",
      projectName: "",
      priority: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if(isType === "ADD") {
        await addNewTaskAPI(values);
      }else if(isType === "OPEN") {
        await updateTasksAPI(data._id, values)
      }
      showModal(false);

    },
  });
  const handleCloseClick = async () => {
    if(data){
      await deleteTaskAPI(data._id);
    }
    showModal(false);
  }
  return (
    <Modal showModal={showModal}>
      <Formik enableReinitialize={true} onSubmit>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-between overflow-y-scroll no-scrollbar gap-4 p-[25px] border border-black  bg-lightSecondary focus:outline-none rounded-10 sm:min-w-[600px]">
            <div className="flex justify-between">
              {isType === "OPEN" ? (
                <p className="text-20-600  text-textDark">
                  Edit Your Task
                </p>
              ) : isType === "ADD" ? (
                <p className="text-20-600  text-textDark">
                  Add New Task
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  <p className="text-20-600  text-textDark">
                    See Your Task
                  </p>
                  <p className="text-13-400  text-dangerTheme select-none  ">
                    Can only edit your task in when it is OPEN*
                  </p>
                </div>
              )}

              <div className="cursor-pointer" onClick={() => showModal(false)}>
                <CrossIcon />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className=" text-textDark text-12-500">
                Write your Task
              </label>
              <div className="relative  text-textDark">
                <input
                  type="text"
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10  bg-primary"
                  name="title"
                  placeholder="Build UI for onboarding flow"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={
                    isType === "PROGRESS" || isType === "RESOLVED"
                      ? true
                      : false
                  }
                />
              </div>
              {formik.errors.title && formik.touched.title ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.title}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className=" text-textDark text-12-500">
                Write project description
              </label>
              <div className="relative  text-textDark">
                <textarea
                  type="text"
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10  bg-primary"
                  name="description"
                  placeholder="Build UI for onboarding flow"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={
                    isType === "PROGRESS" || isType === "RESOLVED"
                      ? true
                      : false
                  }
                />
              </div>
              {formik.errors.description && formik.touched.description ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.description}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className=" text-textDark text-12-500">
                Write your project name
              </label>
              <div className="relative  text-textDark">
                <input
                  type="text"
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10  bg-primary"
                  name="projectName"
                  placeholder="WorkOS"
                  value={formik.values.projectName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={
                    isType === "PROGRESS" || isType === "RESOLVED"
                      ? true
                      : false
                  }
                />
              </div>
              {formik.errors.projectName && formik.touched.projectName ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.projectName}
                </p>
              ) : null}
              <div className="flex flex-col gap-[10px]">
                <label className=" text-textDark text-12-500">
                  Set your priority
                </label>
                <div className="relative  text-textDark">
                  <select
                    className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10  bg-primary"
                    name="priority"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={
                      isType === "PROGRESS" || isType === "RESOLVED"
                        ? true
                        : false
                    }
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
                {formik.errors.priority && formik.touched.priority ? (
                  <p className="text-red-600 text-12-500 ">
                    {formik.errors.priority}
                  </p>
                ) : null}
              </div>
            </div>
            {isType === "OPEN" || isType === "ADD" ? (
              <div className="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
                <button
                  className={`text-14-600 py-4 px-[30px] flex gap-[5px] ${
                    isType === "OPEN" && showDetails === true
                      ? "bg-dangerTheme text-primary"
                      : " hover:bg-lightGreyHover bg-lightGrey  text-textDark"
                  } rounded-10  justify-center items-center min-w-[203px]`}
                  onClick={() => handleCloseClick()}
                  type="button"
                >
                  {isType === "OPEN" && showDetails === true ? (
                    <p>Delete</p>
                  ) : (
                    <p>Cancel</p>
                  )}
                </button>

                <button
                  className={`text-14-600 py-4 px-[30px] flex gap-[5px] hover:bg-themeHover bg-theme rounded-10 text-primary justify-center items-center min-w-[203px]`}
                  type="submit"
                >
                  {isType === "OPEN" && showDetails === true ? (
                    <p>Update</p>
                  ) : (
                    <p>Add</p>
                  )}
                </button>
              </div>
            ) : null}
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}

export default TaskModal;
