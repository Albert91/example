import React from 'react';
import styled from 'styled-components/macro';
import { GreenColor } from '../../lib/variables';

const Svg = styled.svg`
  vertical-align: top;
`;

export default () =>
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill={GreenColor} />
    <path
      fill="#FFF"
      d="M13.094 17.957l-.076-4.94 4.94.077c.21.003.373-.161.361-.362l-.023-1.49-5.307-.081-.082-5.325-1.489-.023a.346.346 0 0 0-.362.362l.076 4.94-4.94-.059a.346.346 0 0 0-.362.362l.023 1.49 5.308.08.082 5.326 1.489.023a.37.37 0 0 0 .362-.38z"
    />
  </Svg>
