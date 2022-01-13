import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Booking from './components/views/Booking/Booking';
import BookingNew from './components/views/BookingNew/BookingNew';
import Table from './components/views/Table/Table';
import Event from './components/views/Event/Event';
import EventNew from './components/views/EventNew/EventNew';
import Dashboard from './components/views/Home/Home';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';
import { StylesProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Routes>
              <Route exact path={`/`} element={<Dashboard />}></Route>
              <Route path={`/table`} element={<Table />}></Route>
              <Route path={`/table/booking-new`} element={<BookingNew />}></Route>
              <Route path={`/table/booking/:id`} element={<Booking />}></Route>
              <Route path={`/table/event-new`} element={<EventNew />}></Route>
              <Route path={`/table/event/:id`} element={<Event />}></Route>
              <Route path={`/kitchen`} element={<Kitchen />}></Route>
              <Route path={`/login`} element={<Login />}></Route>
              <Route path={`/waiter`} element={<Waiter />}></Route>
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
