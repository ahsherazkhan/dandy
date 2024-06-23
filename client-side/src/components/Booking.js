import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CREATE_BOOKING } from "../gqloperations/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_BOOKINGS } from "../gqloperations/queries";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Booking = ({ isPropTrue }) => {
  const [bookingDetails, setBookingDetails] = useState({
    selectedDate: new Date(),
    selectedTime: "",
    selectedField: "",
    selectedState: "",
    selectedModel: "",
  });
  const handleDateChange = (date) => {
    setBookingDetails((prevState) => ({
      ...prevState,
      selectedDate: date,
    }));
    setCurrentMonth(date.getMonth());
  };
  const [bookedSlots, setBookedSlots] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const [createBooking, { loading, error, data }] = useMutation(CREATE_BOOKING);
  const {
    loading: queryloading,
    error: queryerror,
    data: bookingdata,
  } = useQuery(GET_ALL_BOOKINGS);

  useEffect(() => {
    if (!queryloading && bookingdata && bookingdata.bookings) {
      setBookedSlots(bookingdata.bookings);
    }
  }, [queryloading, bookingdata]);

  const handleFieldChange = (fieldName, value) => {
    setBookingDetails((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleTimeChange = (time) => {
    setBookingDetails((prevState) => ({
      ...prevState,
      selectedTime: time,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { selectedDate, selectedTime, selectedField, selectedState, selectedModel } = bookingDetails;
  
    const year = selectedDate.getFullYear();
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
    const date = ('0' + selectedDate.getDate()).slice(-2);

    const dateOnly = `${year}-${month}-${date}`;
    console.log("dateOnlydateOnly", dateOnly);
    if (isPropTrue) {
      try {
        const response = await createBooking({
          variables: {
            selectedDate: dateOnly,
            selectedTime,
          },
        });
        window.alert("Booking has been created"); // log the response data
        console.log("response here..............",response.data);
      } catch (error) {
        console.error("Error creating booking:", error.message);
      }
    }  else {
      const dayOfWeek = selectedDate.toLocaleString("en-US", { weekday: "short" });
      const month = selectedDate.toLocaleString("en-US", { month: "short" });
      const dayOfMonth = selectedDate.getDate();
      const year = selectedDate.getFullYear();
  
      const selectedDateStr = `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
      const message = `Hi there! I want to get a quote for tinting services for my car model: ${selectedModel} ${
        selectedState === 'Old' ? `that have ${selectedState} tint` : ''
      } on ${selectedDateStr} at: ${selectedTime} of ${selectedField} brand`;
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = encodeURIComponent("+61455121312");
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.location.href = whatsappLink;
    }
  };
  
  function isTimeSlotBooked(time) {
    const selectedDateTime = new Date(bookingDetails.selectedDate);
    const currentDate = new Date();
  
    // Check if the selected date is today
    if (selectedDateTime.toDateString() === currentDate.toDateString()) {
      const [hour, minutePart] = time.split(":");
      const minute = minutePart.slice(0, 2);
      const isPM = time.includes("PM");
      let selectedTimeHour = parseInt(hour);
      if (isPM && selectedTimeHour !== 12) {
        selectedTimeHour += 12;
      } else if (!isPM && selectedTimeHour === 12) {
        selectedTimeHour = 0; // 12 AM case
      }
      const selectedTime = new Date(selectedDateTime);
      selectedTime.setHours(selectedTimeHour, minute, 0, 0);
  
      if (selectedTime <= currentDate) {
        return "past"; // Indicate that this time slot is in the past
      }
    }
  
    // Check if the time slot is already booked
    const isBooked = bookedSlots.some((booking) => {
      const bookingDate = new Date(booking.selectedDate);
      return (
        bookingDate.toLocaleDateString("en-US") === selectedDateTime.toLocaleDateString("en-US") &&
        booking.selectedTime === time
      );
    });
    return isBooked ? "booked" : "";
  }

  function isDateFullyBooked(date) {
    const dateBookings = bookedSlots.filter(
      (booking) =>
        new Date(booking.selectedDate).toLocaleDateString("en-US") ===
        date.toLocaleDateString("en-US")
    );
    return dateBookings.length >= 24;
  }

  function isDateDisabled(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  function tileDisabled({ date, view }) {
    if (view === "month") {
      return isDateFullyBooked(date) || isDateDisabled(date);
    }
  }

  function generateTimeSlots() {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      const hour12 = (hour % 12) || 12; // Convert to 12-hour format
      const meridiem = hour < 12 ? 'AM' : 'PM'; // Determine AM or PM
      const time = `${hour12.toString().padStart(2, "0")}:00 ${meridiem}`;
      slots.push(time);
    }
    return slots;
  }

  const timeSlots = generateTimeSlots();

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "100px",
        marginBottom : "100px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        color: isPropTrue ? "#fff" : "#000",
      }}
      id="bookings"
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "white" }}>
        Get a slot reserved
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "2px" }}>
          <label style={{ fontSize: "18px", marginBottom: "8px" }}>
            Select Date:
          </label>
          <Calendar
              onChange={handleDateChange}
              value={bookingDetails.selectedDate}
              tileDisabled={tileDisabled}
              minDetail="year"
              navigationLabel={({ date }) => (
                <div style={{ color: "black" }}>
                  {`${date.toLocaleString("default", {
                    month: "short",
                  })} ${date.getFullYear()}`}
                </div>
              )}
              prev2Label={null}
              nextLabel={null}
              style={{
                borderRadius: "4px",
                color: "red",
                backgroundColor: "red",
              }}
              calendarType="US"
              locale="en-US"
              tileClassName={({ date }) => {
                return isDateFullyBooked(date) || isDateDisabled(date)
                  ? "disabled"
                  : "";
              }}
            />
          <p>
            {bookingDetails.selectedDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div style={{ marginBottom: "2px" }}>
        <div style={{ marginBottom: "2px" }}>
        <select
          className="tagline"
          value={bookingDetails.selectedTime}
          onChange={(event) => handleTimeChange(event.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px", borderRadius: "4px", color: "white", marginBottom: "20px" }}
        >
          <option value="">Select Time</option>
          {timeSlots.map((time) => {
            const status = isTimeSlotBooked(time);
            const style = status === "past" 
              ? { color: "#cccccc" } 
              : status === "booked" 
              ? { color: "#ff0000" } 
              : {};
            return (
              <option
                key={time}
                value={time}
                disabled={status !== ""}
                style={style}
              >
                {time}
              </option>
            );
          })}
        </select>

        </div>
        <div style={{ marginBottom: "2px" }}>
          <select
            className="tagline"
            value={bookingDetails.selectedField}
            onChange={(event) => handleFieldChange('selectedField', event.target.value)}
            style={{ padding: "10px", fontSize: "16px", borderRadius: "4px", color: "white", marginBottom: "20px" }}
          >
            <option value="">Select Brand</option>
            <option value="Suntek">Carbon</option>
            <option value="3M">Ceramic</option>
          </select>
        </div>
        <div style={{ marginBottom: "2px" }}>
          <select
            className="tagline"
            value={bookingDetails.selectedState}
            onChange={(event) => handleFieldChange('selectedState', event.target.value)}
            style={{ padding: "10px", fontSize: "16px", borderRadius: "4px", color: "white", marginBottom: "20px" }}
          >
            <option value="">Any old tint?</option>
            <option value="Old">Yes</option>
            <option value="New">No</option>
          </select>
        </div>
          <input
            type="text"
            className="tagline"
            placeholder="Enter vehicle model"
            value={bookingDetails.selectedModel}
            onChange={(event) => handleFieldChange('selectedModel', event.target.value)}
            style={{ padding: "10px", fontSize: "16px", borderRadius: "4px", color: "white" }}
          />
        </div>
        <div>
          <button
          className="tagline"
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </div>
  );
};
