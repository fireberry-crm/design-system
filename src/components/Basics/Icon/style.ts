import styled from 'styled-components';
import nucleoEot from './fonts/Nucleo.eot';
import nucleoSvg from './fonts/Nucleo.svg';
import nucleoTtf from './fonts/Nucleo.ttf';
import nucleoWoff from './fonts/Nucleo.woff';
import nucleoWoff2 from './fonts/Nucleo.woff2';
import { IconSize } from './types';

interface StyledIconProps {
  color?: string;
  size?: IconSize | `${IconSize}`;
  animation?: string;
}

export const Icon = styled.i<StyledIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ size }) => size} !important;
  flex-shrink: 0;
  color: ${({ color }) => color || 'inherit'};
  animation: ${({ animation }) => animation};

  @keyframes fb-icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  font: normal normal normal 1em/1 'Nucleo-v2';
  flex-shrink: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @font-face {
    font-family: 'Nucleo-v2';
    src: url(${nucleoEot});
    src:
      url(${nucleoEot}) format('embedded-opentype'),
      url(${nucleoWoff2}) format('woff2'),
      url(${nucleoWoff}) format('woff'),
      url(${nucleoTtf}) format('truetype'),
      url(${nucleoSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;
