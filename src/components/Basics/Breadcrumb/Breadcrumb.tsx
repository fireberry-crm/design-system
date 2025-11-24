import React, { FC } from 'react';
import * as S from './style';
import { BreadcrumbProps } from './types';
import Icon from '../Icon';
import { IconName, IconSize } from '../Icon/types';
import { palette } from '../../../context/ThemeContext/palette';
import { useDSThemeContext } from '../../../context/ThemeContext';

const Breadcrumb: FC<BreadcrumbProps> = ({ items, onItemClick }) => {
  const { isRtl } = useDSThemeContext();
  const handleClick = (item: typeof items[0], index: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onItemClick) {
      e.preventDefault();
      onItemClick(item, index);
    }
  };

  const lastIndex = items.length - 1;

  return (
    <S.BreadcrumbContainer aria-label="Breadcrumb">
      <S.BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === lastIndex;
          const itemKey = item.key || item.label;

          return (
            <S.BreadcrumbItem key={itemKey}>
              <S.BreadcrumbLink
                href={item.href}
                onClick={handleClick(item, index)}
                isLast={isLast}
                tabIndex={0}
              >
                {item.label}
              </S.BreadcrumbLink>
              {!isLast && (
                <S.Separator>
                  <Icon
                    icon={isRtl ? IconName.AngleLeftSmall : IconName.AngleRightSmall}
                    size={IconSize['14px']}
                    color={palette.gray10}
                  />
                </S.Separator>
              )}
            </S.BreadcrumbItem>
          );
        })}
      </S.BreadcrumbList>
    </S.BreadcrumbContainer>
  );
};

export default Breadcrumb;
