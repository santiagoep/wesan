import { css } from 'styled-components';

export const typography = ({ fontSize }) => css`
    font-size: ${fontSize ? fontSize : '16px'};
`