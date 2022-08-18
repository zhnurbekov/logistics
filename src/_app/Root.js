import React from 'react';
import { Route, Routes } from 'react-router';
import SideBar from '../common/SideBar/SideBar';
import routerProps from '../_helpers/routerProps';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

export default function Root() {
  return (
    <>
      <div className="fullWidth flex" style={{ minHeight: '100vh' }}>
        <div>
          <SideBar />
        </div>
        <div className="main-container">
          <div className="content-body">
            <Header />
            <Routes>
              <Route {...routerProps.cargo} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
