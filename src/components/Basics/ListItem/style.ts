import styled from 'styled-components';
import { palette } from '../../../context/ThemeContext/palette';

export const ListItemContainer = styled.li<{ selected?: boolean; active?: boolean; disabled?: boolean; clickable?: boolean; indent?: number }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 6px 6px 12px;
  padding-left: ${({ indent }) => (indent ? `${12 + indent * 28}px` : '12px')};
  min-height: 40px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ selected, active }) => (selected || active ? palette.ocean8 : palette.gray10)};
  background-color: ${({ selected }) => (selected ? palette.ocean1 : 'transparent')};
  border-radius: 8px;
  cursor: ${({ clickable, disabled }) => (disabled ? 'not-allowed' : clickable ? 'pointer' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ selected, disabled }) =>
      disabled ? 'transparent' : selected ? palette.ocean1 : palette.gray2};
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
