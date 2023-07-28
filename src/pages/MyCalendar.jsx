import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Layout from "../layout/Layout";
import CalendarEventModal from "../components/modal/CalendarEventModal";
import { getAllEventsAPI } from "../apis/EventsPlanning/EventAPI";
import { useSelector } from "react-redux";

function MyCalendar() {
  const accessToken = useSelector((state) => state.accessToken.token);
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [calendarModal, setCalendarModal] = useState(false);
  const [formData, setFormData] = useState({
    start: null,
    end: null,
    title: "",
    description: "",
  });

  useEffect(() => {
    async function fetchEvents() {
      const result = await getAllEventsAPI(accessToken);
      if (result?.status === 200) {
        let apiData = result?.data.map((event) => ({
          ...event,
          start: new Date(event?.start * 1000),
          end: new Date(event?.end * 1000),
          createdAt: new Date(event?.createdAt * 1000),
        }));
        setEvents(apiData);
      }
    }
    fetchEvents();
  }, [calendarModal, accessToken]);

  const handleSelect = ({ start, end }) => {
    setFormData({ start, end, title: "", description: "" });
    setCalendarModal(true);
  };

  return (
    <>
      <Layout>
        <div className="xl:mt-4 sm:mt-24 mt-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectSlot={handleSelect}
            selectable
            style={{ height: 500, color: "black" }}
          />
        </div>
      </Layout>
      {calendarModal && (
        <CalendarEventModal
          showModal={setCalendarModal}
          setEvents={setEvents}
          formData={formData}
        />
      )}
    </>
  );
}

export default MyCalendar;
