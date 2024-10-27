import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps {
  iconColor: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MyFavourite: React.FC<MyFavouriteProps> = ({ iconColor, disabled, onClick }) => (
  <IconButton onClick={onClick} disabled={disabled} sx={{ color: iconColor }}>
    <FavoriteIcon />
  </IconButton>
);

export default MyFavourite;

