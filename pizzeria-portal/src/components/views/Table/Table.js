import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Table.module.scss';

const Table = () => (
  <div className={styles.component}>
    <h2>Table view</h2>
    <Link to={`/table/booking-new`}>New booking</Link>
    <Link to={`/table/booking/:id`}>Booking ID</Link>
    <Link to={`/table/event-new`}>New event</Link>
    <Link to={`/table/event/:id`}>Event ID</Link>
  </div>
);

export default Table;