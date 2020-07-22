import React from 'react';
import { useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';
import { HeaderContainer } from './styles';

const SORT_OPTIONS = [null, "DESC", "ASC"];

function getNextSortOption(currentOption){

  const idx = SORT_OPTIONS.indexOf(currentOption);
  const len = SORT_OPTIONS.length;

  return SORT_OPTIONS[(idx + 1) % len];
}

function Header({ name, keyCorrespondent, sortable }) {

  const [sortingBy, setSortingBy] = useState(null);

  const className = keyCorrespondent || name.toLowerCase().replace(/\s+/g, '_');

  return (
    <HeaderContainer sortingBy={sortingBy} className={className}>
      {
        sortable ? (
          <Button 
            theme="discreet" 
            onClick={() => setSortingBy(getNextSortOption(sortingBy))}
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