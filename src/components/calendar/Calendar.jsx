import React from 'react';
import Iframe from 'iframe';

const Calendar = () => {
    const url ="https://calendar.google.com/calendar/embed?src=c_s74qeb6cisg6ms54ubejihdu7s%40group.calendar.google.com&ctz=Asia%2FHo_Chi_Minh"
  return <div>
      <iframe url={url} ></iframe>
  </div>;
};

export default Calendar;
