import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ordering.module.scss';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Link to={`/ordering/order-new`}>New order</Link>
    <Link to={`/ordering/order/123`}>Order id</Link>
  </div>
);

export default Ordering;