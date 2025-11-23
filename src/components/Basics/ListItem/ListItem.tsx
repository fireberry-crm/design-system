import React, { FC } from 'react';
import * as S from './style';
import { ListItemProps } from './types';
import { ListItemContext } from './ListItemContext';

const ListItem: FC<ListItemProps> = ({
  children,
  logo,
  logoPosition = 'start',
  indent,
  selected = false,
  active = false,
  disabled = false,
  onClick,
}) => {
  const hasClickHandler = !!onClick;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <ListItemContext.Provider value={{ selected, active }}>
      <S.ListItemContainer
        selected={selected}
        active={active}
        disabled={disabled}
        clickable={hasClickHandler}
        indent={indent}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : hasClickHandler ? 0 : undefined}
        role={hasClickHandler ? 'button' : undefined}
      >
        {logo && logoPosition === 'start' && <S.ListItemLogoContainer>{logo}</S.ListItemLogoContainer>}
        {children}
        {logo && logoPosition === 'end' && <S.ListItemLogoContainer>{logo}</S.ListItemLogoContainer>}
      </S.ListItemContainer>
    </ListItemContext.Provider>
  );
};

export default ListItem;
