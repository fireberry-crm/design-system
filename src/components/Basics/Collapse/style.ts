import styled from 'styled-components';

export const CollapseContainer = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  transition: max-height 0.1s ease-out;
`;
