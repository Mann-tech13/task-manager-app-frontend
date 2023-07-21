import React from "react";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Layout from "../layout/Layout";

function MyCalendar() {
  const localizer = momentLocalizer(moment);

  return (
    <Layout>
      <Calendar
        localizer={localizer}
        events={[]} // Initialize with an empty array; we'll update it with tasks later
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color: "black" }}
      />
    </Layout>
  );
}

export default MyCalendar;
