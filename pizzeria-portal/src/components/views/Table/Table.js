import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Table.module.scss';

const Table = () => (
  <div className={styles.component}>
    <h2>Table view</h2>
    <Link to={`/table/booking-new`}>New booking</Link>
    <Link to={`/table/booking/123`}>Booking ID</Link>
    <Link to={`/table/event-new`}>New event</Link>
    <Link to={`/table/event/123`}>Event ID</Link>
  </div>
);

export default Table;