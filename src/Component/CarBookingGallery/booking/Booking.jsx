import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Booking.css';
import hilux from '../../../assets/cars/2015_hilux.jpg';
import locationIcon from '../../../assets/location-dot-solid.svg';
import { useSelector } from 'react-redux';

function Booking({displayBooking,setDisplayBooking}) {
    const selectedCar = useSelector((state) => state.selectedCar);

    const display = useRef(null);
    const closeDisplay = (e) =>{
        if(e.target === display.current){
            setDisplayBooking(false)
        }
    }

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [totalDays, setTotalDays] = useState(0);

  const [roomData, setRoomData] = useState([]);

  const formatDate = (date) => {
    if (!date) {
      return '';
    }
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    if (selectedDates.startDate && selectedDates.endDate) {
      const timeDifference = selectedDates.endDate.getTime() - selectedDates.startDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1; // Add 1 to include both start and end dates
      setTotalDays(daysDifference);
    } else if (selectedDates.startDate && !selectedDates.endDate) {
      setTotalDays(1); // If only start date is selected, consider it 1 day
    } else {
      setTotalDays(0);
    }
  }, [selectedDates.startDate, selectedDates.endDate]);

  const isPastDate = (day, monthOffset) => {
    const dateToCheck = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  const handleDateClick = (day, monthOffset = 0) => {
    if (isPastDate(day, monthOffset)) {
      return; // Do nothing if the date is in the past
    }

    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );

    if (!selectedDates.startDate || selectedDates.endDate) {
      // If no dates are selected or both are already set, reset to a single date
      setSelectedDates({ startDate: selectedDate, endDate: null });
    } else if (selectedDate.getTime() === selectedDates.startDate.getTime()) {
      // If clicking the same date again, treat as a single-day selection
      setSelectedDates({ startDate: selectedDate, endDate: selectedDate });
    } else {
      // Set the endDate if selecting a valid range
      if (selectedDate > selectedDates.startDate) {
        setSelectedDates({ ...selectedDates, endDate: selectedDate });
      } else {
        setSelectedDates({
          startDate: selectedDate,
          endDate: selectedDates.startDate,
        });
      }
    }

    setError(''); // Clear any error message on date selection
  };

  const handleMonthChange = (increment) => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + increment)
    );
    setCurrentDate(new Date(newDate));
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const startOfMonth = new Date(year, month, 1).getDay();
    const daysInPreviousMonth = new Date(year, month, 0).getDate();

    const days = [];

    // Add previous month days
    for (let i = startOfMonth - 1; i >= 0; i--) {
      days.push({ day: daysInPreviousMonth - i, monthOffset: -1 });
    }

    // Add current month days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({ day: i, monthOffset: 0 });
    }

    // Add next month days
    const remainingSlots = 42 - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({ day: i, monthOffset: 1 });
    }

    return days;
  };

  const isDateSelected = (day, monthOffset) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );

    return (
      // Check if startDate != null && is the tile, the startDate?
      (selectedDates.startDate &&
        selectedDates.startDate.getTime() === date.getTime()) ||
      // Check if endDate != null && is the tile, the endDate?
      (selectedDates.endDate && selectedDates.endDate.getTime() === date.getTime()) ||
      // Check if startDate && endDate != null && is the tile between the two?
      (selectedDates.startDate &&
        selectedDates.endDate &&
        date >= selectedDates.startDate &&
        date <= selectedDates.endDate)
    );
  };

  const days = generateCalendarDays();

  const handleBookRoomsClick = () => {
    if (!selectedDates.startDate) {
      alert('Please select a date.');
      return;
    }
    // Proceed with booking logic here
    console.log('Booking initiated with selected dates:', selectedDates);
  };

  return (
    <div className={`booking ${displayBooking ? '':'hide'}`} ref={display} onClick={closeDisplay}>
      <div className="booking-card">
        <div className="card-box">
         
          {/* <img className="car-image" src={hilux} alt="" />
          <div className="car-details">
            <p>
              N2000/Daily{' '}
              <span>
                <img className="location-icon" src={locationIcon} alt="" />
                Awka
              </span>{' '}
            </p>
            <p>Helux</p>
            <div className="car-date-range">
              <p>
                {selectedDates.startDate ? formatDate(selectedDates.startDate) : 'Select Date'}
                {selectedDates.endDate && ` to ${formatDate(selectedDates.endDate)}`}
                {totalDays > 0 && ` (${totalDays} day${totalDays > 1 ? 's' : ''}) N${totalDays * 2000}`}
              </p>
            </div>
          </div> */}

            {selectedCar && (
            <>
              <img className="car-image" src={selectedCar.img || hilux} alt={selectedCar.title || 'Car'} />
              <div className="car-details">
                <p>
                  {selectedCar.price || 'N/A'}/Daily{' '}
                  <span>
                    <img className="location-icon" src={locationIcon} alt="" />
                    {selectedCar.location || 'N/A'}
                  </span>{' '}
                </p>
                <p>{selectedCar.title || 'Car Details'}</p>
                <div className="car-date-range">
                  <p>
                    {selectedDates.startDate ? formatDate(selectedDates.startDate) : 'Select Date'}
                    {selectedDates.endDate && ` to ${formatDate(selectedDates.endDate)}`}
                    {totalDays > 0 && ` (${totalDays} day${totalDays > 1 ? 's' : ''}) N${totalDays * 2000}`}
                  </p>
                </div>
              </div>
            </>
            )}
            {!selectedCar && (
                <div className="car-details">
                <p>No car selected yet.</p>
                </div>
            )}



        </div>

        <div className="calendar-header">
          <button className="date-switcher" onClick={() => handleMonthChange(-1)}>
            <FaArrowLeft></FaArrowLeft>{' '}
          </button>
          <h2>
            {currentDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <button className="date-switcher" onClick={() => handleMonthChange(1)}>
            <FaArrowRight></FaArrowRight>
          </button>
        </div>

        <div className="calendar-days">
          {days.map(({ day, monthOffset }, index) => (
            <div
              key={index}
              className={`calendar-day ${
                isDateSelected(day, monthOffset) ? 'selected' : ''
              } ${monthOffset !== 0 ? 'overflow' : ''} ${
                isPastDate(day, monthOffset) ? 'disabled' : ''
              }`}
              onClick={() => handleDateClick(day, monthOffset)}
            >
              {day}
            </div>
          ))}
        </div>

        <button
          className="book-rooms-button"
          onClick={handleBookRoomsClick}
        >
          Book Rooms
        </button>
      </div>
    </div>
  );
}

export default Booking;