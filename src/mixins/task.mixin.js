import { css } from 'styled-components';

import { getBgByPriority } from './priority.mixin';

export const priority = css`
  border-radius: 3px;
  padding: 0 12px;
  width: fit-content;
  height: auto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  ${getBgByPriority}
`;

export const date = css`
  color: ${({ theme }) => theme.colors.black};
`;

export const tags = css`
  height: 16px;
  line-height: 16px;
  padding: 0 8px;
  max-width: 198px;
  border-radius: 7px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.white};
  background-color:${({ theme }) => theme.colors.info};
`;