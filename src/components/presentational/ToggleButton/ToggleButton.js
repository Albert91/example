import React from 'react';
import { ToggleButtonWrapper } from './style';
import Expand from '../../svg/Expand';
import Close from '../../svg/Close';

const ToggleButton = ({ isOpen }) => (
  <ToggleButtonWrapper>
    {isOpen ? <Close /> : <Expand />}
  </ToggleButtonWrapper>
);

export default ToggleButton;
