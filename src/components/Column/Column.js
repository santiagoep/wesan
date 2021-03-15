import Col from 'react-bootstrap/Col';

import { StyledColumn, StyledTitle } from './Column.styled';

const Column = ({ title, children }) => (
    <StyledColumn>
        <StyledTitle>{title}</StyledTitle>
        {children}
    </StyledColumn>
)

export default Column;