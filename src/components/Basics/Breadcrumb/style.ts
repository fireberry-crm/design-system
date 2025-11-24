import styled from 'styled-components';
import { palette } from '../../../context/ThemeContext/palette';

export const BreadcrumbContainer = styled.nav``;

export const BreadcrumbList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BreadcrumbLink = styled.a<{ isLast: boolean }>`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ isLast }) => (isLast ? palette.gray8 : palette.gray10)};
  text-decoration: none;
  cursor: ${({ isLast }) => (isLast ? 'default' : 'pointer')};
  pointer-events: ${({ isLast }) => (isLast ? 'none' : 'auto')};
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;

  &:hover {
    text-decoration: ${({ isLast }) => (isLast ? 'none' : 'underline')};
  }

  &:focus {
    outline: none;
    color: ${palette.ocean10};
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  display: flex;
  align-items: center;
  color: ${palette.gray10};
  user-select: none;
`;
