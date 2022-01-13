import React from 'react';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const PageNav = () => (
  <div className ={styles.component}>
    <Button className={styles.link} component={NavLink} exact to={`/`} activeClassName={'active'}>Home</Button>
    <Button className={styles.link} component={NavLink} to={`/waiter`} activeClassName={'active'}>Waiter</Button>
    <Button className={styles.link} component={NavLink} to={`/table`} activeClassName={'active'}>Table</Button>
    <Button className={styles.link} component={NavLink} to={`/kitchen`} activeClassName={'active'}>Kitchen</Button>
    <Button className={styles.link} component={NavLink} to={`/login`} activeClassName={'active'}>Login</Button>
  </div>
);

console.log(process.env.PUBLIC_URL);

export default PageNav;