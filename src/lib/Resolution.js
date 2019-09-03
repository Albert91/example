import { css } from 'styled-components';

export const sizes = {
  phone: 530,
  tablet: 768,
  desktop: 960,
  hd: 1366,
  fullHd: 1480,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
