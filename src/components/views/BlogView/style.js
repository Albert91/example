import styled from 'styled-components/macro';
import Resolution from "../../../lib/Resolution";
import { P }  from "../../presentational/Generic";

export const BlocksRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  ${Resolution.tablet`
     flex-direction: row;
  `}
`;

export const Description = styled(P)``;
