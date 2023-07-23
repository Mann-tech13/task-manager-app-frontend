import React from "react";
import Modal from "./Modal";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { CrossIcon } from "../../assets/icons/icons";
import { addNewEventAPI } from "../../apis/EventsPlanning/EventAPI";
import moment from "moment";

const validationSchema = yup.object({
  title: yup.string().required("Task is required"),
  description: yup.string().required("Description is required"),
});

function CalendarEventModal({ showModal, setEvents, formData }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        const newEvent = {
            start: moment(formData.start, 'ddd MMM D YYYY HH:mm:ss ZZ').valueOf()/1000,
            end: moment(formData.end, 'ddd MMM D YYYY HH:mm:ss ZZ').valueOf()/1000,
            title: values.title,
            description: values.description,
            createdAt: moment().valueOf()/1000,
        }
        await addNewEventAPI(newEvent);
        setEvents((prevEvents) => [...prevEvents, newEvent])
        showModal(false)
    },
  });
  return (
    <Modal showModal={showModal}>
      <Formik enableReinitialize={true} onSubmit>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-between overflow-y-scroll no-scrollbar gap-4 p-[25px] border border-black dark:bg-secondary bg-lightSecondary focus:outline-none rounded-10 sm:min-w-[600px]">
            <div className="flex justify-between">
              <p className="text-20-600 dark:text-textSecondary text-textDark">
                Schedule your Task
              </p>
              <div className="cursor-pointer" onClick={() => showModal(false)}>
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
                  name="title"
                  placeholder="Meditation"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.title && formik.touched.title ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.title}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className="dark:text-textQuad text-textGreyLight text-12-500">
                Write project description
              </label>
              <div className="relative dark:text-textSecondary text-textDark">
                <textarea
                  type="text"
                  className="block w-full p-4 appearance-none text-12-500 focus:outline-none rounded-10 dark:bg-primary bg-lightPrimary"
                  name="description"
                  placeholder="Build UI for onboarding flow"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.description && formik.touched.description ? (
                <p className="text-red-600 text-12-500 ">
                  {formik.errors.description}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
              <button
                className={`text-14-600 py-4 px-[30px] flex gap-[5px] dark:bg-tertiary hover:bg-lightGreyHover bg-lightGrey dark:text-textSecondary text-textDark rounded-10  justify-center items-center min-w-[203px]`}
                type="button"
              >
                <p>Cancel</p>
              </button>

              <button
                className={`text-14-600 py-4 px-[30px] flex gap-[5px] hover:bg-themeHover bg-theme rounded-10 dark:text-primary text-lightPrimary justify-center items-center min-w-[203px]`}
                type="submit"
              >
                <p>Schedule</p>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}

export default CalendarEventModal;
