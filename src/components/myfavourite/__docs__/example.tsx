import React from 'react';
import MyFavorite, { MyFavoriteProps } from '../myfavourite';

function Example(props: MyFavouriteProps) {
  return (
    <MyFavourite
      iconColor={props.iconColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example; 