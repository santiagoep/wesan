import styled from 'styled-components';

export const StyledTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;
  max-width: 198px;
  border-radius: 5px;
  margin: 0 2px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: 10px;
  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
`;