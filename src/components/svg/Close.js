import React from 'react';
import styled from 'styled-components/macro';

const Svg = styled.svg`
  vertical-align: top;
`;

export default () =>
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#15e59e" />
    <path
      fill="#FFF"
      d="M17.957 13.094c.21.003.374-.161.362-.362l-.023-1.49-5.307-.081-1.857-.046-4.94-.059a.346.346 0 0 0-.362.362l.023 1.49 12.104.186z"
    />
  </Svg>;
