import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/bookings`} component={Bookings}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/bookings/booking-new`} component={BookingNew}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/bookings/booking/:id`} component={Booking}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/bookings/event-new`} component={EventNew}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/bookings/event/:id`} component={Event}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ordering/order-new`} component={OrderNew}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}></Route>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
