import { css } from 'styled-components';

import { isAPriority } from '../utils/tasks';

export const getBgByPriority = ({ priority, theme }) => 
  isAPriority(priority) && css`
    background-color: ${theme.colors[priority]};
  `;