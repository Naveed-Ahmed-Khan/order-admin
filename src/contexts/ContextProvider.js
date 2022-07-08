// import { collection, doc, query, updateDoc, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
/* import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../api/firebase-config";
import useAppointments from "../hooks/useAppointments";
import useFetch from "../hooks/useFetch"; */

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: customersData } = useFetch("customers", check);
  const { data: businessesData } = useFetch("businesses", check);
  const { data: eventsData } = useFetch("events", check);
  const { data: locationsData } = useFetch("locations", check);

  const [showDetails, setShowDetails] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const initialize = () => {
      // setLoading(true)
      setCustomers(customersData);
      setBusinesses(businessesData);
      setLocations(locationsData);
      setEvents(eventsData);
      // setLoading(false);
    };
    initialize();
  }, [customersData, businessesData, locationsData, eventsData]);

  console.log(customers);

  const updateCheck = () => {
    setCheck(!check);
  };
  const updateShowDetails = (value) => {
    setShowDetails(value);
  };

  // console.log(customers);

  /* const { data: usersData } = useFetch("Users", check);
  const { data: availabilityData } = useFetch("weekstatus", check);
  const { appointmentData } = useAppointments(check);

  const q2 = query(
    collection(db, "messages"),
    where("recieverId", "==", "admin"),
    where("isRead", "==", false)
  );

  const [unRead] = useCollectionData(q2, { idField: "id" });

  console.log(appointmentData);

  const updateUnReadMessages = (unRead) => {
    setUnReadMessages(unRead);
  };


  const updateUsers = (data) => {
    setUsers(data);
  };

  const updateAppointments = (id, approved) => {
    console.log(id + " " + approved);
    appointments.forEach((appointment) => {
      if (appointment.id === id) {
        console.log(appointment);
        appointment.isApproved = approved;
      }
    });
    console.log(appointments);
    setAppointments(appointments);
  };
  const updateAvailability = (id, start, end) => {
    console.log(start + " " + end);
    availability.forEach((avail) => {
      if (avail.id === id) {
        console.log(avail);
        avail.bookingStart = start;
        avail.bookingEnd = end;
      }
    });
    console.log(availability);
    setAvailability(availability);
  };
  const updateOffday = (id, offday) => {
    console.log(offday);
    availability.forEach((avail) => {
      if (avail.id === id) {
        console.log(avail);
        avail.isOffday = offday;
      }
    });
    console.log(availability);
    setAvailability(availability);
  };

  useEffect(() => {
    updateUnReadMessages(unRead?.length);
  }, [unRead]);

  useEffect(() => {
    const initialize = () => {
      setUsers(usersData);
      setAppointments(appointmentData);
      setAvailability(availabilityData);
    };
    initialize();
    // setIsLoading(false);
  }, [appointmentData, usersData, availabilityData]);

  const confirmAppointment = (selectedAppointment) => {
    console.log(selectedAppointment);
    availability.forEach((avail) => {
      // console.log(selectedAppointment.Date.toDate().toDateString());
      if (
        selectedAppointment.Date.toDate().toDateString() ===
        avail.date.toDate().toDateString()
      ) {
        console.log(avail.date.toDate().toDateString());
        avail.slots.forEach(async (slot) => {
          let filteredSlots = [];
          if (selectedAppointment.slotId === slot.id) {
            console.log(avail.slots);
            console.log(selectedAppointment.slotId);
            filteredSlots = avail?.slots?.filter(
              (slot) => selectedAppointment.slotId !== slot.id
            );
            console.log(filteredSlots);
            await updateDoc(doc(collection(db, "weekstatus"), avail.id), {
              slots: filteredSlots,
            });
          }
        });
      }
    });
  };
 */

  const exportValues = {
    loading,
    showDetails,
    updateShowDetails,
    customers,
    businesses,
    locations,
    events,
    updateCheck,

    /* currentUser,
    users,
    appointments,
    availability,
    unReadMessages,
    setCurrentUser,
    updateAppointments,
    updateAvailability,
    updateOffday,
    updateUsers,
    updateUnReadMessages,
    confirmAppointment, */
  };

  return (
    <StateContext.Provider value={exportValues}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
