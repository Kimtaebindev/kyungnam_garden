import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';
import MainPage from 'components/pages/MainPage';
import GardenInfo from 'components/pages/GardenInfo';
import GardenList from 'components/pages/GardenList';
import GardenNews from 'components/pages/GardenNews';
import ReservationCheck from 'components/pages/ReservationCheck';
import ReservationList from 'components/pages/ReservationList';
import SearchGarden from 'components/pages/SearchGarden';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gardeninfo" element={<GardenInfo />} />
          <Route path="/searchgarden" element={<SearchGarden />} />
          <Route path="/gardenlist" element={<GardenList />} />
          <Route path="/gardennews" element={<GardenNews />} />
          <Route path="/reservationcheck" element={<ReservationCheck />} />
          <Route path="/reservationlist" element={<ReservationList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
