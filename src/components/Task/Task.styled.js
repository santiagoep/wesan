import styled from 'styled-components';

import { priority, date } from '../../mixins/task.mixin';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, .125);
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 5px;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.light};
  }
`;

export const StyledDate = styled.p`
  ${date}
  margin-left: auto;
`;

export const StyledPriority = styled.span`
  ${priority}
`;
