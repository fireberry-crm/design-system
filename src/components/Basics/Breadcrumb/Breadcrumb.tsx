import React, { FC } from 'react';
import * as S from './style';
import { BreadcrumbProps } from './types';
import Icon from '../Icon';
import { IconName, IconSize } from '../Icon/types';
import { palette } from '../../../context/ThemeContext/palette';

const Breadcrumb: FC<BreadcrumbProps> = ({ items, onItemClick }) => {
  const handleClick = (item: typeof items[0], index: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onItemClick) {
      e.preventDefault();
      onItemClick(item, index);
    }
  };

  return (
    <S.BreadcrumbContainer aria-label="Breadcrumb">
      <S.BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
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
                <S.Separator >
                  <Icon icon={IconName.AngleRightSmall} size={IconSize['14px']} color={palette.gray10} />
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
