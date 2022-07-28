import React from 'react';
import { LoadingContainer, AnimatedIcon } from './loading.styles';
const Loading = (props) => {
  return (
    <LoadingContainer>
      <AnimatedIcon src={props.logo} alt='logo-spinner' />
    </LoadingContainer>
  );
};

export default Loading;
