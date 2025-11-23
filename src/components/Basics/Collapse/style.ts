import styled from 'styled-components';

export const CollapseContainer = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;
