import React, { useState, useEffect } from 'react';
import './index.css';

function Day() {
  const [currentDay, setCurrentDay] = useState({})
  useEffect(() => {
    const date = getDate();
    setCurrentDay(date)
  }, []);

  function getDate() {
    const date = new Date();
    const days = [
      'Sunday', 'Monday', 
      'Tuesday', 'Wednesday', 
      'Thursday', 'Friday', 'Saturday'
    ];
    const months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const currentDate = {
      dayName,
      day: day >= 10 ? day : `0${day}`,
      month,
      year
    }

    return currentDate;
  }

  return (
    <div className="day">
      <h1>{currentDay.dayName}</h1>
      <span>{currentDay.month} {currentDay.day}, {currentDay.year}</span>
    </div>
  );
}

export default Day; 
