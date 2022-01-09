import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Booking from './components/views/Booking/Booking';
import BookingNew from './components/views/BookingNew/BookingNew';
import Bookings from './components/views/Bookings/Bookings';
import Event from './components/views/Event/Event';
import EventNew from './components/views/EventNew/EventNew';
import Dashboard from './components/views/Home/Home';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Order from './components/views/Order/Order';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/OrderNew/OrderNew';

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <MainLayout>
        <Routes>
          <Route exact path={`/`} element={<Dashboard />}></Route>
          <Route path={`/bookings`} element={<Bookings />}></Route>
          <Route path={`/bookings/booking-new`} element={<BookingNew />}></Route>
          <Route path={`/bookings/booking/:id`} element={<Booking />}></Route>
          <Route path={`/bookings/event-new`} element={<EventNew />}></Route>
          <Route path={`/bookings/event/:id`} element={<Event />}></Route>
          <Route path={`/ordering`} element={<Ordering />}></Route>
          <Route path={`/ordering/order-new`} element={<OrderNew />}></Route>
          <Route path={`/ordering/order/:id`} element={<Order />}></Route>
          <Route path={`/kitchen`} element={<Kitchen />}></Route>
          <Route path={`/login`} element={<Login />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
