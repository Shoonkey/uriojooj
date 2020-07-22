import React from 'react';

import Navbar from '../../components/Navbar';
import ProblemExplorer from '../../components/ProblemExplorer';
import { Container } from './styles';

function Problems() {
  return (
    <Container>
      <Navbar />
      <main>
        <h1 className="title">Problems</h1>
        <ProblemExplorer />
      </main>
    </Container>
  );
}

export default Problems;