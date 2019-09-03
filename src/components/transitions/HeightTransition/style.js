import styled from "styled-components/macro";

export const HeightTransitionContainer = styled.div`
  overflow: hidden;
  transition: max-height ${props => props.timeout}ms;
  max-height: ${props => (props.state ? props.maxHeight : 0)}px;
  height: auto;
`;
