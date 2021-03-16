import { css } from 'styled-components';

import { getBgByPriority } from './priority.mixin';

export const priority = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 3px;
  padding: 0 12px;
  width: fit-content;
  height: auto;
  font-size: 9px;
  color: ${({ theme }) => theme.colors.white};
  ${getBgByPriority}
`;

export const date = css`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
`;
