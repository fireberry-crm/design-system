import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  & > li:not(:first-child) {
    margin-block-start: 8px;
  }
`;
