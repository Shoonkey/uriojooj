import React, { useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';
import { getNextSortOption } from './util';
import { HeaderContainer } from './styles';

function Header({ name, keyCorrespondent, sortable }) {

  const [sortingBy, setSortingBy] = useState(null);
  const headerName = keyCorrespondent || name.toLowerCase().replace(/\s+/g, '_');

  const updateSortState = () => {
    const nextOption = getNextSortOption(sortingBy);
    setSortingBy(nextOption);
  }

  return (
    <HeaderContainer sortingBy={sortingBy} className={headerName}>
      {
        sortable ? (
          <Button 
            theme="discreet" 
            onClick={updateSortState}
          >
            <p>{name}</p>
            <Icon name="arrow-down-outline" />
          </Button>
        ) : <p>{name}</p>
      }
    </HeaderContainer>
  );
}

export default Header;