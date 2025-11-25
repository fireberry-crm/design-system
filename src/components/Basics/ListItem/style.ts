import styled from 'styled-components';
import { palette } from '../../../context/ThemeContext/palette';

export const ListItemContainer = styled.li<{ selected?: boolean; active?: boolean; clickable?: boolean; paddingInlineStart?: number }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  padding-inline-start: ${({ paddingInlineStart }) => `${paddingInlineStart}px`};
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ selected, active }) => (selected || active ? palette.ocean8 : palette.gray10)};
  background-color: ${({ selected }) => (selected ? palette.ocean1 : 'transparent')};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;

  &:hover {
    background-color: ${({ selected }) => (selected ? palette.ocean1 : palette.gray2)};
  }

  &:focus-visible {
    outline: 2px solid ${palette.ocean9};
    outline-offset: -2px;
  }
`;

export const ListItemText = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
`;

export const ListItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
