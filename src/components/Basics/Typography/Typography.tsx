import React, { FC } from 'react';
import { Color } from '../../../types';
import { useDSThemeContext } from '../../../context/ThemeContext';
import * as S from './style';
import { TypographyProps, TypographyType } from './types';

const Typography: FC<TypographyProps> = ({
  type = TypographyType.text,
  children,
  color = Color.neutral,
  bold = false,
  underline = false,
  ellipsis = false,
}) => {
  const { theme } = useDSThemeContext();
  const { fontSize, lineHeight, fontWeight = 400 } = theme.typography[type];
  const textColor = theme.typography.colors[color];

  const htmlElement = HTML_ELEMENTS?.[type as keyof typeof HTML_ELEMENTS] || 'span';

  return (
    <S.Text
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textColor={textColor}
      bold={bold}
      underline={underline}
      ellipsis={ellipsis}
      as={htmlElement}
    >
      {children}
    </S.Text>
  );
};

export default Typography;
 
const HTML_ELEMENTS= {h1:'h1',h2:'h2',h3:'h3'} as const;
