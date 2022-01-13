import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Table.module.scss';

const tableContent = [
  {
    hour: '12:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '123'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '12:30',
    tables: [
      {table: 1, status: 'booked', bookingId: '123'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '13:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '123'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '13:30',
    tables: [
      {table: 1, status: 'booked', bookingId: '123'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'booked', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '14:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '123'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'booked', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '14:30',
    tables: [
      {table: 1, status: 'booked', bookingId: '123'},
      {table: 2, status: 'booked', bookingId: '321'},
      {table: 3, status: 'booked', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
];

const renderActions = (status, table) => {
  switch (status) {
    case 'booked':
      return (
        <Button to={`/table/booking/${table.bookingId}`} component={NavLink}>{table.bookingId}</Button>  
      );
    case 'free':
      return (
        <Button className={styles.free} to={`/table/booking-new`} component={NavLink}>Free</Button>
      );
    case 'event':
      return (
        <Button to={`/table/event/${table.status}`} component={NavLink}>Event {table.status}</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableContent.map((row) => {
          return (
            <TableRow key={row.hour}>
              <TableCell className={styles.hour}>{row.hour}</TableCell> 
              {row.tables.map((table) => {
                return(
                  <TableCell className={styles.book} key={table.id}>
                    {renderActions(table.status, table)}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;