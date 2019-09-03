import React from 'react';
import { Transition } from 'react-transition-group';
import { HeightTransitionContainer } from './style';

const HeightTransition = ({ in: inProp, maxHeight, timeout, children }) => (
  <Transition in={inProp} timeout={timeout}>
    <HeightTransitionContainer state={inProp} maxHeight={maxHeight} timeout={timeout}>
      {children}
    </HeightTransitionContainer>
  </Transition>
);

export default HeightTransition;
