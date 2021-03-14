import styled from 'styled-components'

export const StyledDate = styled.p`
    color: ${({theme}) => theme.colors.info};
`;

export const StyledDescription = styled.p`
    color: ${({theme}) => theme.colors.light};
`;

export const StyledPriority = styled.span`
    color: ${({theme}) => theme.colors.white};
    background-color:${({theme}) => theme.colors.info};
    border-radius: 3px;
    line-height: 32px;
    padding: 0 12px;
    width: auto;
`;

export const StyledTags = styled.span`
    color: ${({theme}) => theme.colors.white};
    height: 16px;
    line-height: 16px;
    padding: 0 8px;
    max-width: 198px;
`;