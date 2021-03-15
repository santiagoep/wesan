import styled from 'styled-components';

import { priority, date, tags } from '../../mixins/task.mixin';

export const StyledDate = styled.p`
  ${date}
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.light};
`;

export const StyledPriority = styled.span`
  ${priority}
`;

export const StyledTags = styled.span`
  ${tags}
`;

export const StyledTagsContainer = styled.span`
  display: flex;
`;