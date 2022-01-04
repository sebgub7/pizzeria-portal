import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ordering.module.scss';

const Ordering = ({id}) => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Link to={`/ordering/order-new`} activeClassName={'active'}>New order</Link>
    <Link to={`/ordering/order/id`} activeClassName={'active'}>Order id</Link>
  </div>
);

Ordering.propTypes ={
  id: PropTypes.string,
};



export default Ordering;