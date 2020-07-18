import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../UserProvider';
import { Container } from './styles';

function Page({ authOnly, children, ...props }) {

  const { user } = useContext(UserContext);

  if (authOnly && !user) 
    return <Redirect to="/auth" />;

  return <Container {...props}>{children}</Container>;
}

export default Page;