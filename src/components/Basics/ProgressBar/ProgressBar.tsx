import React, { FC } from 'react';
import { useDSThemeContext } from '../../../context';
import * as S from './style';
import { ProgressBarProps } from './types';

const ProgressBar: FC<ProgressBarProps> = ({ value, max = 100, width }) => {
  const {
    theme: { progressBar },
  } = useDSThemeContext();

  const safeMax = max > 0 ? max : 100;
  const percent = Math.min(100, Math.max(0, (value / safeMax) * 100));

  return (
    <S.Track role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={safeMax} color={progressBar.track} width={width}>
      <S.Fill color={progressBar.fill} percent={percent} />
    </S.Track>
  );
};

export default ProgressBar;
