import styled from 'styled-components';

interface TrackProps {
  color: string;
  width?: number;
}

interface FillProps {
  color: string;
  percent: number;
}

export const Track = styled.div<TrackProps>`
  display: inline-block;
  box-sizing: border-box;
  height: 5px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  background-color: ${({ color }) => color};
  border-radius: 50px;
  overflow: hidden;
`;

export const Fill = styled.div<FillProps>`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  background-color: ${({ color }) => color};
  border-radius: 50px;
  transition: width 0.3s ease-in-out;
`;
