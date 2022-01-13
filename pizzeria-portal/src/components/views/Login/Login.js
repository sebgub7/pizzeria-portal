import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>

    <TextField
      className={styles.login}
      required
      id="outlined-login-input"
      label="Login"
    />
    <TextField
      className={styles.password}
      required
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    />
    <Button to={'/'} component={NavLink} variant="contained" className={styles.button}>
      Login
    </Button>

  </div>
);

export default Login;