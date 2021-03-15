import styled from 'styled-components';

export const StyledColumn = styled.div`
    padding: 10px;
    min-width: 272px;
    max-width: 272px;
    min-height: 100%;
    margin: 0 7px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledTitle = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.colors.light};
`;