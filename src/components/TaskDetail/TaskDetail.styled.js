import styled from 'styled-components';

import { priority, date } from '../../mixins/task.mixin';

export const StyledDate = styled.p`
  ${date}
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.light};
`;

export const StyledPriority = styled.p`
  ${priority}
`;

export const StyledLabel = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledBlock = styled.div`
  display: flex;
  margin: 5px 0;
`;