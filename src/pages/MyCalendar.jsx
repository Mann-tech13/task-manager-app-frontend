import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Layout from "../layout/Layout";
import CalendarEventModal from "../components/modal/CalendarEventModal";

function MyCalendar() {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [calendarModal, setCalendarModal] = useState(false);
  const [formData, setFormData] = useState({
    start: null,
    end: null,
    title: "",
    description: "",
  });

  const handleSelect = ({ start, end }) => {
    // Open the modal to schedule a task when the user selects a time slot
    // The "start" and "end" parameters contain the selected time range
    // You can use them to set the initial values of the scheduling form
    setFormData({ start, end, title: "", description: ""})
    setCalendarModal(true);
  };

  // const handleEventResize = (event) => {
  //   // Handle event resizing (if required)
  // };

  // const handleEventDrop = ({ event, start, end }) => {
  //   // Handle event dragging (if required)
  // };

  return (
    <>
      <Layout>
        <div className="mt-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelect}
          // onEventResize={handleEventResize}
          // onEventDrop={handleEventDrop}
          selectable
          style={{ height: 500, color: "black" }}
        /></div>
      </Layout>
      {
        calendarModal && <CalendarEventModal showModal={setCalendarModal} setEvents={setEvents} formData={formData}/>
      }
    </>
  );
}

export default MyCalendar;
