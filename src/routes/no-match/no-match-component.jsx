import React from 'react';
import {
  NoMatchContainer,
  NoMatchHeader,
  NoMatchPara,
} from './no-match.styles';

const NoMatch = () => {
  return (
    <NoMatchContainer>
      <NoMatchHeader>Ooops...</NoMatchHeader>
      <NoMatchPara>
        Sembra che in questa pagina non ci sia niente, torna indietro per
        scoprire le nostre squisite proposte.
      </NoMatchPara>
    </NoMatchContainer>
  );
};

export default NoMatch;
