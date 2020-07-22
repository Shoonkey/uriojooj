import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Spinner from '../Spinner';
import Table from '../Table';
import { getProblems } from '../../services/api';
import { Container } from './styles';

function ProblemExplorer() {

  const [problems, setProblems] = useState(null);

  // Allowed keys for the object argument are `page` and `sort`
  const retrieveProblems = obj => {
    getProblems(obj || {})
      .then(res => res.data)
      .then(setProblems)
      .catch(console.error);
  }

  useEffect(retrieveProblems, []);

  let content;

  if (!problems)
    content = <Spinner size={120} />;
  else if (problems.length === 0)
    content = <p>There's no problem around here... for now.</p>;
  else
    content = (
      <Table
        className="problem-container"
        headers={[
          { name: "ID" },
          { name: "Level", sortable: true },
          { name: "Title" },
          // { name: "Categories" },
          { name: "Author" }
        ]}
        data={problems}
      />
    );

  const classes = clsx(
    "problem-explorer", 
    !problems && "loading", 
    problems && problems.length === 0 && "empty"
  );

  return (
    <Container className={classes}>
      {content}
    </Container>
  );
}

export default ProblemExplorer;