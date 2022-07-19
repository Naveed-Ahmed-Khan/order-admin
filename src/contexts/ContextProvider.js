// import { collection, doc, query, updateDoc, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useAuth } from "./AuthContext";
/* import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../api/firebase-config";
import useAppointments from "../hooks/useAppointments";
import useFetch from "../hooks/useFetch"; */

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: usersData } = useFetch("users", check);
  const { data: placesData } = useFetch("places", check);
  const { data: subscriptionData } = useFetch("subscriptions", check);

  const [showDetails, setShowDetails] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const filterUsers = () => {
      setCustomers(usersData.filter((user) => user.type === "customer"));
    };
    const filterBusinesses = () => {
      setBusinesses(usersData.filter((user) => user.type === "business"));
    };
    setSubscriptions(subscriptionData);
    filterUsers();
    filterBusinesses();
  }, [usersData, subscriptionData]);

  useEffect(() => {
    const setPlacesData = () => {
      if (currentUser?.email === "admin@gmail.com") {
        setLocations(placesData);
      } else {
        setLocations(
          placesData.filter((place) => place.businessId === currentUser?.uid)
        );
      }
    };

    setPlacesData();
  }, [currentUser?.email, currentUser?.uid, placesData]);

  console.log(locations);

  const updateCheck = () => {
    setCheck(!check);
  };
  const updateShowDetails = (value) => {
    setShowDetails(value);
  };
  const updateSelectedPlace = (value) => {
    setSelectedPlace(value);
  };

  console.log(customers);
  console.log(businesses);
  console.log(locations);

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
    subscriptions,
    showDetails,
    updateShowDetails,
    customers,
    businesses,
    locations,
    events,
    updateCheck,
    selectedPlace,
    updateSelectedPlace,

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
