import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axiosInstance from "@utils/axios";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
} from "date-fns";
import {
  Calendar,
  Container,
  Day,
  DayHeader,
  Header,
  ScheduleList,
  Dot,
  Loading,
  ErrorMessage,
  ModalContent,
  ModalOverlay,
} from "./Schedules.styles";
import { FaTrash } from "react-icons/fa";

const Schedules = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const doctorId = useSelector((state) => state.auth.user?.id);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [schedules, setSchedules] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    startTime: "",
    endTime: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [scheduleToDelete, setScheduleToDelete] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (doctorId) {
      fetchSchedules();
    }
  }, [currentMonth, doctorId]);

  const fetchSchedules = async () => {
    setLoading(true);
    setError(null);
    try {
      const month = format(currentMonth, "MM");
      const year = format(currentMonth, "yyyy");

      const response = await axiosInstance.get(
        `/auth/doctor/schedule/${doctorId}?month=${month}&year=${year}`
      );
      setSchedules(response.data.schedules || []);
    } catch (error) {
      setError("Failed to load schedules. Please try again.");
      console.error("Error fetching schedules:", error);
      Swal.fire("Error", "Failed to load schedules!", "error");
    } finally {
      setLoading(false);
    }
  };

  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, "0");
      times.push(`${formattedHour}:00`);
      times.push(`${formattedHour}:30`);
    }
    times[times.length - 1] = "23:30";
    times.push("00:00");
    return times;
  };

  const timeSlots = generateTimeSlots();

  const handleAddSchedule = async () => {
    if (!newSchedule.startTime || !newSchedule.endTime) return;

    try {
      await axiosInstance.post(`/auth/doctor/schedule/${doctorId}`, {
        date: format(selectedDate, "yyyy-MM-dd"),
        startTime: newSchedule.startTime,
        endTime: newSchedule.endTime,
      });

      setSchedules([
        ...schedules,
        {
          date: format(selectedDate, "yyyy-MM-dd"),
          startTime: newSchedule.startTime,
          endTime: newSchedule.endTime,
        },
      ]);

      setShowModal(false);
      setNewSchedule({ startTime: "", endTime: "" });
      Swal.fire("Success", "Schedule added successfully!", "success");
    } catch (error) {
      setNewSchedule({ startTime: "", endTime: "" });
      setShowModal(false);
      if (error.response?.data?.message === "Time slot already booked") {
        Swal.fire(
          "Error",
          "This time slot is already booked. Please select a different time.",
          "error"
        );
      } else {
        Swal.fire(
          "Error",
          "Failed to add schedule! Please try again.",
          "error"
        );
      }
    }
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const firstDayOfMonth = startOfMonth(currentMonth);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const adjustedFirstDay = firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;

  const hasSchedule = (date) =>
    schedules.some((schedule) => schedule.date === format(date, "yyyy-MM-dd"));

  const confirmDeleteSchedule = (scheduleId) => {
    setScheduleToDelete(scheduleId);
    setShowDeleteModal(true);
  };

  const handleDeleteSchedule = async () => {
    if (!scheduleToDelete) return;

    try {
      await axiosInstance.delete(`/auth/doctor/schedule/${scheduleToDelete}`);

      setSchedules(
        schedules.filter((schedule) => schedule._id !== scheduleToDelete)
      );
      setShowDeleteModal(false);
      setScheduleToDelete(null);
      Swal.fire("Deleted", "Schedule deleted successfully!", "success");
    } catch (error) {
      console.error("Error deleting schedule:", error);
      Swal.fire("Error", "Failed to delete schedule!", "error");
    }
  };

  return (
    <Container>
      <Header>
        <button
          onClick={() => {
            setSelectedDate(null);
            setCurrentMonth(subMonths(currentMonth, 1));
          }}
        >
          Prev
        </button>
        <h2>{format(currentMonth, "MMMM yyyy")}</h2>
        <button
          onClick={() => {
            setSelectedDate(null);
            setCurrentMonth(addMonths(currentMonth, 1));
          }}
        >
          Next
        </button>
      </Header>

      {loading && <Loading>Loading schedules...</Loading>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && (
        <>
          <Calendar>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <DayHeader key={day}>{day}</DayHeader>
            ))}
            {Array.from({ length: adjustedFirstDay }, (_, index) => (
              <Day key={`empty-${index}`} style={{ visibility: "hidden" }} />
            ))}
            {daysInMonth.map((day, index) => (
              <Day
                key={index}
                isSelected={
                  selectedDate &&
                  format(selectedDate, "yyyy-MM-dd") ===
                    format(day, "yyyy-MM-dd")
                }
                onClick={() => {
                  setSelectedDate(day);
                }}
              >
                {format(day, "d")}
                <Dot
                  onClick={() => {
                    if (day > new Date().setHours(0, 0, 0, 0)) {
                      setShowModal(true);
                    }
                  }}
                  hasSchedule={hasSchedule(day)}
                >
                  {hasSchedule(day) ? "Add More Slots" : "Add Slots"}
                </Dot>
              </Day>
            ))}
          </Calendar>

          {selectedDate && (
            <ScheduleList>
              <h3>Schedules on {format(selectedDate, "yyyy-MM-dd")}</h3>
              {schedules
                .filter(
                  (sch) => sch.date === format(selectedDate, "yyyy-MM-dd")
                )
                .map((sch, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p>
                      {sch.startTime} - {sch.endTime}
                    </p>
                    <FaTrash
                      onClick={() => confirmDeleteSchedule(sch._id)}
                      style={{ cursor: "pointer", color: "#ef4444" }}
                    />
                  </div>
                ))}
            </ScheduleList>
          )}
        </>
      )}

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Add Schedule</h2>
            <div className="form-group">
              <div className="select-wrapper">
                <label>Start Time</label>
                <select
                  className="custom-select"
                  value={newSchedule.startTime}
                  onChange={(e) =>
                    setNewSchedule({
                      ...newSchedule,
                      startTime: e.target.value,
                      endTime: timeSlots[timeSlots.indexOf(e.target.value) + 1],
                    })
                  }
                >
                  {timeSlots.slice(0, -1).map((time, index) => (
                    <option key={index} value={time} style={{ padding: "8px" }}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>End Time</label>
                <input
                  type="text"
                  value={newSchedule.endTime}
                  disabled
                  style={{ textAlign: "center" }}
                />
              </div>
            </div>
            <span>
              <button onClick={handleAddSchedule}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </span>
          </ModalContent>
        </ModalOverlay>
      )}

      {showDeleteModal && (
        <ModalOverlay onClick={() => setShowDeleteModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Are you sure?</h2>
            <p>Do you really want to delete this schedule?</p>
            <span>
              <button onClick={handleDeleteSchedule}>Yes, Delete</button>
              <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </span>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Schedules;
