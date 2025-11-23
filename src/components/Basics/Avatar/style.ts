import styled from 'styled-components';
import { palette } from '../../../context/ThemeContext/palette';

export const AvatarContainer = styled.div<{ $backgroundColor: string }>`
  width: 89px;
  height: 89px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarInitial = styled.span`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${palette.white};
  text-transform: uppercase;
  user-select: none;
`;
