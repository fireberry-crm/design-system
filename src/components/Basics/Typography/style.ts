import styled, { css } from 'styled-components';


interface TextProps {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  textColor: string;
  bold?: boolean;
  underline?: boolean;
  ellipsis?: boolean;
}

export const Text = styled.span<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight, bold }) => (bold ? FONT_WEIGHT_BOLD : fontWeight)};
  color: ${({ textColor }) => textColor};
  margin: 0;
  padding: 0;

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}

  ${({ ellipsis }) =>
    ellipsis &&
    css`
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

const FONT_WEIGHT_BOLD = 700;
