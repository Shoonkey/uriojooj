import React from 'react';

import Navbar from '../../components/Navbar';
import CircularProgress from '../../components/CircularProgress';
import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <Navbar />
      <main className="content">
        <h1 className="title">Dashboard</h1>
        <div className="dashboard-data">
          <div className="circular-progress-container general-info">
            <CircularProgress progress={65.23} />
            <p className="label">Progress</p>
          </div>
          <div className="info-container">
            <div className="general-info">
              <p className="label">Points</p>
              <p className="info">{1490.39}</p>
            </div>
            <div className="general-info">
              <p className="label">Solved</p>
              <p className="info">{377}</p>
            </div>
            <div className="general-info">
              <p className="label">Day</p>
              <p className="info">{1862}</p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Dashboard;