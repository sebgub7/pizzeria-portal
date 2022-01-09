import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Bookings.module.scss';

const Bookings = () => (
  <div className={styles.component}>
    <h2>Bookings view</h2>
    <Link to={`/bookings/booking-new`}>New booking</Link>
    <Link to={`/bookings/booking/:id`}>Booking abc</Link>
    <Link to={`/bookings/event-new`}>New event</Link>
    <Link to={`/bookings/event/:id`}>Event abc</Link>
  </div>
);

export default Bookings;