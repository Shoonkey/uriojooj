import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { formatDistanceToNowStrict } from 'date-fns';

import Navbar from '../../components/Navbar';
import CircularProgress from '../../components/CircularProgress';
import Spinner from '../../components/Spinner';
import { UserContext } from '../../components/UserProvider';
import { getDashboardData } from '../../services/api';
import { Container } from './styles';

function Dashboard() {
  
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!user) return;

    getDashboardData(user.id)
      .then(res => res.data)
      .then(setData)
      .catch(console.error);

  }, []);

  if (!user)
    return <Redirect to="/auth" />;

  return (
    <Container>
      <Navbar />
      <main className="content">
        <h1 className="title">Dashboard</h1>
        <div className="dashboard-data">
          <div className="circular-progress-container general-info">
          { data ? <CircularProgress progress={data.progress} /> : <Spinner /> }
          <p className="label">Progress</p>
          </div>
          <div className="info-container">
            <div className="general-info">
              <p className="label">Points</p>
              { data ? <p className="info">{data.points}</p> : <Spinner /> }
            </div>
            <div className="general-info">
              <p className="label">Solved</p>
              { data ? <p className="info">{data.solved}</p> : <Spinner /> }
            </div>
            <div className="general-info">
              <p className="label">Been around for</p>
              { 
                data ? (
                  <p className="info">
                    {formatDistanceToNowStrict(new Date(data.creationDate))}
                  </p>
                ) : <Spinner /> 
              }
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Dashboard;