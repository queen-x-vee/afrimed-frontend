import React, { useState } from "react";
import Forward from "../assests/doctors-dashboard-assets/calenderForward.svg";
import Backward from "../assests/doctors-dashboard-assets/calenderBack.svg";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const renderCalendar = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const calendarDays = [];

    // Push empty slots for the days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="day"></div>);
    }

    // Push days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(
        <div
          key={`day-${i}`}
          className={`day ${
            i === currentDate.getDate() ? " bg-[#FF0000] my-3" : "my-3"
          } ${
            selectedDate && selectedDate.getDate() === i ? "bg-gray-300" : ""
          }`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }
    const handleDayClick = (day) => {
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      setSelectedDate(newDate);
    };

    const prevMonth = () => {
      setCurrentDate(
        (prevDate) =>
          new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
      );
    };

    const nextMonth = () => {
      setCurrentDate(
        (prevDate) =>
          new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
      );
    };

    return (
      <div className="calendar">
        <div className="flex justify-between items-center border-b my-6 border-b-[#D2D2D2]">
          <div className="header text-center font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div>
            <button
              className="mx-2 px-3 py-1  rounded"
              onClick={prevMonth}
            >
              <img src={Backward} alt="backward" />
            </button>
            <button
              className="px-3 py-1  rounded"
              onClick={nextMonth}
            >
              <img src={Forward} alt="forward" />
            </button>
          </div>
        </div>
        <div className="days grid grid-cols-7 m-4 text-center">
          {daysOfWeek.map((day) => (
            <div key={day} className="day my-4">
              {day}
            </div>
          ))}
          {calendarDays}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderCalendar()}
      {selectedDate && (
        <div className="text-center ">
          Selected Date: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
}

export default Calendar;
